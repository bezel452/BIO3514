import numpy as np
import pandas as pd
import sys

f = pd.read_csv("add2.csv")

res = []

s = np.array(f)
for i in s:
    tmp = [i[0], i[1]]
    res.append(tmp)


f = open('sql3_1.txt', 'w')
print("INSERT INTO metabolite VALUES", file = f)
for i in res:
    print("('%s',NULL)," %i[0], file = f)
