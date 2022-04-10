from paytable import *

classic_reels = [
    [0, 0, 3, 4, 5, 2, 4, 1, 5, 5, 3, 1, 2, 5, 8, 3, 4, 5, 2, 2, 9, 4, 5, 3, 4],
    [0, 0, 5, 10, 2, 3, 5, 1, 1, 4, 3, 5, 2, 3, 4, 3, 5, 2, 8, 1, 4, 5, 3, 4, 3],
    [0, 0, 4, 3, 4, 5, 5, 3, 1, 5, 2, 5, 1, 5, 8, 4, 5, 10, 4, 2, 5, 4, 5, 4, 4],
    [0, 0, 4, 4, 5, 4, 5, 2, 1, 5, 2, 5, 9, 3, 4, 8, 5, 4, 2, 3, 5, 4, 5, 2, 3]
];

bonus_reels = [
    [0, 0, 1, 4, 1, 2, 4, 1, 9, 5, 3, 1],
    [0, 0, 5, 10, 2, 3, 5, 1, 1, 10, 3, 4],
    [0, 0, 4, 3, 4, 5, 1, 3, 1, 5, 2, 10],
    [0, 0, 1, 2, 9, 4, 5, 2, 1, 3, 2, 9]]

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


matrices = generateMatrices(classic_reels);

final_sum_score = 0;

dict_paytable = {
    0 : 50000,
    1 : 10000,
    2 : 2500,
    3 : 1000,
    4 : 500,
    5 : 300
}

number = len(matrices);

for index, matrix in enumerate(matrices):
    score = 0;

    #Check for rows
    for i in range(4):
        if(check_4row(matrix, i) != None):
            score += dict_paytable[check_4row(matrix, i)];

    #Check for diagonals
    if(check_major_4d(matrix) != None):
        score += dict_paytable[check_major_4d(matrix)];

    if (check_minor_4d(matrix) != None):
        score += dict_paytable[check_minor_4d(matrix)];

    #Check for zig zag and trapeze
    for i in range(3):
        if(check_zig_zag_typeA(matrix, i) != None):
            score += dict_paytable[check_zig_zag_typeA(matrix, i)];
        if (check_zig_zag_typeB(matrix, i + 1) != None):
            score += dict_paytable[check_zig_zag_typeB(matrix, i + 1)];
        if(check_trapeze_typeA(matrix, i + 1) != None):
            score += dict_paytable[check_trapeze_typeA(matrix, i + 1)];
        if (check_trapeze_typeB(matrix, i) != None):
            score += dict_paytable[check_trapeze_typeB(matrix, i)];

    #Check for a jocker
    if(check_joker(matrix) == 3):
        score += 1000;
    elif(check_joker(matrix) == 4):
        score += 4610;

    #Jackpot
    if(check_jackpot(matrix)): score += dict_paytable[0];

    #x2 and x5
    if(check_x2(matrix)): score *= 2;
    if(check_x5(matrix)): score *= 5;

    final_sum_score += score;


print("RTF - {}".format(final_sum_score / (100 * number)))
