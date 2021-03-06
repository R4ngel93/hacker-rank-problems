#Code solution from https://sites.northwestern.edu/acids/2018/11/12/solution-hackerrank-array-manipulation/

def arrayManipulation(n, queries):
    arr = [0] * n

    for i in queries:
        arr[i[0] - 1] += i[2]
        if i[1] != len(arr):
            arr[i[1]] -= i[2]

    maxval = 0
    itt = 0
    print(arr)

    for q in arr:
        itt += q
        if itt > maxval:
            maxval = itt

    print(maxval)
    return maxval


arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]])
