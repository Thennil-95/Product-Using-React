
import React, {  } from "react";
import "./App.css";
 
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from "./components/View";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Login from "./Login";
 
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/home" element={<Home />} />
                <Route exact path="/view/:id" element={<View/>}/>
                <Route exact path="/edit/:id" element={<Edit/>}/>
                <Route exact path="/add" element={<Add />} />

            </Routes>
        </Router>
    </div>
  );
}
 
export default App;