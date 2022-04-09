test_matrix=[
    [2,2,3,4],   #<------na
    [2,2,4,2],
    [2,4,2,3],
    [4,6,3,2]
]

def check_row(matrix, row):
    counter = 1
    max_count = 1
    first =  matrix[0][row]
    val = first
    for i in range(1,len(matrix)):
        if first != matrix[i][row]:
            if counter > max_count:
                max_count = counter 
                counter = 1
                val = first
            first = matrix[i][row]
        else:
            counter += 1
    if counter > max_count: 
        max_count = counter
    return {'val': val, 'count': max_count}

def check_major_d(matrix):
    counter = 1
    max_count = 1
    first = matrix[0][0]
    val = first
    for i in range(1,len(matrix)):
        if first != matrix[i][i]:
            if counter > max_count:
                max_count = counter 
                counter = 1
                
                val = first
            first = matrix[i][i]
        else:
            counter += 1
    if counter > max_count: 
        max_count = counter
    return {'val': val, 'count': max_count}

def check_minor_d(matrix):
    counter = 1
    max_count = 1
    max_ind = len(matrix) - 1
    first = matrix[0][max_ind]
    val = first
    for i in range(1,max_ind-1):
        if first != matrix[i][max_ind-1]:
            if counter > max_count:
                max_count = counter 
                counter = 1
                
                val = first
            first = matrix[i][max_ind-1]
        else:
            counter += 1
    if counter > max_count: 
        max_count = counter
    return {'val': val, 'count': max_count}

if __name__ == "__main__":
    print(check_major_d(test_matrix))
    print(check_minor_d(test_matrix))
    for i in range(len(test_matrix)):
        print(check_row(test_matrix, i))