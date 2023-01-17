import numpy as np
import pandas as pd
import sys

f = pd.read_csv("reaction2.csv")

res = []

s = np.array(f)

for i in s:
    if i[1] != i[1]:
        tmp = [i[0], "NULL"]
    else:
        tmp = [i[0], i[1]]
    res.append(tmp)

f = open('sql5_1.txt', 'w')
print("INSERT INTO reaction VALUES", file = f)
for i in res:
    if i[1] != "NULL":
        print("(\"%s\",\"%s\")," %(i[0], i[1]), file = f)
    else:
        print("(\"%s\",NULL)," %i[0], file = f)