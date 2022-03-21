import { useEffect, useRef } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import downloadSvg from "../assets/downloadSvg.svg";
import leftPolygon from "../assets/leftPolygon.png";
import rightPolygon from "../assets/rightPolygon.png";
const TroonForm = () => {
  const fileInput = useRef(null);
  const fileImage = useRef(null);
  useEffect(() => {
    fileImage.current.onclick = () => {
      //when button is clicked then input is also clicked.
      fileInput.current.click();
    };
  });
  return (
    <>
      <section className="form-section">
        <img className="polygonImg" src={leftPolygon} />
        <img className="polygonImgRight" src={rightPolygon} />
        <Container>
          <Row className="formRow">
            <Col md={6}>
              <div className="form-container">
                <h2>
                  Please fill out the requirement and we will get back to you.
                </h2>
                <Form>
                  <Form.Control type="text" placeholder="Name *" />
                  <Form.Control type="text" placeholder="Company Name" />
                  <Form.Control type="text" placeholder="Company LinkedIn" />
                  <Form.Control type="text" placeholder="Website" />
                  <Form.Control type="email" placeholder="Email" />
                  <div className="mt-4">
                    <p>Interested In*</p>
                    <div className="mt-3 checkboxes">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>NFT Marketplace</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Smart Contract Development</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Bridges & Protocol Development</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Decentralized App</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>DeFi</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Blockchain Gaming</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Other:</p>
                        </span>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Which Blockchain Technology are you Interested In?*</p>
                    <div className="mt-3 checkboxes">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Ethereum</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Flow</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Solana</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Near</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Avalanche</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Binance Smart Chain</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>EOS</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Hyperledger Fabric</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Polygon</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>WAX</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Other:</p>
                        </span>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Interested In*</p>
                    <div className="mt-3 checkboxes">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>NFT Marketplace</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Smart Contract Development</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Bridges & Protocol Development</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Decentralized App</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>DeFi</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Blockchain Gaming</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Other:</p>
                        </span>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Do you have a Project Specification Document?*</p>
                    <div className="mt-3 checkboxes">
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Yes</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>No</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span>
                          <p>Other:</p>
                        </span>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Please attach specification document</p>
                    <div className="mt-3">
                      <input
                        ref={fileInput}
                        type="file"
                        accept="image/*"
                        multiple="false"
                        hidden
                      />
                      <div ref={fileImage} className="add-file">
                        <img src={downloadSvg} />
                        <p>Add File</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                    <Button className="btn-submit" type="submit">
                      Submit
                    </Button>
                    <Button className="btn-clear" type="submit">
                      Clear Form
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default TroonForm;
