(this["webpackJsonpreact-group-7"]=this["webpackJsonpreact-group-7"]||[]).push([[0],{2:function(t,e,a){t.exports={transaction:"TransactionHistory_transaction__fKYqy",firstRow:"TransactionHistory_firstRow__3i-UI",columnTitle:"TransactionHistory_columnTitle__2hZ2T",row:"TransactionHistory_row__2QbpB",column:"TransactionHistory_column__3GP-b"}},21:function(t,e,a){t.exports=a(40)},26:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(4),o=a.n(c),s=(a(26),a(14)),l=a(15),i=a(9),u=a(10),m=a(12),p=a(11),b=a(13),f=a(18),h=a.n(f),d=a(3),y=(a(35),{notSumm:function(){return Object(d.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},lackOfBalance:function(){return Object(d.b)("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},negativeBalance:function(){return Object(d.b)("\u0412\u0432\u0435\u0434\u0451\u043d \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430")}}),O=function(t,e){try{return localStorage.setItem(t,JSON.stringify(e)),null}catch(a){return null}},v=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(a){return null}},w=a(6),E=a.n(w),_=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={amount:0},a.handleChangeInput=function(t){a.setState({amount:t.currentTarget.value})},a.hendleDeposit=function(){a.props.onDeposit(a.state.amount),a.setState({amount:0})},a.hendleWithdraw=function(){a.props.onWithdraw(a.state.amount),a.setState({amount:0})},a}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state.amount;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{className:E.a.input,type:"number",name:"amount",value:0===t?"":t,onChange:this.handleChangeInput}),r.a.createElement("button",{className:E.a.button,type:"button",onClick:this.hendleDeposit},"Deposit"),r.a.createElement("button",{className:E.a.button,type:"button",onClick:this.hendleWithdraw},"Withdraw"))}}]),e}(n.Component),g=a(7),j=a.n(g),N=function(t){var e=t.expenses,a=t.income,n=t.balance;return r.a.createElement("section",{className:j.a.balance},r.a.createElement("span",{className:j.a.span},"\ufe0f",a,"$"),r.a.createElement("span",{className:j.a.span},"\ufe0f",e,"$"),r.a.createElement("span",{className:j.a.span},"Balance: ",n,"$"))};N.defaultProps={expenses:0,income:0,balance:0};var D=N,S=a(2),T=a.n(S),k=function(t){var e=t.hystory;return r.a.createElement("table",{className:T.a.transaction},r.a.createElement("thead",{className:T.a.firstRow},r.a.createElement("tr",null,r.a.createElement("th",{className:T.a.columnTitle},"Transaction"),r.a.createElement("th",{className:T.a.columnTitle},"Amount"),r.a.createElement("th",{className:T.a.columnTitle},"Date"))),r.a.createElement("tbody",null,e.map((function(t){return r.a.createElement("tr",{key:t.id,className:T.a.row},r.a.createElement("td",{className:T.a.column},t.type),r.a.createElement("td",{className:T.a.column},t.amount,"$"),r.a.createElement("td",{className:T.a.column},t.date))}))))};function B(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var C=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0},a.createTransaction=function(t,e){return{id:h.a.generate(),type:e,amount:Number(t),date:new Date(Date.now()).toLocaleString()}},a.handleDeposit=function(t){var e=Number(t);if(e<0)y.negativeBalance();else if(0!==e){var n=a.createTransaction(e,"deposit");a.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[n]),balance:t.balance+e}}))}else y.notSumm()},a.handleWithdraw=function(t){var e=Number(t);if(e<0)y.negativeBalance();else if(0!==e){var n=a.state.balance;if(e>n)y.lackOfBalance();else{var r=a.createTransaction(e,"withdraw");a.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[r]),balance:t.balance-e}}))}}else y.notSumm()},a.onBalanceOrWithdraw=function(){return a.state.transactions.reduce((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?B(a,!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,Object(s.a)({},e.type,e.amount+t[e.type]))}),{deposit:0,withdraw:0})},a}return Object(b.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=v("transactions");t&&this.setState((function(){return{transactions:t.transactions,balance:t.balance}}))}},{key:"componentDidUpdate",value:function(t){var e=this.state,a=e.transactions,n=e.balance;t.transactions!==a&&O("transactions",{transactions:a,balance:n})}},{key:"render",value:function(){var t=this.state,e=t.transactions,a=t.balance,n=this.onBalanceOrWithdraw(),c=n.deposit,o=n.withdraw;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(_,{onDeposit:this.handleDeposit,onWithdraw:this.handleWithdraw}),r.a.createElement(D,{expenses:o,income:c,balance:a}),e.length>0&&r.a.createElement(k,{hystory:e}),r.a.createElement(d.a,null))}}]),e}(n.Component),P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};o.a.render(r.a.createElement(P,null),document.getElementById("root"))},6:function(t,e,a){t.exports={controls:"Controls_controls__13AIG",input:"Controls_input__2Af2m",button:"Controls_button__3AGX0"}},7:function(t,e,a){t.exports={balance:"Balance_balance__1AdGp",span:"Balance_span__3ih3l"}}},[[21,1,2]]]);
//# sourceMappingURL=main.6ebe8be8.chunk.js.map