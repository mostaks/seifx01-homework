let bank = {
	accounts: [],
	addAccount: function(accountName, initialBalance) {
		if (initialBalance === undefined) {
			initialBalance = 0;
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
		this.accounts.forEach(function(acc) {
			total = total + acc.balance;
		});
		return total;
	},

	displayAllAccounts: function() {
		console.log('Name\t\tBalance');
		this.accounts.forEach(function(a) {
			console.log(`${a.name}\t\t${a.balance}`);
		});
	}
};

let aaron = bank.addAccount('Aaron', 10);
let bob = bank.addAccount('Bob', 10);
let fred = bank.addAccount('Fred', 10);

console.log(bank.getTotal());

bank.displayAllAccounts();

// let name = document.getElementsByTagName('p')[0];
// name.textContent = bob.name;

// let bal = document.getElementsByTagName('p')[1];
// bal.textContent = '$' + bob.balance;

document.getElementById('add-account').addEventListener('click', function() {
	const accountName = document.getElementById('account-name').value;
	if (!accountName && typeof head !== undefined) {
		let head = document.getElementsByTagName('header')[0];

		let errorMessage = document.createElement('h3');
		errorMessage.innerHTML = 'Please insert a name when adding an account';
		head.append(errorMessage);
	} else {
		bank.addAccount(accountName);
		displayAccounts();
	}
});

function displayAccounts() {
	const accountList = document.getElementById('account-list');
	accountList.innerHTML = '';
	for (const account of bank.accounts) {
		const accountElement = document.createElement('li');
		accountElement.innerHTML = `${account.name}: ${account.balance}`;
		accountList.append(accountElement);
	}
}

function depositMoney() {
	document.getElementById('deposit').addEventListener('click', function() {
		let mon = parseInt(document.getElementById('money').value);
		bank.accounts[0].balance += mon;
		displayAccounts();
	});
}

depositMoney();

displayAccounts();
