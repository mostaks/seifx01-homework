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
        let accountRow = document.createElement('tr');
        accountRow.innerHTML =`
            <td class="account-name">${account.name}</td>
            <td>$ ${account.balance}</td>
            <td>
          <div class="dropdown">
            <button class="action-dropdown right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a id="deposit-${account.name}" class="dropdown-item" data-toggle="modal" data-target="#depositModal">Deposit</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#withdrawModal">Withdraw</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#transferModal">Transfer</a>
            </div>
            </td>`
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
    let initialBalanceInt = parseInt(initialBalance)
    let form = document.getElementById('new-account-form');
    if (!accountName) {
      
    } else {
      bank.addAccount(accountName, initialBalanceInt);
      console.log(bank);
      bank.displayAllAccounts();
      form.reset();
    }
  });

  document.getElementById('deposit-money').addEventListener('click', function() {
    let depositAmount = document.getElementById('deposit-amount').value;
    let form = document.getElementById('deposit-form');
    // let accountOwner = document.querySelector(".account-name");
    let accountOwner = 'Pitt';
    if (!depositAmount) {

    } else {
      accountOwner.deposit(depositAmount);
      bank.displayAllAccounts();
      form.reset();
    }
  });


  

  let pitt = bank.addAccount('Pitt',100);
  pitt.deposit(200);
  let pat = bank.addAccount('Pat', 200);
  let tintin = bank.addAccount('Tintin', 1000);
  pitt.transferTo(tintin,200);
  bank.transfer(tintin,pat,200);
  tintin.withdraw(500);
  console.log(`Total: $` + bank.getTotal());
  bank.displayAllAccounts();
  