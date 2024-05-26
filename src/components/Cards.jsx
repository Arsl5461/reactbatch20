import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"


const Cards = () => {
    const [products,setProducts]=useState()
    const [loader,setLoader]=useState(true)
    const [title,setTitle]=useState("Arslan Akmal")

    const fetchProducts=async()=>{
const response=await axios.get("https://fakestoreapi.com/products")
setProducts(response.data)
    }

    useEffect(()=>{
      fetchProducts();
    },[])

  return (
        <>
        <h1>{title}</h1>
        <button onClick={()=>setTitle("Ali Akmal")}>Update Title</button>
    <div className='flex'>
  {products?.map((item)=>{
    return(
      <Link to={`${item.id}`} style={{textDecoration:"none"}}>
        <div class="card bor" style={{width:"14rem"}}>
  <img src={item.image} class="card-img-top" height={"200px"} width={"200px"} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <h1>{item.price}</h1>
    <p>{item.category}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
</Link>
    )
  })}
    </div>
    </>
  )
}

export default Cards