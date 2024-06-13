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
    const q = "INSERT INTO clothes (`name`, `category`, `picture`) VALUES (?)"
    const values = [
        req.body.pieceName,
        req.body.category,
        req.body.picture
    ];

    db.query(q, [values], (err, data)=>{
        if (err) return res.json(err)
        return res.json("item has been created successfully")
    });
});

app.delete("/clothes/:id", (req,res)=>{
    const pieceId = req.params.id;
    const q = "DELETE FROM clothes WHERE id = ?";

    db.query(q, [pieceId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Item has been deleted successfully.");
    });
});

app.put("/clothes/:id", (req,res)=>{
    const pieceId = req.params.id;
    const q = "UPDATE clothes SET `name` = ?, `category` = ?, `picture` = ? WHERE id = ?";

    const values = [
        req.body.pieceName,
        req.body.category,
        req.body.picture
    ]

    db.query(q, [...values,pieceId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Item has been updated successfully.");
    });
});

app.listen(8800, ()=>{
    console.log("connected to backend")
})