import React from 'react';


function Style({word, text, background}) {
    
    return (
     <h1 style = {{color: text, background: background}}>Hello from style</h1>
    )
        
}

export default Style