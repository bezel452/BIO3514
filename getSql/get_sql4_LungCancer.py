import numpy as np
import pandas as pd
import sys

f = pd.read_csv("mid-mname-A.C\LungCancer.csv")

res = []

s = np.array(f)
for i in s:
    tmp = [i[0], i[1], i[4]]
    res.append(tmp)

f = open('sql4_LungCancer.txt', 'w')
print("INSERT INTO meta_dis(d_name, m_name, m_id, ab_c) VALUES", file = f)
for i in res:
    t1 = i[0]
    t2 = i[1]
    if t1 != t1:
        t1 = "NULL"
    if t2 != t2:
        t2 = "NULL"
    t = i[2]
    if t != t:
        if t1 == "NULL" and t2 != "NULL": 
            print("(\"lung cancer\",%s,\"%s\", NULL)," %(t1, t2), file = f)
        elif t1 == "NULL" and t2 == "NULL":
            print("(\"lung cancer\",%s,%s, NULL)," %(t1, t2), file = f)
        elif  t1 != "NULL" and t2 == "NULL":
            print("(\"lung cancer\",\"%s\",%s, NULL)," %(t1, t2), file = f)
        else:
            print("(\"lung cancer\",\"%s\",\"%s\", NULL)," %(t1, t2), file = f)
    else:
        if t1 == "NULL" and t2 != "NULL": 
            print("(\"lung cancer\",%s,\"%s\", %lf)," %(t1, t2, t), file = f)
        elif t1 == "NULL" and t2 == "NULL":
            print("(\"lung cancer\",%s,%s, %lf)," %(t1, t2, t), file = f)
        elif  t1 != "NULL" and t2 == "NULL":
            print("(\"lung cancer\",\"%s\",%s, %lf)," %(t1, t2, t), file = f)
        else:
            print("(\"lung cancer\",\"%s\",\"%s\", %lf)," %(t1, t2, t), file = f)

