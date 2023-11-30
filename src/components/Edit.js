import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,useParams } from 'react-router-dom';
 
const Edit = () => {
    const {id}=useParams()
    const navigate = useNavigate();
    const clickToBackHandler=()=>{
        navigate('/home');
    }
 
    const [productField, setProductField] = useState({
        name: "",
        price: ""
    });
 
    useEffect(()=>{
        fetchProduct();
    },[id])
 
    const fetchProduct=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/product/"+id);
            setProductField(result.data.products)
        }catch(err){
            console.log("Something Wrong");
        }
    }
 
    const changeProductFieldHandler = (e) => {
        setProductField({
            ...productField,
            [e.target.name]: e.target.value
        });
        console.log(productField);
    }
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/productupdate/"+id, productField);
            navigate('/home');  
        } catch (err) {
            console.log("Something Wrong");
        }
    }
 
    return(
        <div className='products'>
        <div className='container-2'>
            <h1>Edit Form</h1>
            <form>
                <div className="mb-0 mt-0">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter Your Full Name" name="id" value={id} disabled />
                </div>
                <div className="mb-0 mt-0">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Full Name" name="name" value={productField.name} onChange={e => changeProductFieldHandler(e)} />
                </div>
                <div className="mb-0 mt-0">
                    <label className="form-label">Price:</label>
                    <input type="price" className="form-control" id="price" placeholder="Enter price" name="price" value={productField.price}  onChange={e => changeProductFieldHandler(e)}/>
                </div>
                <div className="mb-1 mt-1">
                    <label className="form-label">Availability:</label>
                    <select className="form-select" id="availability" name="availability" value={productField.availability} onChange={(e) => changeProductFieldHandler(e)} required>
                        <option value="">Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Update</button>
                    <button className='btn btn-primary' onClick={clickToBackHandler}>Back To Home</button>
                </div>
            </form>
        </div>
        </div>
    );
};
 
export default Edit;