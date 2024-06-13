import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
    const [piece, setPiece] = useState({
        pieceName:"",
        category:"",
        picture:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setPiece(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/clothes", piece);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="form">
            <h1>Add new item</h1>
            <input type="text" placeholder="name" onChange={handleChange} name="pieceName"/>
            <input type="text" placeholder="category" onChange={handleChange} name="category" />
            <input type="text" placeholder="picture" onChange={handleChange} name="picture"/>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Add