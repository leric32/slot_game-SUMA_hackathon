from paytable import *
from paytable2 import *

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


matrices = generateMatrices(tracks);
cntZigZagA = 0;
cntZigZagB = 0;
cntTrapezeA = 0
cntTrapezeB = 0;
cnt4Row = 0;
for matrix in matrices:
    if(check_zig_zag_typeA(matrix, 0) != None): cntZigZagA += 1;
    if(check_zig_zag_typeA(matrix, 1) != None): cntZigZagA += 1;
    if(check_zig_zag_typeA(matrix, 2) != None): cntZigZagA += 1;

    if (check_zig_zag_typeB(matrix, 1) != None): cntZigZagB += 1;
    if (check_zig_zag_typeB(matrix, 2) != None): cntZigZagB += 1;
    if (check_zig_zag_typeB(matrix, 3) != None): cntZigZagB += 1;

    if (check_trapeze_typeA(matrix, 1) != None): cntTrapezeA += 1;
    if (check_trapeze_typeA(matrix, 2) != None): cntTrapezeA += 1;
    if (check_trapeze_typeA(matrix, 3) != None): cntTrapezeA += 1;

    if (check_trapeze_typeB(matrix, 0) != None): cntTrapezeB += 1;
    if (check_trapeze_typeB(matrix, 1) != None): cntTrapezeB += 1;
    if (check_trapeze_typeB(matrix, 2) != None): cntTrapezeB += 1;

print("ZigZagA - {}".format(cntZigZagA));
print("ZigZagB - {}".format(cntZigZagB));
print("TrapezeA - {}".format(cntTrapezeA));
print("TrapezeB - {}".format(cntTrapezeB));
print("All cases - {}".format(len(matrices)));