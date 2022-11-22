import React from 'react'

const Filter = ({icon , title}) => {
  return (
    <div className='filter-option' style={{padding:"10px"}}>
       <div className="icon" style={{display:"flex",justifyContent:"center"}}>{icon}</div>
       <div className="title" style={{justifyContent:"center"}}>{title}</div>
    </div>
  );
}

export default Filter;