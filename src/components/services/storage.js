const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return null;
  } catch (err) {
    return null;
  }
};

const get = key => {
  try {
    const transactions = localStorage.getItem(key);
    return transactions ? JSON.parse(transactions) : null;
  } catch (err) {
    return null;
  }
};

export default {
  set,
  get,
};
