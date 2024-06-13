import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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

    return (
        <div>
            <h1>Wardrobe</h1>
            <div className="clothesArray">
                {clothes.map(piece=>(
                    <div className="clothingPiece" key={piece.id}>
                        {piece.picture && <img src={piece.picture} alt={piece.name} />}
                        <h2>{piece.name}</h2>
                        <p>{piece.category}</p>
                    </div>
                ))}
            </div>
            <button>Add new item</button>
        </div>
    )
}

export default Clothes