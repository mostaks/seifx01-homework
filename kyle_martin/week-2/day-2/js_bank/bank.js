let bank = {

    accounts: [],

    addAccount: function(accountName, initialBalance) {
       
       if(arguments.length !== 2 ){
            throw new Error('method must be passed at least 2 paramaters')
       }
       if(typeof accountName !== 'string'){
            throw new Error('account name must be a string.');
       }
       
        let account = {
            name: accountName,
            balance: initialBalance,
            deposit: function(amount) {
                this.balance += amount;
            },
            withdraw: function(amount) {
                this.balance -= amount;
            }
        };

        this.accounts.push(account);
        return account;
    },
    getTotal: function() {
        let total = 0;
        this.accounts.forEach(acc => {
            total += acc.balance;
        });
        return total;
    },
    displayAllAccounts: function(){
        console.log(`Name\t\tBalance`);
        this.accounts.forEach(acc => {
            console.log(`${acc.name}\t\t${acc.balance}`);
        });
    }
}; 

let aaron = bank.addAccount('Aaron', 10);
let kyle = bank.addAccount('Kyle', 10);
let fred = bank.addAccount('Fred', 10);

bank.displayAllAccounts();
console.log('Total: $' + bank.getTotal()); //should print 30


// aaron.deposit(10);
// fred.deposit(20);

// aaron.withdraw(5);