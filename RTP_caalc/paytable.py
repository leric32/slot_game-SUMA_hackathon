test_matrix=[
    [2,2,3,4],   #<------na
    [2,2,3,2],
    [2,4,4,3],
    [4,6,3,2]
]

def check_row(matrix, row):
    first =  matrix[0][row]
    for i in range(1,len(matrix)):
        if first != matrix[i][row]:
            return False
    return True

def check_major_d(matrix):
    first = matrix[0][0]
    for i in range(1,len(matrix)):
        if first != matrix[i][i]:
            return False
    return True

def check_minor_d(matrix):
    max_ind = len(matrix) - 1
    first = matrix[0][max_ind]
    
    for i in range(1,max_ind-1):
        if first != matrix[i][max_ind-1]:
            return False
    return True

if __name__ == "__main__":
    print(check_row(test_matrix, 2))