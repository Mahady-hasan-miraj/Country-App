import React from "react";
import style from "./Country.module.css";



function Country ({country,removeCountry}){
    const {name, flags, capital, population, area} = country;
   
     const handalRemoveCountr = (name)=>{
        removeCountry(name);
     }

    return( 
        <article className={style.Country}>
            <div> 
                <img src={flags.png} alt={name.common} className={style.flag} />
                <h3>Name: {name.common}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Population: {population}</h3>
                <h3>Area: {area}</h3>
                <button onClick={()=>{handalRemoveCountr(name.common)}} className= {style.btn} >Remove country</button>
            </div>
        </article>
    )
}

export default Country;