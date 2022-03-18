import { Form, Button, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import arrowUp from "../assets/arrowUp.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <img src={logo} />
          <Row className="footerRow mt">
            <Col md={4}>
              <div className="description">
                <p>
                  Troon was established in 2012 to address the Small to Medium
                  Size Business (SMB) and Healthcare market’s need to digitally
                  innovate by providing the necessary software development
                  skills and brand marketing expertise needed in today’s
                  business landscape.
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
            <Col md={2}>
              <div>
                <p className="head">Enriques</p>
                <p className="text">info@troontechnologies.com</p>
              </div>
              <div className="mt-44">
                <p className="head">Follow us</p>
                <div className="mt-3">
                  <a className="icon-twitter link" href=""></a>
                  <a className="icon-linkedIn link" href=""></a>
                  <a className="icon-facebook link" href=""></a>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
              <div>
                <p className="head">Phone</p>
                <p className="text">1-800-600-4057</p>
              </div>
              <div className="mt-44">
                <p className="head">Address</p>
                <p className="address">
                  954 King St W, Toronto, ON M6K 3G9. 7445 Mont Circle
                  Middletown, Ohio 45042.
                </p>
              </div>
            </Col>
          </Row>
          <div className="align-center mt-44">
            <p>© 2019 Troon. All rights reserved.</p>
            <a href="">
              <img src={arrowUp} />
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
