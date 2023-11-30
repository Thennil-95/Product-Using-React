import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

const Add = () => {
    const [productField, setProductField] = useState({
        name: '',
        price: '',
        availability: '',
    });

    const navigate = useNavigate();

    const changeProductFieldHandler = (e) => {
        setProductField({
            ...productField,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/addnew", productField);
            console.log(response.data);
            navigate('/home');
        } catch (err) {
            console.log("Something went wrong");
        }
    };

    return (
        <div className='products'>
        <div className='container-2'>
            <h3>Add Your Detail</h3>
            <form>
                <div className="mb-1 mt-1">
                    <label className="form-label"> Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={(e) => changeProductFieldHandler(e)} required/>
                </div>
                <div className="mb-1 mt-1">
                    <label className="form-label">Price:</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter Price" name="price" onChange={(e) => changeProductFieldHandler(e)} required />
                </div>
                <div className="mb-1 mt-1">
                    <label className="form-label">Availability:</label>
                    <select className="form-select" id="availability" name="availability" onChange={(e) => changeProductFieldHandler(e)} required>
                        <option value="">Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => onSubmitChange(e)}>
                    Add Product
                </button>
            </form>
        </div>
        </div>
    );
};

export default Add;
