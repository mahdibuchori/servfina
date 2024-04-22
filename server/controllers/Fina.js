const fetch = require('node-fetch');
const axios = require('axios');
const http = require('http');
const https = require('https');
const express = require('express');
const url = require('url');

exports.getMaterial = async (req, res) => {
    try {
        const response = await fetch('http://114.199.120.169:212/fina/rest/TMfgMethod/sql_data_to_json/select%20i.ITEMTYPE,%20i.ITEMNO,%20i.ITEMDESCRIPTION,%20i.UNIT1,%20i.UNIT2,%20i.UNIT3,%20i.CATEGORYID,(select%20ic.NAME%20from%20ITEMCATEGORY%20ic%20where%20ic.CATEGORYID%20=%20i.CATEGORYID)kategori%20from%20item%20i%20ORDER%20BY%20I.ITEMDESCRIPTION/1');
        const data = await response.json();
        res.status(200).send(data);
        /* const response = await axios.get('http://114.199.120.169:212/fina/rest/TMfgMethod/sql_data_to_json/select%20i.ITEMTYPE,%20i.ITEMNO,%20i.ITEMDESCRIPTION,%20i.UNIT1,%20i.UNIT2,%20i.UNIT3,%20i.CATEGORYID,(select%20ic.NAME%20from%20ITEMCATEGORY%20ic%20where%20ic.CATEGORYID%20=%20i.CATEGORYID)kategori%20from%20item%20i%20ORDER%20BY%20I.ITEMDESCRIPTION/1');
        // const data = await response;
        console.log(response.data.result)
        res.status(200).send(response.data.result); */
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }  
}

exports.getDepartemen = async (req, res) => {
    try {
        const response = await fetch('http://114.199.120.169:212/fina/rest/TMfgMethod/sql_data_to_json/select%20D.DEPTID,%20D.DEPTNO,%20D.DEPTNAME%20,D.SUBDEPTID%20,(select%20dp.deptno%20from%20DEPARTMENT%20dp%20where%20dp.DEPTID=d.SUBDEPTID)parentname%20from%20DEPARTMENT%20D%20where%20D.SUSPENDED=0/1');
        const data = await response.json();
        res.status(200).send(data.data.result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }  
}

exports.getProvider = async (req, res) => {
    try {
        const response = await fetch(`http://114.199.120.169:212/fina/rest/TMfgMethod/sql_data_to_json/select%20p.ID,%20p.personno,%20p.name,%20C.CURRENCYID,%20c.CURRENCYNAME,%20T.TERMID,%20T.TERMNAME,%20P.TAX1ID,coalesce%20((select%20TA.TAXCODE%20FROM%20TAX%20TA%20WHERE%20TA.TAXID%20=%20P.TAX1ID),'')TAX1CODE,%20coalesce%20((select%20TA.TAXNAME%20FROM%20TAX%20TA%20WHERE%20TA.TAXID%20=%20P.TAX1ID),'')TAX1NAME,CAST(coalesce%20((select%20TA.RATE%20FROM%20TAX%20TA%20WHERE%20TA.TAXID%20=%20P.TAX1ID),'0')AS%20numeric%20(18,2))TAX1RATE,P.TAX2ID,coalesce%20((select%20TA.TAXCODE%20FROM%20TAX%20TA%20WHERE%20TA.TAXID%20=%20P.TAX2ID),'')TAX2CODE,%20coalesce%20((select%20TA.TAXNAME%20FROM%20TAX%20TA%20WHERE%20TA.TAXID%20=%20P.TAX2ID),'')TAX2NAME,CAST(coalesce%20((select%20TA.RATE%20FROM%20TAX%20TA%20WHERE%20TA.TAXID%20=%20P.TAX2ID),'0')AS%20numeric%20(18,2))TAX2RATE%20,%20p.ADDRESSLINE1,%20p.ADDRESSLINE2,%20p.CITY,%20p.STATEPROV,%20p.ZIPCODE,%20p.COUNTRY,%20p.PHONE,%20p.EMAIL%20from%20PERSONDATA%20p%20join%20CURRENCY%20c%20on%20c.CURRENCYID%20=%20p.CURRENCYID%20LEFT%20JOIN%20TERMOPMT%20T%20ON%20T.TERMID%20=%20P.TERMSID%20where%20p.PERSONTYPE=1%20and%20p.SUSPENDED=0%20ORDER%20BY%203/1`);
        const data = await response.json();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }  
}