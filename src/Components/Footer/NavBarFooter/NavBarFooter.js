import { Container, Navbar, Nav  } from 'react-bootstrap';
import './NavBarFooter.css';

    const NavBarFooter = () => {
        return (
            <>
            <Navbar sticky="bottom" variant='dark' className="NBFooter sticky-bottom">
                <Container>
                    <Navbar.Text>
                    <Navbar.Brand>StudentHub.</Navbar.Brand>
                    By students, for students.
                    </Navbar.Text>               
                        <Nav>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <Nav.Link href="/Team">The team</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
            </>
            )
          };
  
  export default NavBarFooter;
