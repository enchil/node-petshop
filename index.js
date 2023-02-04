//node框架
const express = require("express")
//express的server
const app = express()

//設定資料庫
const db = require(__dirname + "/modules/db_connect.js")

//設定靜態資料夾
app.use(express.static("public"))

//直接設定env環境變數
require("dotenv").config()

//設定路由
app.get("/", (req, res)=>{
    res.send("歡迎來到express")
})

//會員
app.use("/member", require(__dirname + "/routes/member"))

//設定port
const port = process.env.SERVER_PORT

// 監聽app已經連接port
app.listen(port, ()=>{
    console.log("server 已執行")
})