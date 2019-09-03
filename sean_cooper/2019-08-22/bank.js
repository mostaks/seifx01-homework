bank.js

const bank = {
  harry: '1000.50',
  ron: '7.32',
  hermione: '40.11'
};

function bank_balance(object) {
  let total = 0;
  for (let key in object) {
    total = total + parseFloat(object[key]);
  };
  return total;
};

function add_account (name, balance) {
  if(balance < 0) {
    return console.log('account must be created with positive balance');
  };
  bank[name] = balance;
};

function transfer (sender, receiver, amount) {
  if(bank[sender] - amount < 0) {
    return console.log('insufficient funds')
  };
  bank[sender] = parseFloat(bank[sender]) - amount;
  bank[receiver] = parseFloat(bank[receiver]) + amount;
};