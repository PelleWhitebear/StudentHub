import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarHeader.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase-config.js';
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";



    // https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css

    /* const myNavLink = ({
        children, style, ...restProps
    }) => (
        <Nav.Link
        {...restProps}
        style={{
            backgroundColor: 'white',
            opacity: 0.9,
        }}
        >
        {children}
        </Nav.Link>
    ); */

    const NavBarHeader = () => {
        const [user, setUser] = useState({});
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });

        const logout = async () => {
            await signOut(auth);
        }
        return (
            <>
            <Navbar variant="dark" className="NBHeader">
                <Container className="alignCenter">
                    <Navbar.Brand as={Link} to="/Calendar">
                    </Navbar.Brand>
                        <Nav>
                            <Nav.Link as={Link} to="/Calendar" className='navlink'>Calendar</Nav.Link>
                            <Nav.Link as={Link} to="/MyLessonPlan" className='navlink'>My Lesson Plan</Nav.Link>
                            <Nav.Link as={Link} to="/StudyGuidance" className='navlink'>Study Guidance</Nav.Link>
                            <Nav.Link as={Link} to="/Announcements" className='navlink'>Announcements</Nav.Link>
                            <Nav.Link as={Link} to="/CourseDatabase" className='navlink'>Course Database</Nav.Link>
                            <Nav.Link as={Link} to="/Grades" className='navlink'>Grades</Nav.Link>
                        </Nav>
                        
                        <Nav>
                            <NavDropdown title= {user?.email}>
                                <NavDropdown.Item as={Link} to="/UserSettings">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} 
                                to="/"
                                onClick={logout}
                                >Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                </Container>
                
            </Navbar>

         
            </>
            )
          };
  
  export default NavBarHeader;
