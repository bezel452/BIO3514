import pymysql
import pandas as pd
import numpy as np


def disease(d_name: str):
    con = pymysql.connect(host='192.168.56.101', port=3306, user='root', password='bio4348', database='project', charset='utf8')
    cur = con.cursor()
    sql = "SELECT g_name FROM dis_gen WHERE d_name='" + d_name + "'"
    cur.execute(sql)
    t1 = list(cur.fetchall())
    sql = "SELECT m_id FROM meta_dis WHERE d_name='" + d_name + "'"
    cur.execute(sql)
    t2 = list(cur.fetchall())
    t3 = []
    
    for m in t2:
        sql = "SELECT rea FROM reaction WHERE m_id='" + m[0] + "'"
        cur.execute(sql)
        t3.append(list(cur.fetchall()))

    res1 = []
    res2 = []
    res3 = []
    for i in t1:
        if not i:
            continue
        res1.append(i[0])
    for i in t2:
        if not i:
            continue
        res2.append(i[0])
    for i in t3:
        if not i:
            continue
        res3.append(i[0][0])
#    print(res1, res2, res3)
    return res1, res2, res3

def gene(g_name: str):
    con = pymysql.connect(host='192.168.56.101', port=3306, user='root', password='bio4348', database='project', charset='utf8')
    cur = con.cursor()
    sql = "SELECT d_name FROM dis_gen WHERE g_name='" + g_name + "'"
    cur.execute(sql)
    t1 = list(cur.fetchall())
    res1 = []
    t2 = []
    for i in t1:
        if not i:
            continue
        res1.append(i[0])
    for d in res1:
        sql = "SELECT m_id FROM meta_dis WHERE d_name='" + d + "'"
        cur.execute(sql)
        t2.append(list(cur.fetchall()))
    res2 = []
    for i in t2:
        if not i:
            continue
        for j in i:
            if not j:
                continue
            res2.append(j[0])
    t3 = []
    for m in res2:
        sql = "SELECT rea FROM reaction WHERE m_id='" + m + "'"
        cur.execute(sql)
        t3.append(list(cur.fetchall()))
    res3 = []
    for i in t3:
        if not i:
            continue
        for j in i:
            if not j:
                continue
            res3.append(j[0])
#    print(res1, res2, res3)
    return res1, res2, res3

def metabolite(m_id: str):
    con = pymysql.connect(host='192.168.56.101', port=3306, user='root', password='bio4348', database='project', charset='utf8')
    cur = con.cursor()
    sql = "SELECT d_name FROM meta_dis WHERE m_id='" + m_id + "'"
    cur.execute(sql)
    t1 = list(cur.fetchall())
    res1 = []
    t2 = []
    for i in t1:
        res1.append(i[0])
    for d in res1:
        sql = "SELECT g_name FROM dis_gen WHERE d_name='" + d + "'"
        cur.execute(sql)
        t2.append(list(cur.fetchall()))
    res2 = []
    for i in t2:
        if not i:
            continue
        for j in i:
            if not j:
                continue
            res2.append(j[0])
    t3 = []
    sql = "SELECT rea FROM reaction WHERE m_id='" + m_id + "'"
    cur.execute(sql)
    t3.append(list(cur.fetchall()))
    res3 = []
    for i in t3:
        if not i:
            continue
        res3.append(i[0])
    sql = "SELECT kegg_id FROM metabolite WHERE m_id='" + m_id + "'"
    cur.execute(sql)
    t4 = list(cur.fetchall())
    res4 = []
    res4.append(t4[0][0])
#    print(res1, res2, res3, res4)
    return res1, res2, res3, res4
    
if __name__ == '__main__':
    # disease("lung cancer")
    # gene("FASLG")
    metabolite("HMDB0000875")