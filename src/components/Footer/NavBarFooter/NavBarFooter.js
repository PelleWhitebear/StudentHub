import { Container, Navbar, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBarFooter.css';

    const NavBarFooter = () => {
        return (
            <>
            <Navbar sticky="bottom" variant='dark' className="NBFooter sticky-bottom">
                <Container>
                    <Navbar.Text>
                    <Navbar.Brand as={Link} to="/Calendar">StudentHub.</Navbar.Brand>
                    By students, for students.
                    </Navbar.Text>               
                        <Nav>
                            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/Team">The team</Nav.Link>
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
            </>
            )
          };
  
  export default NavBarFooter;
