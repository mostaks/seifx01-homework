'use strict';

/**
 * Creates an account object.
 * @constructor
 * @param {*} ownerName 
 * @param {*} currentBalance 
 */
const Account = function (ownerName, currentBalance) {
  this.ownerName = ownerName;
  this.currentBalance = currentBalance;
  this.deposit = function (money) {
    if (!(money > 0))  {
      console.error('You must deposit an amount of money.');
    } else {
      currentBalance += money;
      console.log(`$${money.toFixed(2)} deposited. ` +
      `Current balance: $${currentBalance.toFixed(2)}`);  
    }
  };
  this.withdraw = function (money) {
    if (money <= this.currentBalance) {
      currentBalance -= money;
      console.log(`$${money.toFixed(2)} withdrawn. Remaining balance: ` +
          `$${currentBalance.toFixed(2)}`);
    } else {
      console.error(`Error: You don't have enough money.`);
    }
  }

}

const bank = {
  accounts: [],
  totalSumOfMoney: function() {
    let sum = 0;
    for (let i in this.accounts) {
      sum += this.accounts[i].currentBalance;
    }
    console.log(`Money in the bank: $${sum.toFixed(2)}`);
  },
  addAccount: function(ownerName, currentBalance) {
    this.accounts.push(new Account(currentBalance, ownerName));
    console.log('Account Added.');
  },
};


bank.addAccount(1000, 'Patrick');
bank.addAccount(3000, 'Martha');
bank.accounts[0].withdraw(50);
bank.accounts[0].deposit(500);
bank.totalSumOfMoney();
