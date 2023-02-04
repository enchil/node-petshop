const express = require("express")
const router = express.Router();
const db = require(__dirname+ "/../modules/db_connect.js")

router.post("login/api", async(req, res)=>{
 const output = {
    success : false,
    member_sid: '',
 }
 const sql = "SELECT * FROM `members` WHERE `email` = ?"
 const { email, password} = req.body
 console.log(email);
const [result] = await db.query(sql, email.toLowerCase())

console.log(result);
})


module.exports = router;