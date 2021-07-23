import React, {useState,useEffect } from "react";
import Card from "./Card";
import Scard from "./Scard";
import { NavLink } from "react-router-dom"; 
import axios from 'axios';


const Cards=(props)=>{

    const [data,setdata] = useState([]);
    let temp = [];
    useEffect(()=>{
        async function fetchKantoPokemon(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
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
                        }else{
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
  },[]);


    return(
        <>
             <main className="main3">
            <div className="bot_head2" onClick={()=>{props.onSelect();}}>
                <p >show advanced search   <i className="far fa-arrow-circle-down"></i> </p>
            </div>

            <div className="main_btn">
                <button className="surp_btn"><i className="far fa-sync"></i> Surprize Me!</button>

            
                <select>
                    <option>Sort Result by...</option>
                    <option>Lowest Number (first)</option>
                    <option>Highest Number (first)</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
            </div>

            <div className="cards">
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
            </div>
        </main>
        </>
    );
};

export default Cards;
