import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA=()=>{

    const [num,setnum] = useState();
    const [name,setname] = useState();
    const [type,settype] = useState(["",""]);
    const [path,setpath] = useState();

    useEffect(()=>{
       async function getdata(){
           const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           setname(res.data.name);
           setpath(res.data.sprites.front_default);
           if(res.data.types.length === 1){
           settype([res.data.types[0].type.name,""]);
           }
           else{
            settype([res.data.types[0].type.name,res.data.types[1].type.name]);
           }
       }

       getdata();
    });

    return (
    <>
    <h1>you choose <span style={{color:"red"}}>{num}</span> value</h1>
    <h1>my name is <span style={{color:"red"}}>{name}</span> </h1>
    <img src={path} width="200px" height="200px"/>
    <h1>my type is <span style={{color:"red"}}>{type[0]} and {type[1]}</span></h1>
      <select value={num} onChange={(event)=>{
          setnum(event.target.value);
      }}>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
          <option value="18">18</option>
          <option value="6">6</option>
      </select>
    </>
    );
};

export default ComA;