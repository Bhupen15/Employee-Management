import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Bhupendra Choudhary pvt ltd</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
