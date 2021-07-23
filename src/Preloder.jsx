import React from 'react';

const Preloader = () =>{

    setTimeout(() => {
                document.querySelector(".preloader").setAttribute("style","display:none");
                document.querySelector("main").setAttribute("style","display:block");
    }, 8000);

    return(
        <>
              <div className="preloader">
            <div className="circle">
                <div className="sky"></div>
                <img src='https://i.pinimg.com/originals/ab/be/28/abbe28a943ed44fcd98452687f7c46c9.gif'  className="pika_img"/>
                <div className="grass"></div>
            </div>

            <div className="load">
                loading...
           </div>
        </div>
        </>
    );
};

export default Preloader;