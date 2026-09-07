import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

export default function Router1() {
    const navStyle = {
        backgroundColor:'#ced',
        textAlign:'center',
        padding: '7px'
    }

    const linkStyle = {
        textDecoration:'none',
        color:'blue',
        display:'inline-block',
    }
    return (
    <BrowserRouter>
        <nav>
            <Link to="/" style={linkStyle}>Home</Link> -&nbsp
            <Link to="/product" style={linkStyle}>Product</Link> -&nbsp
            <Link to="/member" style={linkStyle}>Member</Link> -&nbsp
            <Link to="/contact" style={linkStyle}>Contact Us</Link> -&nbsp
        </nav>
    </BrowserRouter>
  )
}