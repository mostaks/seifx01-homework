let bank = {
    accounts: [],
    addAccount: function(accountName, initialBalance) {
      let account = {
        name: accountName,
        balance: initialBalance,
        deposit: function(amount) {
          this.balance += amount;
        },
        withdraw: function(amount) {
          this.balance -= amount;
        },
        transferTo: function(anotherAccount, amount) {
          this.withdraw(amount);
          anotherAccount.deposit(amount);
        }
      };
      this.accounts.push(account);
      return account;
    },
    getTotal: function() {
      let total = 0;
      this.accounts.forEach(function(account){
        total += account.balance;
      });
      return total;
    },
    displayAllAccounts: function() {
      console.log(`Name\t\tBalance`);
      this.accounts.forEach(function(account){
        console.log(account.name + `\t\t$` + account.balance);
      });
    },
    transfer: function(fromAccount, toAccount, amount) {
      fromAccount.transferTo(toAccount, amount);
    }
  };
  
  
  let pitt = bank.addAccount('Pitt',100);
  pitt.deposit(200);
  let pat = bank.addAccount('Pat', 200);
  let tintin = bank.addAccount('Tintin', 1000);
  pitt.transferTo(tintin,200);
  bank.transfer(tintin,pat,200);
  tintin.withdraw(500);
  console.log(`Total: $` + bank.getTotal());
  bank.displayAllAccounts();
  