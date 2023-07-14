import React from 'react'
import {NavLink} from "react-router-dom"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function Navtop() {
  return (
    <div>
      {/* <Navbar className="p-3 sticky-top" expand="lg" style={{ backgroundImage: 'linear-gradient(to bottom left, lightblue, royalblue)' }}> */}
      <Navbar className="p-3 sticky-top" expand="lg" style={{ backgroundImage: 'linear-gradient(to bottom left, rgba(245,184,180,96), orange)' }}>
      {/* <Navbar className="p-3 sticky-top" expand="lg" style={{backgroundColor: 'rgba(245,184,180,96)'}}> */}
        <Navbar.Brand><NavLink style={{color: 'black'}} to="/"><b>Zakky's Book Library</b></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title={"Books"} id="nav-dropdown">
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
