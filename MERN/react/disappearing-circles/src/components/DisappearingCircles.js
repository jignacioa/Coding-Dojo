import React, {useState} from 'react'
import looks from './DisappearingCircles.module.css'

const initialCircles = [
    {
        color: 'purple',
        points: 10
    },
    {
        color: 'purple',
        points: 10
    },
    {
        color: 'purple',
        points: 10
    },
    {
        color: 'green',
        points: 20
    },
    {
        color: 'black',
        points: 30
    },
    {
        color: 'black',
        points: 30
    },
]


function DisappearingCircles() {

const [points, setPoints] = useState(0);
const [circles, setCircles] = useState(initialCircles)

  function removeCircle(idx) {
      setPoints(points + circles[idx].points);
     
        //function filterCallback(_, i)
      function filterCallback(circles, i) {
          return i !== idx
      }
      const newCircles = circles
      //.filter((circle, i) =>i !== idx) this can also look .filter((_, i) =>i !== idx) because we're only worried about index to remove
      .filter(filterCallback)
      setCircles(newCircles)
  }

  function handleReset() {
    setCircles([...initialCircles]);
    setPoints(0)      
  }
  return (
      <div>
      <p>Points: {points}</p>
      <div className = {looks.wrapper}>
        {circles.map((circle, index) => {
            return (
                <div 
                //onClick will have an inline callback, we care abut the idx not the even(click). A submit would be an event to worry about 
                onClick={()=> removeCircle(index)}
                key={index} 
                className ={looks.circle} 
                style ={{background: circle.color}}>
                    {circle.points}</div>
            )
        })}
      </div>
      <button onClick ={handleReset}>Reset</button>
      </div>
  )

}




export default DisappearingCircles