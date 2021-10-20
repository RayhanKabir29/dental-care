import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>Dental Care</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#about-us">About Us</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#doctors">Doctors</Nav.Link>
  
                    { user?.email?<Button onClick={logOut} variant="danger">Log Out</Button>:
                    <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>   }
                   <Navbar.Text>
                        <div className="sign-in-msg text-primary">
                        Signed in as: {user?.email}
                        </div>
                    </Navbar.Text>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
