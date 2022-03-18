import { Form, Button, Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/headerImage.svg";
const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <Row className="headerRow">
            <Col md={8}>
              <div className="mask-text">
                <h1 className="d-inline-block">Bringing</h1>
                <h1 className="d-inline-block mask-text-img">IDEAS</h1>
                <h1 className="ml">To life through</h1>
                <h1>technology</h1>
              </div>
            </Col>
            <Col md={4}>
              <img className="img-fluid" src={headerImage} />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};
export default Header;
