import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer } from 'react-toastify';
import notyfy from '../services/notyfy';
import storage from '../services/storage';
import Controls from '../Controls';
import Balance from '../Balance';
import TransactionHistory from '../TransactionHistory';

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  componentDidMount() {
    const savedTransactions = storage.get('transactions');
    if (savedTransactions) {
      this.setState(() => ({
        transactions: savedTransactions.transactions,
        balance: savedTransactions.balance,
      }));
    }
  }

  componentDidUpdate(prevState) {
    const { transactions, balance } = this.state;

    if (prevState.transactions !== transactions) {
      storage.set('transactions', { transactions, balance });
    }
  }

  createTransaction = (amount, type) => {
    return {
      id: shortid.generate(),
      type,
      amount: Number(amount),
      date: new Date(Date.now()).toLocaleString(),
    };
  };

  handleDeposit = inputAmount => {
    const amount = Number(inputAmount);
    if (amount < 0) {
      notyfy.negativeBalance();
      return;
    }
    if (amount === 0) {
      notyfy.notSumm();
      return;
    }

    const transaction = this.createTransaction(amount, 'deposit');
    this.setState(prevState => ({
      transactions: [...prevState.transactions, transaction],
      balance: prevState.balance + amount,
    }));
  };

  handleWithdraw = inputAmount => {
    const amount = Number(inputAmount);

    if (amount < 0) {
      notyfy.negativeBalance();
      return;
    }
    if (amount === 0) {
      notyfy.notSumm();
      return;
    }

    const { balance } = this.state;
    if (amount > balance) {
      notyfy.lackOfBalance();
      return;
    }

    const transaction = this.createTransaction(amount, 'withdraw');
    this.setState(prevState => ({
      transactions: [...prevState.transactions, transaction],
      balance: prevState.balance - amount,
    }));
  };

  onBalanceOrWithdraw = () => {
    const { transactions } = this.state;
    return transactions.reduce(
      (acc, curent) => {
        return {
          ...acc,
          [curent.type]: curent.amount + acc[curent.type],
        };
      },
      { deposit: 0, withdraw: 0 },
    );
  };

  render() {
    const { transactions, balance } = this.state;
    const { deposit, withdraw } = this.onBalanceOrWithdraw();
    return (
      <div className="dashboard">
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
        />
        <Balance expenses={withdraw} income={deposit} balance={balance} />
        {transactions.length > 0 && (
          <TransactionHistory hystory={transactions} />
        )}
        <ToastContainer />
      </div>
    );
  }
}
