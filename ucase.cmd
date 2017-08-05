@ECHO OFF
IF "%1"=="" (ECHO Syntax: ucase sometext) ELSE (
ECHO {"inputText":"%1"}>params.txt
TYPE params.txt
curl -H "Content-Type: application/json" -X POST --data @params.txt https://cloudmaticafunctions.azurewebsites.net/api/ucase?code=Uayoo/sEE9Mjdc2Qy8WXcIhBIvPrgcwLa6BSGBD/HapHIWDQp6lbhQ==
)