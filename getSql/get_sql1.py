import numpy as np
import pandas as pd
import sys

f = pd.read_csv("disease_gene.csv")

res = []

for gene in f["gene"]:
    if gene not in res:
        res.append(gene)

f = open('sql1.txt', 'w')
print("INSERT INTO gene VALUES", file = f)
for gene in res:
    print("('%s')," %gene, file = f)

