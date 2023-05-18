import { Link, useNavigate } from "react-router-dom"
import { logOut } from "./utilities";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import CreatePostModal from "./CreatePostModal";


const NavBar = ({user, setUser})=> {
    const navigate = useNavigate()

    return (
    <>        
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between px-3 py-2" >
        
            <Navbar.Brand href="/">BreatheReal</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/"> Home</Nav.Link>
                <Nav.Link as={Link} to="/feed/">Feed</Nav.Link>
                <CreatePostModal /> 
                {user ?
                    <>  
                        
                        <Nav.Link as={Link} to="/profile/">{user && user.name}</Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={() => logOut(setUser, navigate)} > LOG OUT </Nav.Link> 
                        {/* <Button variant="primary" onClick={()=>logOut(setUser, navigate)}>LOG OUT</Button> */}
                    </> 
                    : <Nav.Link as={Link} to="/login/">SIGN IN</Nav.Link>
                    } 
                </Nav>

        </Navbar>
    </>
    )
}

export default NavBar;