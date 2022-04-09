import 

tracks = [
    [1, 2, 3, 4, 5, 2, 4, 7, 4, 2, 5, 4, 2, 2, 4, 6, 7, 5, 6, 4, 3, 1, 2],
    [2, 3, 1, 1, 4, 6, 5, 3, 1, 2, 3, 3, 7, 6, 2, 1, 7, 4, 5, 5, 7, 1, 2],
    [2, 3, 4, 4, 5, 1, 2, 6, 7, 6, 2, 1, 3, 2, 2, 3, 3, 1, 6, 7, 2, 2, 1],
    [3, 4, 5, 2, 1, 2, 4, 1, 1, 6, 4, 5, 2, 7, 3, 4, 7, 6, 5, 2, 4, 4, 3]
];

def generateMatrices(tracks):
    matrices = [];
    for line0 in range(len(tracks[0]) - 3):
        for line1 in range(len(tracks[1]) - 3):
            for line2 in range(len(tracks[2]) - 3):
                for line3 in range(len(tracks[3]) - 3):
                    matrix = [];
                    matrix.append(tracks[0][line0 : line0 + 4]);
                    matrix.append(tracks[1][line1: line1 + 4]);
                    matrix.append(tracks[2][line2: line2 + 4]);
                    matrix.append(tracks[3][line3: line3 + 4]);
                    matrices.append(matrix);
    return matrices;

def check_row(matrix, row):
    first =  matrix[0][row]
    for i in range(1,len(matrix)):
        if first != matrix[i][row]:
            return False
    return True

matrices = generateMatrices(tracks);
cnt = 0;
for matrix in matrices:
    if(check_row(matrix, 0) or check_row(matrix, 1) or check_row(matrix, 2) or check_row(matrix, 3)):
        cnt += 1;

print("{} / {}".format(cnt, len(matrices)))