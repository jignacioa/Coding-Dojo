import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'
import Form from './productForm'





export default function ProductEdit({id}) {
   const [product, setProduct] = useState(null)
   const [loaded, setLoaded] = useState(false)
   console.log(id)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
         .then(res => {
             setProduct(res.data)
             setLoaded(true)
         })
         .catch(err => console.log(err))
         
    }, [])
    console.log(product)
    
    return (
        <div>
        {loaded && (
            <Form 
             product={product}
             method = "put"
             url = {'http://localhost:8000/api/products/' + id}/>
            
        )}    
        
         </div>
    )
    


    }
 
        
   
    