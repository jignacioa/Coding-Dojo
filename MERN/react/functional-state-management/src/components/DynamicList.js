import React, {useState} from 'react'; // import React always from node_modules
/* we have to import {useState} (a function) to work with state in functional
this.state = {} and then inside the object we put how we wanted the state to look first when using class*/





function DynamicList(props) { //create functional component *props allows function to take values (props object) 
  //vanilla js:  input.addEventListener('input', event =>...) to track input value, similiar in functional
  // calling useState('') returns an array with 2 elements, arr[0] = ''(initial state value),  arr[1] = function(allows state update)
  /*const arr = useState('')const value = arr[0] // actual state value
  const setValue = arr[1] // function to allow state update (we're not overriding variable(val which is constant), were replacing them entirely)
   we can destructure the array to pull out value, setValue instead of setting them indidivually */
  const [value, setValue] = useState('')

  // to make list of inputs
  const [items, setItems] = useState([]);

  //<input/>(self closing tag in jsx) is <input></input>
  //target of the event is <input> and the value is whatever is inside input 

  //form.addEventListener('submit'), event => ...)

  //always prevent default, it will prevent GET request 
  const handleSubmit = event => {
    event.preventDefault();
      
    setItems([...items, value]);
    setValue('')

  }
  return (
 <>
 <h3>{props.title}</h3>
 <p>{value}</p>
  <form onSubmit = {handleSubmit}>
    <input
      value =  {value}
      onChange = {e => setValue(e.target.value)}
      />
    <button>Submit</button>
  </form>
  <ul>
    {items.map((item, idx) => {
      return (
      <li key={idx}>{item}</li>
      )
    })}
  </ul>

 </>
  );


}

//always
export default DynamicList 