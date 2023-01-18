import numpy as np
import pandas as pd
import sys

f = pd.read_csv("metabolite.csv")

res = []

s = np.array(f)
for i in s:
    tmp = [i[0], i[1], i[2], i[3]]
    res.append(tmp)


f = open('sql3_2.txt', 'w')
print("INSERT INTO metabolite(m_id, m_name, kegg_id, n_c) VALUES", file = f)
for i in res:
    t = i[0]
    t1 = i[1]
    t2 = i[2]
    t3 = i[3]
    if t1 != t1:
        if t2 == t2 and t3 == t3:
            print("(\"%s\",NULL, \"%s\", \"%lf\")," %(t,t2,t3), file = f)
        elif t2 != t2 and t3 == t3:
            print("(\"%s\",NULL, NULL, \"%lf\")," %(t,t3), file = f)
        elif t2 != t2 and t3 != t3:
            print("(\"%s\",NULL, NULL, NULL)," %t, file = f)
        elif t2 == t2 and t3 != t3:
            print("(\"%s\",NULL, \"%s\", NULL)," %(t,t2), file = f)
    else:
        if t2 == t2 and t3 == t3:
            print("(\"%s\",\"%s\", \"%s\", \"%lf\")," %(t,t1,t2,t3), file = f)
        elif t2 != t2 and t3 == t3:
            print("(\"%s\",\"%s\", NULL, \"%lf\")," %(t,t1,t3), file = f)
        elif t2 != t2 and t3 != t3:
            print("(\"%s\",\"%s\", NULL, NULL)," %(t,t1), file = f)
        elif t2 == t2 and t3 != t3:
            print("(\"%s\",\"%s\", \"%s\", NULL)," %(t,t1,t2), file = f)
