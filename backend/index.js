import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express()

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Marcy&Acadia37",
    database:"test"
})

app.use(express.json())
app.use(cors())


app.get("/", (req, res)=>{
    res.json("hello, this is the backend")
})

app.get("/clothes", (req, res)=>{
    const q = "SELECT * FROM clothes"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/clothes", (req,res)=>{
    const q = "INSERT INTO books (`name`, `category`, `picture`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.category,
        req.body.pic
    ]

    db.query(q, [values], (err, data)=>{
        if (err) return res.json(err)
        return res.json("book has been created successfully")
    })
})

app.listen(8800, ()=>{
    console.log("connected to backend")
})