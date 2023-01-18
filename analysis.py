import pymysql
import pandas as pd
import numpy as np

def flag(d_name: str):
    con = pymysql.connect(host='192.168.56.101', port=3306, user='root', password='bio4348', database='project', charset='utf8')
    cur = con.cursor()
    sql = "SELECT DISTINCT m_id, ab_c FROM meta_dis WHERE d_name='" + d_name + "'"
    cur.execute(sql)
    t1 = cur.fetchall()
    sql = "SELECT DISTINCT m_id, n_c FROM metabolite"
    cur.execute(sql)
    t2 = cur.fetchall()
    res = []
 #   print(t1, t2)
    for i in t1:
        if not i[1]:
            continue
        for j in t2:
            if not j[1]:
                continue
            if j[0] == i[0]:
                tmp = [i[0], i[1] - j[1]]
                res.append(tmp)
                break
    ans = ""
    num = -99999
    for i in res:
        if i[1] > num:
            ans = i[0]
            num = i[1]

  #   print(ans)
    return ans

def diff():
    con = pymysql.connect(host='192.168.56.101', port=3306, user='root', password='bio4348', database='project', charset='utf8')
    cur = con.cursor()
    sql = "SELECT * FROM disease"
    cur.execute(sql)
    t1 = list(cur.fetchall())
    dis = []
    meta = []
    sql = "SELECT DISTINCT m_id, n_c FROM metabolite"
    cur.execute(sql)
    t2 = list(cur.fetchall())
    resmeta_dis = {}
    for i in t1:
        dis.append(i[0])
    for i in t2:
        if not i[1]:
            continue
        tmp = [i[0], i[1]]
        meta.append(tmp)
        resmeta_dis[i[0]] = []
    '''
    resdis_meta = {}
    for d in dis:
        sql = "SELECT m_id, ab_c FROM meta_dis WHERE d_name='" + d + "'"
        cur.execute(sql)
        t3 = cur.fetchall()
        sum = 0
        cnt = 0
        for j in t3:
            if not j[1]:
                continue
            for m in meta:
                if m[0] == j[0]:
                    sum += j[1] - m[1]
                    cnt += 1
                    break
        tmp = []
        if cnt > 0:
            ave = sum / cnt
            for j in t3:
                if not j[1]:
                    continue
                for m in meta:
                    if m[0] == j[0]:
                        if j[1] - m[1] > ave:
                            if m[0] not in tmp:
                                tmp.append(m[0])
                        break
        resdis_meta[d] = tmp
    '''
    for d in dis:
        sql = "SELECT DISTINCT m_id, ab_c FROM meta_dis WHERE d_name='" + d + "'"
        cur.execute(sql)
        t3 = cur.fetchall()
        sum = 0
        cnt = 0
        for j in t3:
            if not j[1]:
                continue
            for m in meta:
                if m[0] == j[0]:
                    sum += j[1] - m[1]
                    cnt += 1
                    break
        tmp = []
        if cnt > 0:
            ave = sum / cnt
            for j in t3:
                if not j[1]:
                    continue
                for m in meta:
                    if m[0] == j[0]:
                        if j[1] - m[1] > ave:
                            if d not in resmeta_dis[m[0]]:
                                resmeta_dis[m[0]].append(d)
                        break
    ans = []
    for key in resmeta_dis:
        if len(resmeta_dis[key]) > 1:
            ans.append(key)
    # print(resmeta_dis)
    return ans

if __name__ == '__main__':
#    flag("lung cancer")
    diff()
