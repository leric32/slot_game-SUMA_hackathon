test_matrix=[
    [8,0,3,4],   #<------na
    [0,0,4,3],
    [0,4,2,3],
    [4,4,8,3]
]

test = [[5, 5, 3, 1],
        [5, 1, 1, 4],
        [3, 1, 5, 2],
        [5, 4, 5, 2]];

def check_4row(matrix, row):
    first =  matrix[0][row]
    for i in range(1,len(matrix)):
        if first != matrix[i][row]:
            return None
    if(first < 1 or first > 5): return None;
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
    if (first < 1 or first > 5): return None;
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
    for i in range(1,max_ind + 1):
        if first != matrix[i][max_ind-i]:
            return None
    if (first < 1 or first > 5): return None;
    return first

def check_minor_3d(matrix):
    max_ind = len(matrix) - 1
    if matrix[1][max_ind - 1] == matrix[2][max_ind - 2]:
        if matrix[0][max_ind - 0] == matrix[1][max_ind - 1]:
            return matrix[0][max_ind - 0]
        elif matrix[2][max_ind - 2] == matrix[3][max_ind - 3]:
            return matrix[3][max_ind - 3]
    return None

def check_jackpot(matrix):
    count = 0
    for i in range(len(matrix)):
        flag = False
        for j in range(len(matrix)):
            if matrix[j][i] != 0:
                flag = True
                break
        if not flag:
            count+=1
    if count == 2:
        return True
    return False

    
def check_x2(matrix):
    count = 0
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[j][i] == 9:
                count += 1
    return count == 2

def check_x5(matrix):
    count = 0
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[j][i] == 10:
                count += 1
    return count == 2
    
def check_joker(matrix):
    count = 0
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if matrix[j][i] == 8:
                count += 1
    return count

def check_zig_zag_typeA(matrix, row):
    value = matrix[0][row]
    for i in range(1,4):
        if(i == 2):
            if(matrix[i][row] != value): return None
        else:
            if(matrix[i][row + 1] != value): return None
    if (value < 1 or value > 5): return None;
    return value

def check_zig_zag_typeB(matrix, row):
    value = matrix[0][row]
    for i in range(1,4):
        if(i == 2):
            if(matrix[i][row] != value): return None
        else:
            if(matrix[i][row - 1] != value): return None

    if (value < 1 or value > 5): return None;
    return value

def check_trapeze_typeA(matrix, row):
    value = matrix[0][row]
    for i in range(1, 4):
        if (i == 3):
            if (matrix[i][row] != value): return None
        else:
            if (matrix[i][row - 1] != value): return None

    if (value < 1 or value > 5): return None;
    return value

def check_trapeze_typeB(matrix, row):
    value = matrix[0][row]
    for i in range(1, 4):
        if (i == 3):
            if (matrix[i][row] != value): return None
        else:
            if (matrix[i][row + 1] != value): return None

    if (value < 1 or value > 5): return None;
    return value


if __name__ == "__main__":
    print(check_minor_4d(test))