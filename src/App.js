import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'; // CSS 파일 import
import gaga from './data.js'; // data.js에서 데이터 import

function App() {
  // gaga 데이터를 shoes로 설정
  const [shoes] = useState(gaga);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="App">
      <Navbar expand="lg" className={`bg-body-tertiary ${darkMode ? 'navbar-dark' : ''}`}>
        <Container>
          <Navbar.Brand href="#home">나의 신발가게</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-dnav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">주문문의</Nav.Link>
              <Nav.Link href="#link">로그인</Nav.Link>
              <NavDropdown title="상세정보" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">고객센터</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <div className="row">
          {shoes.map((shoe, index) => (
            <div className="col-md-4" key={index}>
              <img
                src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`}
                width="80%"
                alt={shoe.title}
              />
              <h4>{shoe.title}</h4>
              <p>{shoe.content}</p>
              <p>가격: {shoe.price}원</p>
              <a href="https://www.naver.com">주문넣기</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
