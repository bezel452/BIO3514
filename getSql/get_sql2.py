import numpy as np
import pandas as pd
import sys

f = pd.read_csv("disease_gene.csv")

res = []

s = np.array(f)
for i in s:
    tmp = [i[0], i[1]]
    res.append(tmp)


f = open('sql2.txt', 'w')
print("INSERT INTO dis_gen VALUES", file = f)
for i in res:
    print("('%s','%s')," %(i[1], i[0]), file = f)

