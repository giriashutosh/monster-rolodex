import React from "react";
import './card.style.css'
const card = ({monster}) => {
 //const {monster} = props;
 //console.info(monster)
 const {id, name, email} = monster;
  return (
    <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 >{name}</h2>
        <p >{email}</p>
      </div>

    
    
    
      
      
    
  );
};

export default card;
