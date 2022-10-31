import React from "react";
import './card-list.style.css'
import Card from "./card";
const CardList = (props) => {
  const { monsters } = props;
  
  
  return (
    <div className="card-list">
      {monsters.map(()=>{
        return <Card monster = {monsters}/>
      })

      }
    </div>
    
  );
};

export default CardList;
