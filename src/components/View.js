import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import "./Home.css";
 
const View = () => {
    const {id}=useParams();
    const[product,setProduct]=useState([]);
    const navigate = useNavigate();
 
    useEffect(()=>{
        fetchProduct();
    },[id]);
 
    const fetchProduct=async()=>{
        try{
        const result=await axios.get("http://127.0.0.1:8000/api/product/"+id);
        console.log(result.data.products);
        setProduct(result.data.products)
 
        }catch(err){
            console.log("Something Wrong");
        }
    }
 
    const clickToBackHandler=()=>{
        navigate('/home');
    }
 
    return <div>
            <div className='products'>
            <div className='container-2'>
            <h1>Product Details</h1>
            <form>
                <div className="mb-0 mt-0">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Full Name" name="name" value={product.name} disabled/>
                </div>
                <div className="mb-0 mt-0">
                    <label className="form-label">Price:</label>
                    <input type="price" className="form-control" id="price" placeholder="Enter price" name="price" value={product.price} disabled/>
                </div>
                <div className="mb-0 mt-0">
                    <label className="form-label">Availability:</label>
                    <input type="availability" className="form-control" id="availability" placeholder="Enter availability" name="availability" value={product.availability} disabled/>
                </div>
                
                <button className="btn btn-primary" onClick={clickToBackHandler}>Back To Home</button>
            </form>
        </div>
        </div>
    </div>;
};
 
export default View;