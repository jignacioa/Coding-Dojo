#1 Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

def biggieSize(numbers):
    for i in range(0,len(numbers)):
        if (numbers[i] > 0):
            numbers[i] = "big"
    return numbers
print(biggieSize([-1, 3, 5, -5]))

#Count Positives - Given a list of numbers, create a function to replace the last value with the 
# number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it


def countPositives(list):
    count = 0
    for v in list:
        if v > 0:
            count+=1
        list[len(list)-1] = count
    return list
print(countPositives([-1,1,1,1]))


#Sum Total - Create a function that takes a list and returns the sum of all the values in the array.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7


def sumTotal(list):
    sum = 0
    for v in list:
        sum += v
    return sum
print(sumTotal([1,2,3,4]))

# Average - Create a function that takes a list and returns the average of all the values.
# Example: average([1,2,3,4]) should return 2.5

def getAverage(list):
    sum = 0
    for v in list:
        sum+=v
    return sum / len(list)
print(getAverage([1,2,3,4]))

#Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

def getLength(list):
    return len(list)
print(getLength([[37,2,1,-9]]))

#Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False

def getMinimum(list):
    if len(list) == 0:
        return False

    min = list[0]
    for v in list:
        if v < min:
            min = v
    return min
print(getMinimum([37,-3,1,20]))

#Maximum - Create a function that takes a list and returns the maximum value in the array. 
# If the list is empty, have the function return False.
#Example: maximum([37,2,1,-9]) should return 37
#Example: maximum([]) should return False

def getMaximum(list):
    if len(list) == 0:
        return False
    
    max = list[0]
    for v in list:
        if v > max:
            max = v
    return max
print(getMaximum([2,1, 20,-9]))


#Ultimate Analysis - Create a function that takes a list and returns 
# a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) 
# should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }


def ultimateAnalysis(list):
    sum = 0
    max = list[0]
    min = list[0]
    for v in list:
        sum += v
        if v > max:
            max = v
        if v < min:
            min = v

    return {'sumTotal': sum, 'average': sum / len(list), 'minimum': min, 'maximum': max, 'length': len(list)}
print(ultimateAnalysis([37,2,1,-9]))

#Reverse List - Create a function that takes a list and return that list with values reversed. 
# Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

def reversed(list):
    for i in range(len(list)//2):
        temp = list[i]
        list[i] = list[len(list)-(1+i)]
        list[len(list)-(1+i)] = temp
    return list
print(reversed([37,2,1,-9]))

