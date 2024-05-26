import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Counter from './Counter';

const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setProduct(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <img src={product?.image} alt="Image" className='w-50'/>
                </div>
                <div className="col-lg-6">
                <h1>{product?.title}</h1>
                <p>{product?.price}</p>
                <h3>{product?.category}</h3>
                <h3>{product?.description}</h3>
                <Counter/>


                </div>
               

            </div>
            </div>
        </div>
    )
}

export default ProductDetail
