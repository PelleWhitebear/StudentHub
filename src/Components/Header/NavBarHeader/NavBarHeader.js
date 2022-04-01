import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBarHeader.css';
import { Link } from 'react-router-dom';

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
        return (
            <>
            <Navbar sticky="top" variant="dark" className="NBHeader">
                <Container>
                    <Navbar.Brand as={Link} to="/Calendar">StudentHub.</Navbar.Brand>
                        <Nav>
                            <Nav.Link as={Link} to="/Calendar" className='navlink'>Calendar</Nav.Link>
                            <Nav.Link as={Link} to="/MyLessonPlan" className='navlink'>My Lesson Plan</Nav.Link>
                            <Nav.Link as={Link} to="/StudyGuidance" className='navlink'>Study Guidance</Nav.Link>
                            <Nav.Link as={Link} to="/Announcements" className='navlink'>Announcements</Nav.Link>
                            <Nav.Link as={Link} to="/CourseDatabase" className='navlink'>Course Database</Nav.Link>
                            <Nav.Link as={Link} to="/Grades" className='navlink'>Grades</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Pelle Andersen">
                                <NavDropdown.Item as={Link} to="/Calendar">Settings</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Calendar">hello</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Calendar">:)</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/">Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                </Container>
            </Navbar>
            </>
            )
          };
  
  export default NavBarHeader;
