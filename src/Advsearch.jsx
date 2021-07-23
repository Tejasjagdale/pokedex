import React, { useState } from 'react';
import Cards from './Cards';
import Scard from "./Scard";
import Preloader from "./Preloder";


const Advsearch =()=>{

    var i=0;
    const [para,setpara] = useState("");


     const type = (event,para) =>{
         if(document.getElementById(para).style.backgroundColor=="rgb(48, 167, 215)"){
            document.getElementById(para).style.backgroundColor="#F2F2F2";
         }else{
            document.getElementById(para).setAttribute("style","background-color:#30A7D7");
         }
     }

     const oselect = (event,para) =>{
        if(document.querySelector(`.${para}`).style.backgroundColor=="rgb(253, 125, 36)"){
           document.querySelector(`.${para}`).style.backgroundColor="#F2F2F2";
        }else{
           document.querySelector(`.${para}`).setAttribute("style","background-color:#FD7D24");
        }
    }

    const menu=()=>{
        document.querySelector(".head").setAttribute("style"," transform: translateY(0vh);");
        document.querySelector(".foot").setAttribute("style"," transform: translateY(0vh);");
        document.querySelector(".bot_head").setAttribute("style","display:none");
        document.querySelector("main").setAttribute("style","display:none");
        document.querySelector(".menu").setAttribute("style","display:block");
    }

   const menu2=()=>{
        i++;
        if(i%2!=0)
        {
        document.querySelector(".bot_head2 p").innerHTML="hide advanced search <i class='far fa-arrow-circle-up'></i>";
        document.querySelector(".menu").setAttribute("style","display:flex");
        }
        else{
            document.querySelector(".bot_head2 p").innerHTML="show advanced search   <i class='far fa-arrow-circle-down'></i>";
            document.querySelector("main").setAttribute("style","display:block");
            document.querySelector(".menu").setAttribute("style","display:none");    
        }
    }


    const menuback=()=>{
        document.querySelector("main").setAttribute("style","display:block");
        document.querySelector(".menu").setAttribute("style","display:none");
        document.querySelector(".head").setAttribute("style"," transform: translateY(-51vh);");
        document.querySelector(".foot").setAttribute("style"," transform: translateY(50vh);");
        document.querySelector(".bot_head").setAttribute("style","display:flex");
    }

    const InputEvent = () =>{
        i++;
        if(i > 1){
            setpara(document.querySelector(".search_input").value);
           return(<Scard key={1} result={"pikachu"} onSelect={menu2}/>);
        }else{
            return(<Cards key={1} result={""} onSelect={menu2}/>);
        }
    }


    return(
        <>
           <Preloader/>
           <div className="menu">

                    <div id="menu_back" onClick={menuback}><i className="far fa-times-circle" ></i></div>

                    <div className="direct_search">

                    <div className="upsp">
                        <div><input type="text" className="search_input" name="search" defaultValue=""/>    <button onClick={InputEvent} className="search_btn"><i className="far fa-search"></i></button></div>

                        <div>
                            <div className="msg">
                                Search for a Pokemon by name or using its National Pokedex number
                             </div>
                         </div>
                     </div>

                    <div className="instrution"><span className="ins_sub1">Type & Weakness </span><span className="ins_sub2">T=Tpye  W=Weakness</span></div>
                    </div>

                    <div className="type_search">
                        <div><button className="type_btn" id="bug">Bug</button><span className="type" id="bugb" onClick={(e) => {type(e,"bugb")}}>T</span></div>
                        <div><button className="type_btn" id="dragon">Dragon</button><span className="type" id="dragonb" onClick={(e) => {type(e,"dragonb")}}>T</span></div>
                        <div><button className="type_btn" id="fairy">fairy</button><span className="type" id="fairyb" onClick={(e) => {type(e,"fairyb")}}>T</span></div>
                        <div><button className="type_btn" id="fire">fire</button><span className="type" id="fireb" onClick={(e) => {type(e,"fireb")}}>T</span></div>
                        <div><button className="type_btn" id="ghost">ghost</button><span className="type" id="ghostb" onClick={(e) => {type(e,"ghostb")}}>T</span></div>
                        <div><button className="type_btn" id="ground">ground</button><span className="type" id="groundb" onClick={(e) => {type(e,"groundb")}}>T</span></div>
                        <div><button className="type_btn" id="normal">normal</button><span className="type" id="normalb" onClick={(e) => {type(e,"normalb")}}>T</span></div>
                        <div><button className="type_btn" id="psychic">psychic</button><span className="type" id="psychicb" onClick={(e) => {type(e,"psychicb")}}>T</span></div>
                        <div><button className="type_btn" id="stell">steel</button><span className="type" id="stellb" onClick={(e) => {type(e,"stellb")}}>T</span></div>
                        <div><button className="type_btn" id="dark">dark</button><span className="type" id="darkb" onClick={(e) => {type(e,"darkb")}}>T</span></div>
                        <div><button className="type_btn" id="electric">electric</button><span className="type" id="electricb" onClick={(e) => {type(e,"electricb")}}>T</span></div>
                        <div><button className="type_btn" id="fighting">fighting</button><span className="type" id="fightingb" onClick={(e) => {type(e,"fightingb")}}>T</span></div>
                        <div><button className="type_btn" id="flying">flying</button><span className="type" id="flyingb" onClick={(e) => {type(e,"flyingb")}}>T</span></div>
                        <div><button className="type_btn" id="grass">grass</button><span className="type" id="grassb" onClick={(e) => {type(e,"grassb")}}>T</span></div>
                        <div><button className="type_btn" id="ice">ice</button><span className="type" id="iceb" onClick={(e) => {type(e,"iceb")}}>T</span></div>
                        <div><button className="type_btn" id="poison">poison</button><span className="type" id="poisonb" onClick={(e) => {type(e,"poisonb")}}>T</span></div>
                        <div><button className="type_btn" id="rock">rock</button><span className="type" id="rockb" onClick={(e) => {type(e,"rockb")}}>T</span></div>
                        <div><button className="type_btn" id="water">water</button><span className="type" id="waterb" onClick={(e) => {type(e,"waterb")}}>T</span></div>
                    </div>

                    <div className="right_menu">
                    <div className="height">

                    <h2>HEIGHT</h2>

                        <div className="height_op">
                            <span className="small_height" onClick={(e) => {oselect(e,"small_height")}}></span>
                            <span className="medium_height" onClick={(e) => {oselect(e,"medium_height")}}></span>
                            <span className="max_height" onClick={(e) => {oselect(e,"max_height")}}></span>
                        </div>
                    </div>

                    <div className="weight">

                    <h2>WEIGHT</h2>

                        <div className="weight_op">
                            <span className="small_weight" onClick={(e) => {oselect(e,"small_weight")}}></span>
                            <span className="medium_weight" onClick={(e) => {oselect(e,"medium_weight")}}></span>
                            <span className="max_weight" onClick={(e) => {oselect(e,"max_weight")}}></span>
                        </div>
                    </div>

                    <div className="range">
                    <h2>Number Range</h2>

                        <div className="num">
                            <input type="text" value="1" className="num1" />
                                -
                            <input type="text" value="898" className="num2" />
                     </div>
                    </div>
                    </div>

                    <div className="reset_search">
                    <button className="reset_btn">Reset</button>

                    <button className="search_btn2"><i className="far fa-search"></i> search</button>
                </div>

                </div>

                    <div className="bot_head" onClick={menu}>
                <p> show advanced search   <i className="far fa-arrow-circle-down"></i> </p>
                </div>

                    <div className="head"></div>

                    <div className="foot"></div>

                    {InputEvent()}
        </>
    );
};

export default Advsearch;