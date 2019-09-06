'use strict';

/**
 * Creates an account object.
 * @constructor
 * @param {*} ownerName 
 * @param {*} currentBalance 
 */
const Account = function (ownerName, currentBalance) {
  this.ownerName = ownerName;
  this.currentBalance = Number(currentBalance);
  this.deposit = function (money) {
    if (!(money > 0))  {
      console.error('You must deposit an amount of money.');
    } else {
      this.currentBalance += money;
      console.log(`$${money.toFixed(2)} deposited. ` +
      `Current balance: $${this.currentBalance.toFixed(2)}`);  
    }
  };
  this.withdraw = function (money) {
    if (money <= this.currentBalance) {
      this.currentBalance -= money;
      console.log(`$${money.toFixed(2)} withdrawn. Remaining balance: ` +
          `$${this.currentBalance.toFixed(2)}`);
    } else {
      console.error(`Error: You don't have enough money.`);
    }
  }

}


/**
 * 
 */
const bank = {
  this.accounts: [],
  this.displayAllAccounts: function() {
    console.log('Name\t\tBalance');
    this.accounts.forEach(function(acc) {
      console.log(`${acc.ownerName}\t\t$${acc.currentBalance.toFixed(2)}`);
    })

  },
  
  getTotalSumOfMoney: function() {
    let sum = 0;
    for (let i in this.accounts) {
      sum += this.accounts[i].currentBalance;
    }
    console.log(`Money in the bank: $${sum.toFixed(2)}`);
  },
  
  addAccount: function(ownerName, currentBalance) {
    this.accounts.push(new Account(ownerName, currentBalance));
    console.log(`${ownerName}'s account sucessfully added. ` +
        `Opening balance: $${currentBalance}`);
  },

  transferBetweenAccounts: function(accountNumberFrom, accountNumberTo, transferAmount) {
    if (this.accounts[accountNumberFrom].currentBalance < transferAmount) {
      throw new Error('Money transfer failed: Not enough cash.');
    } else {
      this.accounts[accountNumberFrom] -= transferAmount;
      this.accounts[accountNumberTo] += transferAmount;
    };
  },
};




bank.addAccount('Patrick', 1000);
bank.addAccount('Martha', 3000);
bank.accounts[0].withdraw(50);
bank.accounts[0].deposit(500);
bank.accounts[0].deposit(433);
bank.getTotalSumOfMoney();
bank.displayAllAccounts();
