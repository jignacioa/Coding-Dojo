import React, {useState} from 'react'
import looks from './BoxGenerator.module.css'

const BoxGenerator = (props) => {
  const[color, setColor] = useState('')
  const[boxes, setBoxes] = useState([])



 const inputColor = e => {
     setColor(e.target.value)
     
 }

 const handleSubmit = (e) => {
     e.preventDefault()
     const newBox = {color: color}
     setBoxes([...boxes, newBox])
     setColor('')     
 }
    return (
        <>
        <h1>BOX GENERATOR</h1>
        <form onSubmit = {handleSubmit} >
            <div>
                <label>Color</label>
                <input value = {color} type='text' onChange={inputColor}/>
            </div>
            <button type='submit' >Submit</button>
        </form>
        <p>{color}</p>
        <div className ={looks.wrapper}>
        {boxes.map((box,index)=> {
            return (
                <div className ={looks.box} key={index} style = {{background: box.color}}></div>
            )}
        )}
        </div>
        </>
    )
}

export default BoxGenerator 