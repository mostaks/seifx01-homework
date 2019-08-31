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
      let listOfAccounts = document.getElementById("account-list");
      listOfAccounts.innerHTML ='';
      this.accounts.forEach(function(account){
        let accountRow = document.createElement('div');
        accountRow.className = 'row';
        accountRow.innerHTML =`<div class="column"><span>${account.name}</span></div><div class="column"><span>$ ${account.balance}</span></div><ion-icon name="more" class="right"></ion-icon>
        </span>`
        listOfAccounts.appendChild(accountRow);
        console.log(account.name + `\t\t$` + account.balance);
      });
    },
    transfer: function(fromAccount, toAccount, amount) {
      fromAccount.transferTo(toAccount, amount);
    }
  };
  
  document.getElementById('create-account').addEventListener('click', function() {
    let accountName = document.getElementById('account-name').value;
    let initialBalance = document.getElementById('initial-deposit').value;
    let form = document.getElementById('new-account-form');
    if (!accountName) {
      
    } else {
      bank.addAccount(accountName, initialBalance);
      console.log(bank);
      bank.displayAllAccounts();
      newAccountModal.style.display = "none";
      form.reset();
    }
  });
  
  let newAccountModal = document.getElementById("new-account-modal");
  let newAccountBtn = document.getElementById("new-account-btn");
  let cancelBtn = document.getElementsByName("cancel-btn");

  cancelBtn.onclick = function() {
    newAccountModal.style.display = "none";
  }

  newAccountBtn.onclick = function() {
    newAccountModal.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == newAccountModal) {
      newAccountModal.style.display = "none";
    }
  }

  let pitt = bank.addAccount('Pitt',100);
  pitt.deposit(200);
  let pat = bank.addAccount('Pat', 200);
  let tintin = bank.addAccount('Tintin', 1000);
  pitt.transferTo(tintin,200);
  bank.transfer(tintin,pat,200);
  tintin.withdraw(500);
  console.log(`Total: $` + bank.getTotal());
  bank.displayAllAccounts();
  