import React from 'react';
import {NavLink} from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import { Navbar, Nav,Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbarr = () => {
    const state = useSelector((state)=> state.handleCart)

    return (
    <div>      
        <Navbar bg="light" expand="lg" className='bg-light bg-white py-3 shadow-sm'>
        <Container>
            <NavLink to="/" className="navbar-brand fw-bold fs-4"><AiOutlineShoppingCart className='fs-1'/> SOUQ</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/products">Products</NavLink>
               

            </Nav>
                    <div className='buttons'>
                    <NavLink to="/login" className="btn btn-outline-dark"> <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark ms-2"> <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
                </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    )
}

export default Navbarr;
