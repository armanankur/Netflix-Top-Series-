import React from 'react'
import './Card.css'
function Card(props) {
  return (
    
    <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="image not found" className="card_img" />
      <div className="card_info">
        <span className="card_category">{props.stitle}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={props.link} >
          <button>watch now</button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Card