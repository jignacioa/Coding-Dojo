import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'



export default function ProductList() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products', {
            withCredentials: true
        })
            .then(res => setProducts(res.data))
            .catch(() => navigate('/'))
        
    }, [products])
    if (products === null) return 'Loading...'

  const handleDelete = id => {
      axios.delete('http://localhost:8000/api/products/' + id)
        .then(() => setProducts(products.filter(product => product._id !== id)))
        .catch(err => console.log(err))
  }

  return (
      <div>
          <table>
              <thead>
                <tr>
                    <td>All Products</td>
                    <td></td>
                </tr>
              </thead>
              <tbody>
                  {products.map(product => {
                      return(
                  <tr key={product._id}>
                      <td><Link to ={`/${product._id}`}>{product.productName}</Link></td>
                     <td>
                         <button onClick ={e => {handleDelete(product._id)}}>Delete</button>{' '}
                         <button onClick ={() => navigate(`/${product._id}/edit`)}>Edit</button>
                         </td>
                  </tr>
                  )
                })}
              </tbody>
          </table>
      </div>
  )
}