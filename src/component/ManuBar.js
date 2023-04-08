import React,{useContext} from 'react'
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/ManuBar.css";

import { userContext } from './MainLayoutOne';

function ManuBar({triger}) {
  const contextInput=useContext(userContext);
  console.log('menuBar')
  return (
  <Row className='manu-bar'>
    <Col sm={8}>
    <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="Home" onClick={()=>contextInput.testhandle(contextInput.home)}>
              Home
            </Nav.Link>
            {/* <Nav.Link eventKey="Home" onClick={()=>contextInput.testhandle(contextInput.home)}>
              Home
            </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="protfolio" onClick={()=>contextInput.testhandle(contextInput.about)} title="protfolio">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="resume" onClick={()=>contextInput.scrollhandle(contextInput.resume)} title="resume">
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="prjects" onClick={()=>contextInput.scrollhandle(contextInput.project)} title="projects">
              {" "}
              Project
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contect" onClick={()=>contextInput.testhandle2(contextInput.contact)} title="contect">
              {" "}
              Contect
            </Nav.Link>
          </Nav.Item>
          </Nav>
    </Col>
    <Col className='btn-admin-col' sm={4}>
    <button className='btn-admin' onClick={()=>triger(true)} >Admin-Log</button>
    </Col>
    </Row>
  );
}

export const MemoizedManuBar = React.memo(ManuBar);


