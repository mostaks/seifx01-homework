// const oneBank = [

//     {
//         customer: 'Tom Selek',
//         account: 1234,
//         currentBalance: 50000,
//         withdrawal: 35789
//     },

//     {
//         customer: 'Nicole Kidman',
//         account: 5678,
//         currentBalance: 90876,
//         withdrawal: 567
//     },

//     {
//         customer: 'Alison Cooper',
//         account: 9876,
//         currentBalance: 678,
//         withdrawal: 500
//     },

//     {
//         customer: 'Ben and Jerrys',
//         account: 5432,
//         currentBalance: 87900,
//         withdrawal: 45789
//     },
// ]

// var sum = 0;
// oneBank.forEach(function(item){
//     sum += item.currentBalance;
// })

// console.log(`total of account balances is $${sum}`);


// function addAccount(){ 
//     oneBank.push['customer(String), account(Number), currentBalance(Number), withdrawal(Number)'];
// };

// addAccount();
// console.log(oneBank);
// //not working

// console.log('--------------------------------');

// //SOLUTION

// let bank = {};

// let aaron = bank.addAccount('Aaron', 10);
// let aaron = bank.addAccount('Bob', 10);
// let aaron = bank.addAccount('Fred', 10);

// aaron.deposit (10);
// fred.deposit (20);

//  aaron.withdraw(5);
//  bob.withdraw(5);

//  bank.showTotal(); // should print 30
//  bank.displayAllAccounts();
//
//  Name      Amount
//  Aaron         10
//  Bob           10
//  Fred          10

let bank = {

    accounts : [],

    addAccount: function(accountName, initialBalance){
        let account = {
            name: accountName,
            balance: initialBalance,
            deposit: function(amount){
                this.balance += amount;
            },
            withdraw: function(amount){
                //TODO: what should happen if there is not enough balance 
                //to withdraw the requested amount??
                this.balance -= amount;
            }
        };

        this.accounts.push(account);
        return account;
    },

    getTotal: function(){
        let total = 0;
        this.accounts.forEach(function(acc){
            console.log(`${acc.name}\t\t ${acc.balance}`);
        }); 
    },
    
    displayAllAccounts: function (){
    
    }
};

 console.log('Total : $' + bank.getTotal()); // should print 30

let aaron = bank.addAccount('Aaron', 10);
let bob = bank.addAccount('Bob', 10);
let fred = bank.addAccount('Fred', 10);

let bank = {

    accounts: [],

    addAccount: function(accountName, initialBalance) {

        if(arguments.length !== 2 ) {
            throw new Error('Method must have at 2 parameters');
        }

        if(typeof accountName !== 'string'){
            throw new Error('accountName must be a string');
        }

        let account = {
            name: accountName,
            balance: initialBalance,
            deposit: function(amount) {
                this.balance += amount;
            },
            withdraw: function(amount) {
                // TODO: what should happen if there is not enough balance
                // to withdraw the requested amount???
                this.balance -= amount;
            },
            transferTo: function(otherAccount, amount){
                if( this.withdraw() === amount )
                    otherAccount.deposit(amount);
            }
        };

        this.accounts.push(account);
        return account;
    },
    getTotal: function() {
        let total = 0;
        this.accounts.forEach(function(acc){
            total += acc.balance;
        });
        return total;
    },
    displayAllAccounts: function() {
        console.log('Name\t\tBalance');
        this.accounts.forEach(function(acc){
            console.log(`${acc.name}\t\t${acc.balance}`);
        });
    },
    transfer: function(fromAccount, toAccount, amount) {
        fromAccount.transferTo(toAccount, amount);
    }
};

let aaron = bank.addAccount();
let bob = bank.addAccount(10, 'Aaron');
let fred = bank.addAccount('Fred', 10, 'aaa', 20, false);


aaron.deposit(10);
fred.deposit(20);
aaron.withdraw(5);
bob.withdraw(5);

aaron.transferTo(fred, 10);
bank.transfer(aaron, fred, 10);

bank.displayAllAccounts();
bank2.displayAllAccounts();
console.log('Total: $' + bank.getTotal()); // should print 30