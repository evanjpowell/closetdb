import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
    const [piece, setPiece] = useState({
        pieceName:"",
        category:"",
        picture:"",
    });

    const navigate = useNavigate();
    const location = useLocation();
    const thisId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setPiece(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/clothes/"+thisId, piece);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="form">
            <h1>Modify item</h1>
            <input type="text" placeholder="name" onChange={handleChange} name="pieceName"/>
            <input type="text" placeholder="category" onChange={handleChange} name="category" />
            <input type="text" placeholder="picture" onChange={handleChange} name="picture"/>
            <button onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default Update