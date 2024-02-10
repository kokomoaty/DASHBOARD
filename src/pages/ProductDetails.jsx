import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails() {
    const params=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState(null);
    const [editMode,setEditMode]=useState(false);
    useEffect(()=>{
        const id=params.id;
        axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{
            if(res.status===200){
                setProduct(res.data);
            }
        }).catch(err=>console.log(err));
    },[]);
    const updateHandler=(id,e)=>{
        const formData=new FormData(e.target.form);
        let config={
            method:"PUT",
            url:`https://dummyjson.com/products/${id}`,
            data:formData
        }
        axios.request(config).then((res)=>{
            if(res.status===200){
                setProduct(res.data);
                setEditMode(false);
            }
        })
        .catch((err)=>console.log(err));
    }
    const deleteHandler=(id)=>{
        axios.delete(`https://dummyjson.com/products/${id}`)
        .then((res)=>{navigate("/products")})
        .catch((err)=>console.log(err));
    }
  return (
    <div className="dash-board-page">
        <h1 className="heading">
            Product Details
        </h1>
        <form onSubmit={e=>{
            e.preventDefault();

        }} className="product-form form">
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' id='title' 
                disabled={!editMode}
                defaultValue={product?.title}/>
            </div>
            <div className="form-control">
                <label htmlFor="brand">Brand</label>
                <input type="text" name='brand' id='brand' 
                disabled={!editMode}
                defaultValue={product?.brand}/>
            </div>
            <div className="form-control">
                <label htmlFor="category">Category</label>
                <input type="text" name='category' id='category' 
                disabled={!editMode}
                defaultValue={product?.category}/>
            </div>
            <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" name='price' id='price' 
                disabled={!editMode}
                defaultValue={product?.price}/>
            </div>
            <div className="form-control">
                <label htmlFor="stock">Stock</label>
                <input type="number" name='stock' id='stock' 
                disabled={!editMode}
                defaultValue={product?.stock}/>
            </div>
            <div className="form-control">
                {
                    editMode?
                    <>
                    <button className="update-btn btn"
                    onClick={(e)=>{updateHandler(product?.id,e)}}>UPDATE</button>
                    <button className="delete-btn btn"
                    onClick={()=>{deleteHandler(product?.id)}}>DELETE</button>
                    </>:
                    <button className='edit-btn btn' onClick={()=>{setEditMode(!editMode)}}>EDIT</button>
                }
            </div>
        </form>
    </div>
  )
}

export default ProductDetails