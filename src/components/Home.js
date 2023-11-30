import React, { useState } from 'react';
import List from './List';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
 
    return (
        
        <div className='products'>
            <table className='container'>
                <tr>
                    <td>
                        <h2>Products List</h2>
                    </td>
                    <td>
                        <div className='button-container'>
                            <Link to="/Add">
                                <button className="btn btn-primary">Add Product</button>
                            </Link>
                        </div>
                    </td>
                    <td>
                        <div className='button-container'>
                            <Link to="/">
                                <button className="button">Log Out</button>
                            </Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="3" style={{ textAlign: 'center' }}>
                        <List />
                    </td>
                </tr>
            </table>
        </div>                                                 
    )
};
 
export default Home;