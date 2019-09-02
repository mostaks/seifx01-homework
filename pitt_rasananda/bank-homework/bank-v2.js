let selectedAccount;
let emptyState = document.getElementById('empty-state');

function checkEmptyState() {
  if(bank.accounts.length === 0 ) {    
    document.getElementById('table').style.display = "none";
    emptyState.style.display = "block";
  } else if (bank.accounts.length >= 1) {
    emptyState.style.display = "none";
    document.getElementById('table').style.display = "table";
  }
}

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
      let listOfAccountsOptions = document.getElementById("transfer-to");
      listOfAccountsOptions.innerHTML ='';
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
        
        accountRow.addEventListener('click', function() {
          selectedAccount = this.rowIndex-1;
        });

        listOfAccounts.appendChild(accountRow);

        let option = document.createElement('option');
        option.text = `${account.name}`;
        option.value = `${account.name}`;
        listOfAccountsOptions.appendChild(option);

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
      checkEmptyState();
      bank.displayAllAccounts();
      form.reset();
    }
  });

  document.getElementById('deposit-money').addEventListener('click', function() {
    let depositAmount = document.getElementById('deposit-amount').value;
    let depositAmountInt = parseInt(depositAmount);
    let form = document.getElementById('deposit-form');
    let accountOwner = bank.accounts[selectedAccount];
    if (!depositAmount) {
    } else {
      accountOwner.deposit(depositAmountInt);
      bank.displayAllAccounts();
      form.reset();
    }
  });

  document.getElementById('withdraw-money').addEventListener('click', function() {
    let withdrawAmount = document.getElementById('withdraw-amount').value;
    let withdrawAmountInt = parseInt(withdrawAmount);
    let form = document.getElementById('withdraw-form');
    let accountOwner = bank.accounts[selectedAccount];
    if (!withdrawAmount) {

    } else {
      accountOwner.withdraw(withdrawAmountInt);
      bank.displayAllAccounts();
      form.reset();
    }
  });

  document.getElementById('transfer-money').addEventListener('click', function() {
    let transferAmount = document.getElementById('transfer-amount').value;
    let transferAmountInt = parseInt(transferAmount);
    let form = document.getElementById('transfer-form');
    let accountOwner = bank.accounts[selectedAccount];
    let accountOption = document.getElementById('transfer-to');
    let anotherAccount = accountOption.value;

    for(i = 0; i < bank.accounts.length; i++) {
      if (anotherAccount === bank.accounts[i].name)
      anotherAccount = bank.accounts[i];
    }
    if (!transferAmount) {

    } else {
      accountOwner.transferTo(anotherAccount ,transferAmountInt);
      bank.displayAllAccounts();
      form.reset();
    }
  });

  console.log(`Total: $` + bank.getTotal());
  checkEmptyState();
  bank.displayAllAccounts();
  