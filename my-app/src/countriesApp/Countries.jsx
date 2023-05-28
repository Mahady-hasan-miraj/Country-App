import React from "react";
import Country from "./Country";
import {v4 as uuidv4} from 'uuid';
import style from './Countries.module.css';



function Countries({country, removeCountry}){
 
    return (
        <section>
            <div className="mainDiv">
                <div className = {style.countries}>
                    {
                      country.map((country)=>{
                       const countriseName = {country, id: uuidv4()}
                
                        return <Country {...countriseName} key={countriseName.id} removeCountry = {removeCountry} />
                      }) 
                   }
                
                </div>

            </div>
            
        </section>
    )
}

export default Countries;