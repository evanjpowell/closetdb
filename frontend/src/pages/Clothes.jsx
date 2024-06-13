import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Clothes = () => {

    const [clothes, setClothes] = useState([])

    useEffect(()=>{
        const fetchAllClothes = async () =>{
            try{
                const res =  await axios.get("http://localhost:8800/clothes");
                setClothes(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllClothes();
    }, []);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/clothes/"+id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Wardrobe</h1>
            <div className="clothesArray">
                {clothes.map(piece=>(
                    <div className="clothingPiece" key={piece.id}>
                        {piece.picture && <img src={piece.picture} alt={piece.name} />}
                        <h2>{piece.name}</h2>
                        <p>{piece.category}</p>
                        <button className="delete" onClick={()=>handleDelete(piece.id)}>Delete</button>
                        <button className="update">Edit</button>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Add new item</Link></button>
        </div>
    )
}

export default Clothes