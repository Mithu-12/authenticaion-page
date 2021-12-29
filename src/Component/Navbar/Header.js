import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hook/useFirebase';

const Header = () => {
  const {user, handleLogout } = useFirebase();
    return (

      
  <div className="navbar-style">
    <Navbar className="navmenu"  sticky="top" collapseOnSelect expand="lg" >
  <Container>
      <Navbar.Brand href="" ></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
                  {/* <NavLink to="/home" className="items">
                    <li>Home</li>
                  </NavLink> */}
                 
                  {user.email && <li className="items" style={{ color: "#fff" }}>{user.displayName}</li>}
                     {
              user.email ?
                      <><NavLink to="/dashboard" className="items">
                      <li>Dashboard</li>
                       </NavLink>
                          <button className='items btn-danger' onClick={handleLogout}><li>Log Out</li></button></> :

                         <>
                         <NavLink  to="/login"><button className='btn-style'>Login</button></NavLink>
                         <NavLink  to="/register"><button className='btn-style'>Register</button></NavLink>
                         </>
                   }
      </Navbar.Collapse>
  </Container>
  </Navbar>
  </div>
      
    );
};

export default Header;