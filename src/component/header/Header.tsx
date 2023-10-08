// Header.tsx
import React from 'react';
import "./Header.css"
import { Navbar, Nav, Container, Button, FormControl, InputGroup } from 'react-bootstrap';
import { AiFillApple } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main_div'>
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Container 컴포넌트는 내용을 중앙 정렬하는데 사용 */}
        {/* 홈페이지 아이콘 및 이름 */}
        <Navbar.Brand as={Link} to="/" className="brand"> {/* 홈페이지로 이동하는 Link */}
          <AiFillApple className="logo-icon"/>
          <span className="mainhomepage">플랫폼</span>

          {/* 네비게이션 메뉴 */}
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/call">Call</Nav.Link>
            <Nav.Link as={Link} to="/Studypage">Studypage</Nav.Link>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>



            {/*  해결해야됨
             검색 바
            <InputGroup className="ml-auto">
              <FormControl
                placeholder="Search.."
                aria-label="검색"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                검색
              </Button>
            </InputGroup> */}


            {/* 회원가입 버튼 */}
            {/* 회원가입 페이지로 이동하는 Link */}
            <Link to="/signup" className="ml-2">
              <Button variant="primary">Sign Up</Button>
            </Link>

            {/* 로그인 버튼 */}
            <Link to="/Login" className="ml-2">
            <Button variant="outline-primary">Login</Button>
            </Link>
          </Nav>
        </Navbar.Brand>

      </Container>
    </Navbar>
    </div>
  );
}

export default Header;