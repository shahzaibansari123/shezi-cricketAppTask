import logo from './logo.svg';
import './App.css';
import Login from "./Components/admin/admin"
import UserPanel from "./Components/user/user"
import { Routes ,Route,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar  bg="dark"  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand   href="#home">Cricket Live Update</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate("/") }}>User Panel</Nav.Link>
              <Nav.Link  onClick={() => { navigate("/admin") }}>Admin Panel</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<UserPanel/>} />
      <Route path='/admin' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
