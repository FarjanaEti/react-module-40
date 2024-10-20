import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisit,handleFlag}) => {                        
       //console.log(country)                     
      const {name,flags,population,languages}=country  
      console.log(country.languages)
      const [Visited,setVisited]=useState(false) 
      const handlebutton=()=>{
  setVisited(!Visited)
      }
  return (
  <div className="country">
  <h3 style={{color:"purple"}}>Name:{name.common}</h3>  
  <img src={flags.png} alt="" />  
  <p>Population:{population}</p> 
  <p>lg:{country.languages?.eng || 'No language available'}</p>
  <button onClick={()=>handleVisit(country)}>Mark visited</button><br />
  <button onClick={()=>handleFlag(country.flags.png)}>Flag</button>
  <button onClick={handlebutton}>{Visited?'visited':'Going'}</button>  
  {!Visited && 'i am coming'}                                                                          
    </div>
 );
};

export default Country;