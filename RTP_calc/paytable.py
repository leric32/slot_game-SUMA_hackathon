test_matrix=[
    [3,2,3,4],   #<------na
    [2,2,4,2],
    [2,4,2,3],
    [2,6,3,2]
]

def check_4row(matrix, row):
    first =  matrix[0][row]
    for i in range(1,len(matrix)):
        if first != matrix[i][row]:
            return None
    return first

def check_3row(matrix, row):
    if matrix[1][row] == matrix[2][row]:
        if matrix[0][row] == matrix[1][row]:
            return matrix[0][row]
        elif matrix[2][row] == matrix[3][row]:
            return matrix[3][row]
    return None

def check_major_4d(matrix):
    first = matrix[0][0]
    for i in range(1,len(matrix)):
        if first != matrix[i][i]:
            return None
    return first

def check_major_3d(matrix):
    if matrix[1][1] == matrix[2][2]:
        if matrix[0][0] == matrix[1][1]:
            return matrix[0][0]
        elif matrix[2][2] == matrix[3][3]:
            return matrix[3][3]
    return None


def check_minor_4d(matrix):
    max_ind = len(matrix) - 1
    first = matrix[0][max_ind]
    for i in range(1,max_ind):
        if first != matrix[i][max_ind-1]:
            return None
    return first

def check_minor_3d(matrix):
    max_ind = len(matrix) - 1
    if matrix[1][max_ind - 1] == matrix[2][max_ind - 2]:
        if matrix[0][max_ind - 0] == matrix[1][max_ind - 1]:
            return matrix[0][max_ind - 0]
        elif matrix[2][max_ind - 2] == matrix[3][max_ind - 3]:
            return matrix[3][max_ind - 3]
    return None

if __name__ == "__main__":
    print(check_major_3d(test_matrix))
    print(check_major_4d(test_matrix))
    print(check_minor_3d(test_matrix))
    print(check_minor_4d(test_matrix))
    print("4row")
    for i in range(len(test_matrix)):
        print(check_4row(test_matrix, i))
    print("3row")
    for i in range(len(test_matrix)):
        print(check_3row(test_matrix, i))