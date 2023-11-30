import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import "./Home.css";
 
const List = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
 
    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/product");
            //console.log(result.data.results);
            setProductData(result.data.results)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
 
    const handleDelete=async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/productdelete/"+id);
        const newProductData=productData.filter((item)=>{
            return(
                item.id !==id
            )
        })
        setProductData(newProductData);
    }
 
    return(
        <div className='list'>
        <table className="table">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    productData.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{product.name} </td>
                                <td>{product.price} </td>
                                <td>{product.availability} </td>
                                <td>
                                    <NavLink to={`/view/${product.id}`} className="btn btn-success mx-2">View</NavLink>
                                    <NavLink to={`/edit/${product.id}`} className="btn btn-info mx-2">Edit</NavLink>
                                    <button onClick={()=>handleDelete(product.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    );
};
 
export default List;