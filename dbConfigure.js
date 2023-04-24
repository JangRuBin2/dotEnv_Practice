import mysql from "mysql2"
import dotenv from "dotenv"
// .env 연결
dotenv.config({path:'./.env'});

// DB 연결과 동시에 필요한 데이터 변수로 사용 
const dbConfigure = mysql.createConnection({
host : process.env.mysqlAdmin_host,
port : process.env.mysqlAdmin_port,
user : process.env.mysqlAdmin_user,
password : process.env.mysqlAdmin_pw,
database : process.env.mysqlAdmin_DB
})
// console.log(mysqlAdmin_host)
dbConfigure.connect(console.log("연결 됨"))