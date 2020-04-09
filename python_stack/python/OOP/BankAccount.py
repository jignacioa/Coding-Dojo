class BankAccount: 
    def __init__(self, int_rate = 0.01, balance = 0):
        self.balance = balance
        self.int_rate = int_rate

    def deposit(self, amount):
        self.balance = self.balance + amount
        return self
    def withdraw(self, amount):
        if self.balance - amount < 0:
            print('Insufficient funds: Charging a $5 fee.')
            self.balance = self.balance - (amount +5)
        else: 
            self.balance -= amount
        return self

    def display_account_info(self):
        return('Balance:' + str(self.balance) )

    def yield_interest(self):
        self.balance = self.balance*self.int_rate + self.balance
        return self 

BankAccount1 = BankAccount()
BankAccount1.deposit(100).deposit(100).deposit(100).withdraw(50).yield_interest()
print(BankAccount1.display_account_info())

BankAccount2 = BankAccount(int_rate = 0.05, balance = 100)
BankAccount2.deposit(100).deposit(200).withdraw(50).withdraw(50).withdraw(25).withdraw(25).yield_interest()
print(BankAccount2.display_account_info())

BankAccount3 = BankAccount(int_rate = 0.05, balance = 100)
BankAccount3.deposit(100).withdraw(300)
print(BankAccount3.display_account_info())