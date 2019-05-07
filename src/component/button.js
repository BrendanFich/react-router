import React, { useState } from 'react';
import './button.css'

export default function Button(props) {
  const [value,setValue] = useState({
    name:props.name,
    active:false,
    deltaX:0,
    deltaY:0
  })

  let myRef = React.createRef()
  const click = (e)=>{
    let {x, y} = myRef.current.getBoundingClientRect()
    let {clientX, clientY} = e
    let deltaX = clientX - x - 5
    let deltaY = clientY - y - 5

    setValue({
      ...value,
      active : true,
      deltaX : deltaX,
      deltaY : deltaY
    })
  }
  const y = ()=>{
    setValue({
      ...value,
      active : false
    })
  }
  return (
    <button ref={myRef} className="btn" onClick={click}>
    <span className="name">{value.name}</span>
    {value.active === true ? <span className="circle" 
  style={{left:value.deltaX,top:value.deltaY}} 
  onAnimationEnd={y}></span> : null}
    </button>

   );
}