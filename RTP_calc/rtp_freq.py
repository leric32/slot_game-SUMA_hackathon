from paytable import *

tracks = [
    [0, 0, 3, 4, 5, 2, 4, 1, 5, 5, 3, 1, 2, 5, 8, 3, 4, 5, 2, 2, 9, 4, 5, 3, 4],
    [0, 0, 5, 4, 2, 3, 5, 1, 1, 4, 3, 5, 2, 3, 4, 3, 5, 2, 8, 1, 4, 5, 3, 4, 3],
    [0, 0, 4, 3, 4, 5, 5, 3, 1, 5, 2, 5, 1, 5, 8, 4, 5, 10, 4, 2, 5, 4, 5, 4, 4],
    [0, 0, 4, 4, 5, 4, 5, 2, 1, 5, 2, 5, 3, 3, 4, 8, 5, 4, 2, 3, 5, 4, 5, 2, 3]
];

def generateMatrices(tracks):
    matrices = [];
    for line0 in range(len(tracks[0])):
        for line1 in range(len(tracks[1])):
            for line2 in range(len(tracks[2])):
                for line3 in range(len(tracks[3])):
                    matrix = [];
                    if(line0 > len(tracks[0]) - 4):
                        matrix.append(tracks[0][line0:] + tracks[0][: 4 - len(tracks[0]) + line0]);
                    else:
                        matrix.append(tracks[0][line0 : line0 + 4]);

                    if (line1 > len(tracks[1]) - 4):
                        matrix.append(tracks[1][line1:] + tracks[1][: 4 - len(tracks[1]) + line1]);
                    else:
                        matrix.append(tracks[1][line1: line1 + 4]);

                    if (line2 > len(tracks[2]) - 4):
                        matrix.append(tracks[2][line2:] + tracks[2][: 4 - len(tracks[2]) + line2]);
                    else:
                        matrix.append(tracks[2][line2: line2 + 4]);

                    if (line3 > len(tracks[3]) - 4):
                        matrix.append(tracks[3][line3:] + tracks[3][: 4 - len(tracks[3]) + line3]);
                    else:
                        matrix.append(tracks[3][line3: line3 + 4]);

                    matrices.append(matrix);
    return matrices;


matrices = generateMatrices(tracks);

dictRow4 = [0] * 10;
dictRow3 = [0] * 10;
dictDiag4 = [0] * 10;
dictDiag3 = [0] * 10;
dictZigZag = [0] * 10;
dictTrapeze = [0] * 10;
cntJocker3 = 0;
cntJocker4 = 0;
cntJackpot = 0;

for matrix in matrices:
    for i in range(4):
        if(check_4row(matrix, i) != None):
            dictRow4[check_4row(matrix, i)] += 1;
        # elif(check_3row(matrix, i) != None):
        #      dictRow3[check_3row(matrix, i)] += 1;

    if(check_major_4d(matrix) != None):
        dictDiag4[check_major_4d(matrix)] += 1;
    # elif(check_major_3d(matrix) != None):
    #       dictDiag3[check_major_3d(matrix)] += 1;

    if (check_minor_4d(matrix) != None):
        dictDiag4[check_minor_4d(matrix)] += 1;
    # elif (check_minor_3d(matrix) != None):
    #      dictDiag3[check_minor_3d(matrix)] += 1;

    for i in range(3):
        if(check_zig_zag_typeA(matrix, i) != None):
            dictZigZag[check_zig_zag_typeA(matrix, i)] += 1;
        if (check_zig_zag_typeB(matrix, i + 1) != None):
            dictZigZag[check_zig_zag_typeB(matrix, i + 1)] += 1;
        if(check_trapeze_typeA(matrix, i + 1) != None):
            dictTrapeze[check_trapeze_typeA(matrix, i + 1)] += 1;
        if (check_trapeze_typeB(matrix, i) != None):
            dictTrapeze[check_trapeze_typeB(matrix, i)] += 1;

    if(check_joker(matrix) == 3): cntJocker3 += 1;
    elif(check_joker(matrix) == 4): cntJocker4 += 1;

    if(check_jackpot(matrix)): cntJackpot += 1;

number = len(matrices);

dictRow4[0] = 0;
dictTrapeze[0] = 0;
dictZigZag[0] = 0;
dictDiag4[0] = 0;

print("Row4 - {}".format(dictRow4));
print("Row3 - {}".format(dictRow3));
print("Diag4 - {}".format(dictDiag4));
print("Diag3 - {}".format(dictDiag3));
print("ZigZag - {}".format(dictZigZag));
print("Trapeze - {}".format(dictTrapeze));
print("Jocker3 - {}".format(cntJocker3 / number));
print("Jocker4 - {}".format(cntJocker4 / number));
print("Jackpot - {}".format(cntJackpot / number));

sum_all = [0] * 10;

for i in range(10):
    sum_all[i] = (dictTrapeze[i] + dictDiag4[i] + dictZigZag[i] + dictRow4[i]) / number;

print("Sum all - {}".format(sum_all));

print((sum(dictTrapeze) + sum(dictZigZag) + sum(dictDiag3)
      + sum(dictDiag4) + sum(dictRow3) + sum(dictRow4)) / len(matrices))

# print("ZigZagA - {}".format(cntZigZagA));
# print("ZigZagB - {}".format(cntZigZagB));
# print("TrapezeA - {}".format(cntTrapezeA));
# print("TrapezeB - {}".format(cntTrapezeB));
# print("Row4 - {}".format(cnt4Row));
# print("Row3 - {}".format(cnt3Row));
# print("All cases - {}".format(len(matrices)));