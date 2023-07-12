import React from 'react'
import {NavLink ,Link, Outlet} from "react-router-dom"
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function Navtop() {
  return (
    <div>
      <Navbar className="p-3 sticky-top" expand="lg" style={{ backgroundImage: 'linear-gradient(to bottom left, lightblue, royalblue)' }}>
        <Navbar.Brand><NavLink style={{color: 'white'}} to="/">Zakky Book Libary</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="Books">
                        <NavDropdown.Item>
                            <NavLink to="/bookstable">Table of Books</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

      </Navbar>
    </div>
  )
}

export default Navtop
