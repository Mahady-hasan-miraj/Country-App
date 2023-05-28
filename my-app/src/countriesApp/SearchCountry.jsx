import React,{useEffect, useState} from "react";
import style from './Input.module.css';


function SearchCountry({searchCountry}){
  const [SearchText, setSearchText] = useState('');

  const handaleSearch = (e)=>{
    setSearchText(e.target.value);
    
  }

    useEffect(()=>{
      searchCountry(SearchText);
    
    },[SearchText]);

    return (
      <div  className= {style.input}>
            <input type="text" value={SearchText} placeholder="Search country" onChange={handaleSearch} />
      </div>
    ) 
}

export default SearchCountry;