import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
    return (
        <div className="container">
            <Navbar className='yellotail'>
                <LinkContainer to="/">
                    <Navbar.Brand>Daily News</Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link>HOME</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="contact">
                        <Nav.Link>CONTACT</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header