import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
function Products() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      if(res.status===200)
        setProducts(res.data.products);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className="products dash-board-page">
      <h1 className="heading">Products</h1>
      <div className="products-table table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((item)=>{
                return(
                  <tr>
                    <td>{item?.id}</td>
                    <td>{item?.title}</td>
                    <td>{item?.category}</td>
                    <td>{item?.brand}</td>
                    <td>${item?.price}</td>
                    <td>{item?.stock}</td>
                    <td><Link className='details-btn' to={`/products/${item?.id}`}>Details</Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products