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

let aaron = bank.addAccount('Aaron', 50);
let bob = bank.addAccount('Bob', 15);
let fred = bank.addAccount('Fred', 10);


aaron.deposit(20);
fred.deposit(20);
aaron.withdraw(5);
bob.withdraw(5);

//aaron.transferTo(fred, 10);
//bank.transfer(aaron, fred, 10);

bank.displayAllAccounts();
console.log('Total: $' + bank.getTotal()); // should print 30