import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Product } from '../interfaces/product'

const Products = () => {
  const [products, setProducts] = useState([])
  // We will use UseEffect here to load the products.
  useEffect(()=>{
    (
      async ()=>{
        const response = await fetch('http://localhost:8000/api/products')

        const data = await response.json()

        //console.log(data)
        setProducts(data);
      }
    )();
  },[])

  const del = async (id:number)=>{
    if(window.confirm("Are you sure you want to delete this product?")){
    await fetch(`http://localhost:8000/api/products/${id}`, {
      method:'DELETE'
    })

    setProducts(products.filter((p:Product)=>p.id!==id))
  }
  }

  return (
    <Wrapper>
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Likes</th>
            <th scope="col">Action</th>
          </tr>
          {products.map(
            (p:Product)=>{
            return(
              <tr key={p.id}>
                <td>{p.id}</td>
                <td><img src={p.image} height="180"/></td>
                <td>{p.title}</td>
                <td>{p.likes}</td>
                <td>
                  <div className="btn-group mr-2">
                    <a href='#' className="btn btn-sm btn-outline-secondary"
                    onClick={()=>{del(p.id)}}>Delete</a>
                  </div>
                </td>
              </tr>
            )
          })}
          
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
    </Wrapper>
  )
}

export default Products