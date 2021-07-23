import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Preloader from "./Preloder";
import axios from 'axios';
import './info.css';

const Info=({match})=>{

    const [further,setfurther] = useState({        
        anum:"",
        bnum:"",
        aname:"",
        bname:"",
    })
    const [num,setnum] = useState()
    const [name,setname] = useState();
    const [type1,settype1] = useState();
    const [type2,settype2] = useState();
    const [path,setpath] = useState();
    const [height,setheight] = useState();
    const [weight,setweight] = useState();
    const [stats,setstats] = useState({
        hp:"",
        attack:"",
        defense:"",
        special_attack:"",
        special_defense:"",
        speed:"",
    });

    const [cardid,setcardid] = useState(
        {
            cid:"",
            cid2:"",
            cid3:"",
        }
    );

    const [chain1,setchain1]= useState({
        id1:"",
        ename1:"",
        epath1:"",
        ename1t1:"",
        ename1t2:"",
    })

    const [chain2,setchain2] = useState({
        id2:"",
        ename2:"",
        epath2:"",
        ename2t1:"",
        ename2t2:"",
    })

    const [chain3,setchain3] = useState({
        id3:"",
        ename3:"",
        epath3:"",
        ename3t1:"",
        ename3t2:"",
    })

    useEffect(()=>{
       async function getdata(num){
           const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
           const res3= await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}/`);
           const res4=await axios.get(res3.data.evolution_chain.url);
           console.log(res4);


           //-------------------Evolve part ------------------------------------------//
           if(res4.data.chain.is_baby == false){
                 const evol1 =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${res4.data.chain.species.name}`);

                 if(evol1.data.types.length === 1){
                 setchain1(()=>{
                    return{
                    id1:evol1.data.id,
                    ename1:evol1.data.name,
                    epath1:evol1.data.sprites.front_default,
                    ename1t1:evol1.data.types[0].type.name,
                    ename1t2:"hidden",
                     }
                 })
                }else{
                    setchain1(()=>{
                        return{
                        id1:evol1.data.id,
                        ename1:evol1.data.name,
                        epath1:evol1.data.sprites.front_default,
                        ename1t1:evol1.data.types[0].type.name,
                        ename1t2:evol1.data.types[1].type.name,
                         }
                     })
                }
           }

           if(res4.data.chain.evolves_to.length == 1){
                 const evol2 =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${res4.data.chain.evolves_to[0].species.name}`);

                 if(evol2.data.types.length === 1){
                    setchain2(()=>{
                       return{
                       id2:evol2.data.id,
                       ename2:evol2.data.name,
                       epath2:evol2.data.sprites.front_default,
                       ename2t1:evol2.data.types[0].type.name,
                       ename2t2:"hidden",
                        }
                    })
                   }else{
                       setchain2(()=>{
                           return{
                           id2:evol2.data.id,
                           ename2:evol2.data.name,
                           epath2:evol2.data.sprites.front_default,
                           ename2t1:evol2.data.types[0].type.name,
                           ename2t2:evol2.data.types[1].type.name,
                            }
                        })
                   }
           }else{
               setcardid(()=>{
                   return{
                       cid1:"np",
                       cid2:"hidden",
                       cid3:"hidden",
                   }
               })
           }

           if(res4.data.chain.evolves_to[0].evolves_to.length == 1){
                 const evol3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${res4.data.chain.evolves_to[0].evolves_to[0].species.name}`);

                 if(evol3.data.types.length === 1){
                    setchain3(()=>{
                       return{
                        id3:evol3.data.id,
                       ename3:evol3.data.name,
                       epath3:evol3.data.sprites.front_default,
                       ename3t1:evol3.data.types[0].type.name,
                       ename3t2:"hidden",
                        }
                    })
                   }else{
                       setchain3(()=>{
                           return{
                            id3:evol3.data.id,
                           ename3:evol3.data.name,
                           epath3:evol3.data.sprites.front_default,
                           ename3t1:evol3.data.types[0].type.name,
                           ename3t2:evol3.data.types[1].type.name,
                            }
                        })
                   }
            }else{
                setcardid(()=>{
                    return{
                        cid1:"np",
                        cid2:"np",
                        cid3:"hidden",
                    }
                })
            }
        


           setnum(res.data.id);
           const res1= await axios.get(`https://pokeapi.co/api/v2/pokemon/${(res.data.id)+1}/`);
           const res2= await axios.get(`https://pokeapi.co/api/v2/pokemon/${(res.data.id)-1}/`);
           setfurther(()=>{
               return {
                   anum:res1.data.id,
                   bnum:res2.data.id,
                   aname:res1.data.name,
                   bname:res2.data.name
               }
           })
           setname(res.data.name);
           setpath(res.data.sprites.front_default);
           setheight(res.data.height);
           setweight(res.data.weight);
           setstats({
              hp:res.data.stats[0].base_stat,
              attack:res.data.stats[1].base_stat,
              defense:res.data.stats[2].base_stat,
              special_attack:res.data.stats[3].base_stat,
              special_defense:res.data.stats[4].base_stat,
              speed:res.data.stats[5].base_stat,
           })
           if(res.data.types.length === 1){
           settype1(res.data.types[0].type.name);
           settype2("hidden");
           }
           else{
            settype1(res.data.types[0].type.name);
            settype2(res.data.types[1].type.name);
           }
           stat();
       }

       getdata(match.params.id);
    },[]);

    const stat=()=>{
        console.log(`${(stats.hp/150)*100}%`)
        document.querySelector(".stats div .hp span").setAttribute("style",`height:${(stats.hp/150)*100}%`);
        document.querySelector(".stats div .attack span").setAttribute("style",`height:${(stats.attack/150)*100}%`);
        document.querySelector(".stats div .defense span").setAttribute("style",`height:${(stats.defense/150)*100}%`);
        document.querySelector(".stats div .special_attack span").setAttribute("style",`height:${(stats.special_attack/150)*100}`);
        document.querySelector(".stats div .special_defense span").setAttribute("style",`height:${(stats.special_defense/150)*100}%`);
        document.querySelector(".stats div .speed span").setAttribute("style",`height:${(stats.speed/150)*100}%`);
    }


    return(
        <>
         <main className="main1" >
           <div className="top">
          
              <div className="num_before" >
                  <a href={`/info/${further.bnum}`}><div><i className="fas fa-arrow-circle-left"></i><p>#{further.bnum}</p><h1>{further.bname}</h1></div></a>
                </div>


              <div className="num_after">
                  <a href={`/info/${further.anum}`}><div><h1>{further.aname}</h1><p>#{further.anum}</p><i className="fas fa-arrow-circle-right"></i></div></a>
                </div>
           </div>

           <div className="middel">
               <h2>{name} #{num}</h2>
            <div className="adjust3">

               <div className="mid_left">
                   <img  src={path}/>

                   <div className="stats">
                     <div><div className="hp">
                     <span>{stats.hp}</span></div><p>hp
                     </p>
                     </div>
                     <div><div className="attack">
                     <span>{stats.attack}</span></div><p>attack
                     </p>
                     </div>
                     <div><div className="defense">
                     <span>{stats.defense}</span></div><p>defense
                     </p>
                     </div>
                     <div><div className="special_attack">
                     <span>{stats.special_attack}</span></div><p>special attack
                     </p></div>
                     <div><div className="special_defense">
                     <span>{stats.special_defense}</span></div><p>special defense
                     </p></div>
                     <div><div className="speed">
                     <span>{stats.speed}</span></div><p>speed
                     </p></div>
                   </div>
               </div>

               <div className="mid_right">
                   <p>
                    There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
                   </p>

                   <div className="outlook">
                       <div><h3>height</h3><p>{height}</p></div>
                       <div><h3>Category</h3><p>seed</p></div>
                       <div><h3>Weight</h3><p>{weight}</p></div>
                       <div><h3>abality</h3><p>overgrow <i className="fas fa-question-circle"></i></p></div>
                       <div><h3>gender</h3><p className="gender"></p></div>
                   </div>

                   <div className="type_weakness">
                       <div>
                           <h1>Type</h1>
                           <div className="main">
                              <button className="type_btn" id={type1}>{type1}</button>
                              <button className="type_btn" id={type2}>{type2}</button>
                            </div>
                       </div>

                       <div>
                           <h1>Weakness</h1>
                           <div className="main">
                               <button className="type_btn" id="fire">Fire</button>
                               <button className="type_btn" id="ice">Ice</button>
                               <button className="type_btn" id="psychic">psychic</button>
                               <button className="type_btn" id="flying">flying</button>
                            </div>
                       </div>

                   </div>
                   </div>
               </div>

               <div className="bottom">
                <h1>Evolution</h1>
             <div className="adjust">
             <a href={`/info/${chain1.id1}`}>
              <div className="card2" >
                  <img src={chain1.epath1}/>
                  <h4>{chain1.ename1} #{chain1.id1}</h4>
                  <div className="poke_type">
                      <button  className="type_btn_small" id={chain1.ename1t1}>{chain1.ename1t1}</button>
                      <button  className="type_btn_small" id={chain1.ename1t2}>{chain1.ename1t2}</button>
                  </div>
              </div>
              </a>
             </div>
 
             <div className="adjust2" id={cardid.cid1}>
                 <i className="fas fa-chevron-right"></i>
             </div>
 
             <div className="adjust">
             <a href={`/info/${chain2.id2}`}>
              <div className="card2" id={cardid.cid2}>
                  <img  src={chain2.epath2}/>
                  <h4>{chain2.ename2} #{chain2.id2}</h4>
                  <div className="poke_type">
                      <button  className="type_btn_small" id={chain2.ename2t1}>{chain2.ename2t1}</button>
                      <button  className="type_btn_small" id={chain2.ename2t2}>{chain2.ename2t2}</button>
                  </div>
              </div>
              </a>
             </div>
 
             <div className="adjust2" id={cardid.cid3}>
                 <i className="fas fa-chevron-right"></i>
             </div>
 
             <div className="adjust">
             <a href={`/info/${chain3.id3}`}>
              <div className="card2" id={cardid.cid3}>
                  <img  src={chain3.epath3}/>
                  <h4>{chain3.ename3} #{chain3.id3}</h4>
                  <div className="poke_type">
                      <button  className="type_btn_small" id={chain3.ename3t1}>{chain3.ename3t1}</button>
                      <button  className="type_btn_small" id={chain3.ename3t2}>{chain3.ename3t2}</button>
                  </div>
              </div>
              </a>
             </div>

         </div>

         <div className="last">
            <button className="home_page" >Explore More Pokemon</button>
        </div>
           </div>

          </main>
        </>
    )
}

export default Info;