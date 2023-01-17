import numpy as np
import pandas as pd
import sys

f = pd.read_csv("mid-NC1.csv")

res = []

s = np.array(f)
for i in s:
    tmp = [i[0], i[2]]
    res.append(tmp)


f = open('sql3.txt', 'w')
print("INSERT INTO metabolite VALUES", file = f)
for i in res:
    print("('%s',%lf)," %(i[0], i[1]), file = f)
