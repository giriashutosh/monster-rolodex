import React from 'react'
import './search-box.style.css'
const search_box = (props) => {
  return (
    <div>
      <input 
      className={`search-box ${props.className}`} 
      type='search' 
      placeholder={props.placeholder} 
      
      onChange={props.onChangeHandler}

      />
    </div>
  )
}

export default search_box
