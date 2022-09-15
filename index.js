//모듈 불러오기
const express = require("express");
const { Client }  = require("pg");
const Query = require('pg').Query

//express 사용
const server = express();

server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

server.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

server.listen(24969, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port number24***");
});

//연결을 위한 client 객체 생성
var client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : '135135',
    port : 5432,
});

// 연결확인
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('success!')
  }
});
