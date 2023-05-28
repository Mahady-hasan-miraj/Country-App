import React,{useState, useEffect} from "react";
import Countries from './countriesApp/Countries';
import SearchCountry from "./countriesApp/SearchCountry";
import './app.css';


// start from here fetching Data with url 
const url = 'https://restcountries.com/v3.1/all';

function App() {
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async ()=>{
    setIsLoding(true);

    try{
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setIsLoding(false);
       setError(null);
      
    }catch(e){
      setIsLoding(false);
      setError(e);
    }
  };

  useEffect(()=>{
    fetchData(url);
  }, []);

// end from here fetch Data with url 
   

//  start from here delete function of Country
  const handalRemoveCountry = (name)=>{
    alert('Are you sure delete it');
    const filtered = countries.filter((contry)=>contry.name.common !== name);
    setCountries(filtered);
    
  }
//  end from here delete function of Country


//  start from here Search function of Country
  const handaleSearchCountry = (searchValue)=>{
     const value = searchValue.toLowerCase();

     const newSearchCtry =  countries.filter((ctry)=>{
        
        
        if(value === '') return countries;

        const newSearchCountry = ctry.name.common.toLowerCase();
        
        return newSearchCountry.includes(value);
        
      
    });
     
    setCountries(newSearchCtry);
  }
//  end from here Search function of Country  

  return (
    <>
     <h1>Country App</h1>
     <SearchCountry searchCountry = {handaleSearchCountry} />
     {isLoding && <h1>Lodding...</h1>}
     {error && <h2>{error.message}</h2>}
     {countries && <Countries country = {countries} removeCountry = {handalRemoveCountry} />}
  
    </>
  )
}

export default App
