import React, { useEffect,useState } from 'react';
import { NavLink } from "react-router-dom"; 
import axios from 'axios';

const Card=()=>{
    const [data,setdata] = useState([]);

    useEffect(()=>{
        async function fetchKantoPokemon(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
            res.data.results.forEach((val) => {
               fetchPokemonData(val.url);
            });
           }

           async function fetchPokemonData(pokemon){
            const res= await axios.get(`${pokemon}`);

                if(res.data.types.length === 1){

                    setdata((val)=>{
                        return([...val,
                         {
                             id:res.data.id,
                             name:res.data.name,
                             path:res.data.sprites.front_default,
                             type1:res.data.types[0].type.name,
                             type2:"hidden",
                          }]) });
                        }
                     else{
                        setdata((val)=>{
                            return([...val,
                             {
                                 id:res.data.id,
                                 name:res.data.name,
                                 path:res.data.sprites.front_default,
                                 type1:res.data.types[0].type.name,
                                 type2:res.data.types[1].type.name,
                              }]) })
                    }
        }

        fetchKantoPokemon();
  },[])

    return(
        <>
        {data.map((val)=>{
            return(
                <div>
                <div className="card" >
                   <img src={val.path}/>
                    <h1>#{val.id}</h1>
                    <NavLink className="info" to={`/info/${val.id}`}><h3>{val.name}</h3></NavLink>
                    <div className="poke_type">
                        <button  className="type_btn" id={val.type1}>{val.type1}</button>
                        <button  className="type_btn" id={val.type2}>{val.type2}</button>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    );
};

export default Card;