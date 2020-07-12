import React, {useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'


export default function Form({product, method, url}) {
    const [productName, setName] = useState(product.productName)
    const [productPrice, setPrice] = useState(product.productPrice)
    const [description, setDesc] = useState(product.description)
    const [errors, setErrors] = useState([])
    
    const handleSubmit = e => {
        e.preventDefault()
        setErrors([])
        axios[method](url, {
            productName, 
            productPrice, 
            description
        })
        .then(navigate('/'))
        .catch(err => {
            const errs = [];
            const innerErrorsObject = err.response.data.errors;

            for (const key in innerErrorsObject) {
                errs.push(innerErrorsObject[key].message)
            }
            setErrors(errs)
        })
        setName('')
        setPrice('')
        setDesc('')

    }
    console.log(errors)

    return (
        <div>
            <h1>Product Manager</h1>
            {errors.map((error, i) => {
                return (
                    <p key = {i} style={{color:'red'}}>{error}</p>
                )
            })}
            <form onSubmit ={handleSubmit}>
                <div>
                    <label>Product Name</label>
                    <input 
                    value ={productName}
                    onChange ={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input
                    value ={productPrice}
                    onChange ={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input
                    value ={description}
                    onChange ={e => setDesc(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )


}