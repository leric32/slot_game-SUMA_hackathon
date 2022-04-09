test_matrix=[
    [2,4,2,4],   #<------na
    [4,2,3,2],
    [2,2,3,3],
    [2,2,2,3]
]

def check_zig_zag_typeA(matrix, row):
    value = matrix[0][row];
    for i in range(1,4):
        if(i == 2):
            if(matrix[i][row] != value): return None;
        else:
            if(matrix[i][row + 1] != value): return None;

    return value;

def check_zig_zag_typeB(matrix, row):
    value = matrix[0][row];
    for i in range(1,4):
        if(i == 2):
            if(matrix[i][row] != value): return None;
        else:
            if(matrix[i][row - 1] != value): return None;

    return value;

def check_trapeze_typeA(matrix, row):
    value = matrix[0][row];
    for i in range(1, 4):
        if (i == 3):
            if (matrix[i][row] != value): return None;
        else:
            if (matrix[i][row - 1] != value): return None;

    return value;

def check_trapeze_typeB(matrix, row):
    value = matrix[0][row];
    for i in range(1, 4):
        if (i == 3):
            if (matrix[i][row] != value): return None;
        else:
            if (matrix[i][row + 1] != value): return None;

    return value;
