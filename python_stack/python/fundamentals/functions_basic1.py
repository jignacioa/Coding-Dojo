#1, predicted 5, same as actual

def a():
    return 5
print(a())

#2, predicted 10, same as actual
def a():
    return 5
print(a()+a())

#3, predicted 5 & 10, only prints 5 because the function returns 5 and doesn't execute anymore. 
def a():
    return 5
    return 10
print(a())

#4 predicted 5. Same as actual
def a():
    return 5
    print(10)
print(a())

#5 predicted 5 and None. Same as actual
def a():
    print(5)
x = a()
print(x)

#6 predicted 3,5 and 8. There's no return statement so it's only 3,5.
def a(b,c):
    print(b+c)
#print(a(1,2) + a(2,3))

#7 predicted 25, same as actual
def a(b,c):
    return str(b)+str(c)
    print(a(2,5))

#8 predicted 100, 10, 7. The function returns after 10 so it only prints 100, 10 but not 7.
def a():
    b=100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())

#9 predicted 7,14, 21. Same as actual
def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))

#10 predicted 8. Same as actual
def a(b,c):
    return b+c
    return 10
print(a(3,5))

#11 predicted 500,500, 300, 500. Same as actual.
b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)


#12 predicted 500, 500, 300, 300 500. We don't see the second 300 because even though we return we're not printing(a())
# or saving it as a variable so we don't see the return value.
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)

#13 predicted 500, 500, 300, 300. Same as actual.
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)

#14 predicted 1, 3, 2. Same as actual.
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()

#15 predicted 1, 3, 5 and 10. Same as actal.
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)





