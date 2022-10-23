import logo from './logo.svg';
import { useState} from 'react';
import Main from "./Components/Home"
import Footer from "./Components/Footer"
import Menu from "./Components/Header"
import Gallery from './Components/gallary';
// import Login from './Components/login';
import Art from "./Components/art"
import About from "./Components/about"
import Register from './Components/register';
import Head from "./Components/head"
import Rating from './Components/rating';
import "./assets/css/noscript.css"
import "./assets/css/main.css"
import img_logo from "./images/logo.png"
import Start from './Start.js'

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function HomePage() {
    return(
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default HomePage;