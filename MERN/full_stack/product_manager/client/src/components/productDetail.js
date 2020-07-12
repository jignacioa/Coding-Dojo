import React, {useState, useEffect}from 'react'
import axios from 'axios'
import {Link, navigate}  from '@reach/router'


export default function ProductDetail(props) {
    const[product, setProduct] = useState('')
    const {id} = props
   useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
    }, [id])
    
    const handleDelete = id => {
      axios.delete('http://localhost:8000/api/products/' + id)
        .then(()=> navigate('/'))

    }
      return (
          <>
          <Link to='/'>Back to List</Link>
          <h1>{product.productName}</h1>
          <p>Price: $ {product.productPrice}</p>
          <p>Description: {product.description}</p>
          <button onClick ={() => handleDelete(product._id)}>Delete</button>
          </>
      )
    
}