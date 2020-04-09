class User:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    #function to make deposit    
    def make_deposit(self, deposit):
        self.balance = self.balance + deposit
        return self

    #make a withdrawal
    def make_withdrawal(self, withdrawal):
        self.balance = self.balance - withdrawal
        return self
      

    def print_balance(self):
        return (self.name, self.balance)




sam = User('Sam Black', 0)
jesus = User('Jesus A', 0)      
marty = User('Marty C', 100000)  

sam.make_deposit(100000).make_deposit(100000).make_deposit(100000).make_withdrawal(200000)
print(sam.print_balance())

jesus.make_deposit(100000).make_deposit(100000).make_withdrawal(50000).make_withdrawal(50000)
print(jesus.print_balance())

marty.make_deposit(100000).make_withdrawal(50000).make_withdrawal(50000).make_withdrawal(50000)
print(marty.print_balance())



