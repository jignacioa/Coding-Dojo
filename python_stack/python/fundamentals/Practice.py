arr = [10,8,1,7,9,5,3,2]
def bubblesort(arr):
    for j in range(len(arr)-1):
        for i in range(len(arr)-1-j):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
    return arr       
print(bubblesort(arr))