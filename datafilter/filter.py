# 从原始数据库代谢物xml文件中提取数据脚本框架
import warnings
warnings.filterwarnings("ignore")  #重要 不然21万多条数据所生成的warning会直接把jupyter脚本文件挤爆
import pandas as pd
from lxml import etree
from xml.etree import ElementTree as ET
import time

# 动态写入存储
Data = {}
DataFrame = pd.DataFrame(Data,columns=["Mid","Mname","Kegg_ID"])
DataFrame.to_csv("D:/data/hmdb_metabolites/data_keggID.csv", index=False, sep=',') 

with open('D:/data/hmdb_metabolites/hmdb_metabolites.xml','r',encoding='utf-8',errors='ignore') as f:
# with open('D:/data/hmdb_metabolites/meta1.xml','r',encoding='utf-8',errors='ignore') as f:

#     for i in range(6):
    while True:
        byt=f.readline()
#         print(byt)
        
        if(byt=='<metabolite>\n'):
#             print(byt)
#             with open("D:/data/hmdb_metabolites/test.txt","w") as f2:
            with open('D:/data/hmdb_metabolites/test.xml','w',encoding='utf-8',errors='ignore') as f2:
                f2.write('<?xml version="1.0" encoding="UTF-8"?>\n<hmdb xmlns="http://www.hmdb.ca">\n<metabolite>\n')
                while(byt!='</metabolite>\n'):
                    byt=f.readline()
                    f2.write(byt)
                    if(byt=='</hmdb>\n'):
                        break
                f2.write('</hmdb>')
            with open('D:/data/hmdb_metabolites/test.xml','rb+') as xml:
                per=ET.parse(xml)
                root = per.getroot()

                for child1 in root:
                    dp={}
                    for i in range(len(child1.getchildren())):
                        child=child1.getchildren()[i]
            #             print(child.tag)
                        if(child.tag == '{http://www.hmdb.ca}accession'):
            #                 print(i)
                            dp['mid']=child.text
            #                 print(child.text)
                            mid=child.text
                        if(child.tag == '{http://www.hmdb.ca}name'):
            #                 print(i)
                            dp['mname']=child.text
            #                 print(child.text)
                            mid=child.text
                        if(child.tag == '{http://www.hmdb.ca}kegg_id'):
            #                 print(child.text)
                            kegg=child.text
                            dp['kegg_id']=kegg
#                     print(dp)
                    df=pd.DataFrame([dp])
#                     print(df)
                    df.to_csv('D:/data/hmdb_metabolites/data_keggID.csv', mode='a', index=False,header=False)
        if(byt=='</hmdb>\n'):
            break
        if(byt=='</hmdb>'):
            break
