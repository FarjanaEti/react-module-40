import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './Countries/countries.css'

const Countries = () => {
   const [countries,setCountries]=useState([]);
   const [markVisit,setMarkVisit]=useState([]);
   const [markFlag,setMarkedFlag]=useState([]);

   useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res=>res.json())
       .then(data=>setCountries(data))                   
   },[])
   
  const handleMark=(country)=>{
     const newVisited=[...markVisit,country]
     setMarkVisit(newVisited);
  }

  const handleFlag=flag=>{                       
    const newFlag=[...markFlag,flag];
    setMarkedFlag(newFlag);                         
  }
  return (
 <div>
       <h1>All Countries name !!!</h1>  
       <div>
       <h3>Country:{countries.length}</h3>
       <ul>
         {
           markVisit.map(country=>
 <li key={country.cca3}>{country.name.common}</li>)                   
         }                  
       </ul>                     
       </div>
      
       <div>
     {
       markFlag.map(flag=><img src={flag}></img>)                       
     }
       </div>
      <div className="flag">
      { 
  countries.map(country=>

  <Country key={country.cca3} 
  handleVisit={handleMark} 
  handleFlag={handleFlag}
   country={country}></Country>
  
          )}                        
    </div>                                                                              
    </div>
 );
};

export default Countries;