import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky="top" className="nav-bar py-3 px-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={HashLink} to="/home#home">
                    <span style={{ color: "white", marginRight: "2px", fontSize: "26px" }}>CAM</span>
                    <span style={{ color: "red", marginRight: "2px", fontSize: "26px" }}>ZONE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-option" as={HashLink} to="/home#products">Products</Nav.Link>

                        <Nav.Link className="nav-option" as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                        <Nav.Link className="nav-option" as={HashLink} to="/home#other">Other</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            // user.email ?
                            //     <div className="d-flex justify-content-center align-items-center">
                            //         <NavDropdown title={user?.displayName || user?.email} id="collasible-nav-dropdown">
                            //             <NavDropdown.Item as={Link} to="/manage-bookings">Manage all Bookings</NavDropdown.Item>
                            //             <NavDropdown.Item as={Link} to="/my-bookings">My bookings</NavDropdown.Item>
                            //             <NavDropdown.Item as={Link} to="/my-cart">My Cart</NavDropdown.Item>
                            //             <NavDropdown.Item as={Link} to="/add-new-package">Add new package</NavDropdown.Item>
                            //             <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                            //         </NavDropdown>
                            //         <img src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="" />
                            //     </div>
                            //     :
                            //     <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;