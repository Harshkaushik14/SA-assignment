import React, { useState } from 'react'
import JSONDATA from '../warehouse.json';
import "./Homepage.css";


const Homepage = () => {
    const [searchTerm , setSearchTerm] = useState('')

  return (
    <div className='homepage'>
        <input type="text" placeholder='search..' onChange={e => {setSearchTerm(e.target.value);
        }} 

        />
        {JSONDATA.filter((val) => {
            if(searchTerm == ''){
                return val;
            }else if(val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
return val
            }else if(val.cluster.toLowerCase().includes(searchTerm.toLowerCase())){
return val
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
return val
            }
        }).map((val , key) =>{
          return<div className='warehouse' key={key}>
          <img className='warehouse-img' src={val.image} alt="warehouse_img"/>
          <h2 className='warehouse-name'>{val.name}</h2>
          <h4 className='warehouse-city'>{val.city}</h4>
            <p className='warehouse-space'>{val.space_available}</p>
            <span className='warehouse-cluster'>{val.cluster}</span>
            </div>
        })}
    </div>
  )
}

export default Homepage