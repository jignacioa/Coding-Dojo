class User:
    def __init__(self, name):
        self.name = name
        self.account = BankAccount(int_rate= 0.01, balance=0)

    #function to make deposit    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    
    #make a withdrawal
    def make_withdraw(self, amount):
        self.account.withdraw(amount)
        return self
      

    def print_balance(self):
        print(self.account.display_account_info())
        return self

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
        return('Balance: ' + str(self.balance) )

    def yield_interest(self):
        self.balance = self.balance*self.int_rate + self.balance
        return self 


sam = User('Sam Black')
sam.make_deposit(100).make_withdraw(25).print_balance()

jesus = User('Jesus')
jesus.make_deposit(200).make_withdraw(50).make_withdraw(50).print_balance()

marty = User('Marty')
marty.make_deposit(300).make_withdraw(320).print_balance()


