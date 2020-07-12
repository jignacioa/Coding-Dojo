import React from 'react'
//import axios from 'axios'
import Form from '../components/productForm'
import ProductList from '../components/productList'

const newProduct = {
    productName: '',
    productPrice: '',
    description: '',
}

export default () => {
    return (
        <div>
            <Form
            product = {newProduct}
            method = "post"
            url = "http://localhost:8000/api/products"
            />
            <ProductList/> 
        </div>
    )
}