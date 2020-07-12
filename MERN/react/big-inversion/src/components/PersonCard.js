import React, {useState} from 'react';


//optional(destructure props): {firstName, lastName, age, hairColor}... sot now you don't need props. (ex. {props.firstName} ={firstName})
const PersonCard = props => {
    //calling on useState crates an arry with two elements: value and function to change value 
    //const [state, setState] = useState(//initial statement goes here)

    //use state doesn't need to be passed a n object could've just used props.age as the initial value 
    const [state, setState] = useState(props.age)

    const handleClick = e => {
        setState(state + 1)
    } 
    return (
        <>
        <h1>{props.firstName}, {props.lastName}</h1>
        <p>Age: {state}</p>
        <p>hair Color: {props.hairColor}</p>
        <button onClick ={handleClick} >Increase age</button>
        </>
    )


}

export default PersonCard