import React from 'react'
import Icons from './Icons'
import './Card.css'


const Card = ({player , onPlay,index}) => {
    let icons=<Icons/>
    if (player=="o"){
        icons=<Icons name="circle"/>  
    }else if(player=="x"){
        icons=<Icons name="cross"/>
    }
  return (
   <div className='card' onClick={()=>onPlay(index)}>{icons}</div>
  )
}

export default Card