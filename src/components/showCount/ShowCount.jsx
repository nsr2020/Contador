import React from 'react'
import "./ShowCount.css"

const ShowCount = ({clicks}) => {
    const colorClass = clicks < 0 ? 'rojo' : clicks > 0 ? 'verde' : '';
  return (
    <p className={"frase"}>Has hecho click <span className={`${colorClass}`}>{clicks} </span>{clicks === 1?"vez":"veces"}</p>
  )
}

export default ShowCount;