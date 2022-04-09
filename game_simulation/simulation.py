from check_state import *
import random

reels=[]

def get_slice_of_4(reel):
    index = random.randint(0, len(reel))
    l = []
    for i in range(index, index + 4):
        l.append(reel[i % len(reel)])
    return l

def get_state_value(state_matrix):
    return 0

def start_simulation(credit):
    iteration = 0
    iterations = []
    credits = []
    iterations.append(iteration)
    credits.append(credit)
    while(credit>100 and iteration < 10000):
        credit -= 100
        iteration += 1
        matrix = [get_slice_of_4(reels[i]) for i in range(4)]
        credit += get_state_value(matrix)
    iterations.append(iteration)
    credits.append(credit)
