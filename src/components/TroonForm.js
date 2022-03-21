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

//style
import "./troonform.css";

const TroonForm = ({
  form,
  handleChange,
  error,
  clearForm,
  handleCheckBoxes,
  interest,
  submitForm,
  showErr,
  file,
  handleFile,
  projectSpecsStatus,
  blockChainTech,
  loading,
}) => {
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
                <Form onSubmit={submitForm}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name *"
                    onChange={handleChange}
                    value={form?.name}
                    className="form-field"
                  />
                  {showErr && error.name && (
                    <Form.Control.Feedback
                      type="invalid"
                      className="invalid_form"
                    >
                      Please enter a valid name.
                    </Form.Control.Feedback>
                  )}
                  <Form.Control
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={form?.companyName}
                    className="form-field"
                  />
                  {showErr && error?.companyName && (
                    <Form.Control.Feedback
                      type="invalid"
                      className="invalid_form"
                    >
                      Please enter a valid company name.
                    </Form.Control.Feedback>
                  )}
                  <Form.Control
                    name="linkedInUrl"
                    type="text"
                    placeholder="Company LinkedIn"
                    onChange={handleChange}
                    value={form?.linkedInUrl}
                    className="form-field"
                  />
                  {showErr && error?.linkedInUrl && (
                    <Form.Control.Feedback
                      type="invalid"
                      className="invalid_form"
                    >
                      Please enter a valid linkedin url.
                    </Form.Control.Feedback>
                  )}
                  <Form.Control
                    name="websiteUrl"
                    type="text"
                    placeholder="Website"
                    onChange={handleChange}
                    value={form?.websiteUrl}
                    className="form-field"
                  />
                  {showErr && error?.websiteUrl && (
                    <Form.Control.Feedback
                      type="invalid"
                      className="invalid_form"
                    >
                      Please enter a valid website url.
                    </Form.Control.Feedback>
                  )}
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={form?.email}
                    className="form-field"
                  />
                  {showErr && error?.email && (
                    <Form.Control.Feedback
                      type="invalid"
                      className="invalid_form"
                    >
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  )}
                  <div className="mt-4">
                    <p>Interested In*</p>
                    {showErr && error?.interestErr && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="invalid_form"
                      >
                        Please select interest.
                      </Form.Control.Feedback>
                    )}
                    <div className="mt-3 checkboxes">
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="NFT Marketplace"
                          checked={interest.includes("NFT Marketplace")}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>NFT Marketplace</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Smart Contract Development"
                          checked={interest.includes(
                            "Smart Contract Development"
                          )}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>Smart Contract Development</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Bridges & Protocol Development"
                          checked={interest.includes(
                            "Bridges & Protocol Development"
                          )}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>Bridges & Protocol Development</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Decentralized App"
                          checked={interest.includes("Decentralized App")}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>Decentralized App</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="DeFi"
                          checked={interest.includes("DeFi")}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>DeFi</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Blockchain Gaming"
                          checked={interest.includes("Blockchain Gaming")}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>Blockchain Gaming</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Other"
                          checked={interest.includes("Other")}
                          onChange={(e) => handleCheckBoxes(e, "interest")}
                        />
                        <span>
                          <p>Other:</p>
                        </span>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Which Blockchain Technology are you Interested In?*</p>
                    {showErr && error?.blockChainTechErr && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="invalid_form"
                      >
                        Please select blockchain interest.
                      </Form.Control.Feedback>
                    )}
                    <div className="mt-3 checkboxes">
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Ethereum"
                          checked={blockChainTech.includes("Ethereum")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Ethereum</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Flow"
                          checked={blockChainTech.includes("Flow")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Flow</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Solana"
                          checked={blockChainTech.includes("Solana")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Solana</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Near"
                          checked={blockChainTech.includes("Near")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Near</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Avalanche"
                          checked={blockChainTech.includes("Avalanche")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Avalanche</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Binance Smart Chain"
                          checked={blockChainTech.includes(
                            "Binance Smart Chain"
                          )}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Binance Smart Chain</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="EOS"
                          checked={blockChainTech.includes("EOS")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>EOS</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Hyperledger Fabric"
                          checked={blockChainTech.includes(
                            "Hyperledger Fabric"
                          )}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Hyperledger Fabric</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Polygon"
                          checked={blockChainTech.includes("Polygon")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>Polygon</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="WAX"
                          checked={blockChainTech.includes("WAX")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
                        <span>
                          <p>WAX</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          value="Other"
                          checked={blockChainTech.includes("Other")}
                          onChange={(e) => handleCheckBoxes(e, "blockchain")}
                        />
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
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          name="projectSpecsStatus"
                          value="Yes"
                          checked={projectSpecsStatus === "Yes"}
                          onChange={(e) => handleCheckBoxes(e, "project")}
                        />
                        <span>
                          <p>Yes</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          name="projectSpecsStatus"
                          value="No"
                          checked={projectSpecsStatus === "No"}
                          onChange={(e) => handleCheckBoxes(e, "project")}
                        />
                        <span>
                          <p>No</p>
                        </span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroup.Checkbox
                          aria-label="Checkbox for following text input"
                          name="projectSpecsStatus"
                          value="other"
                          checked={projectSpecsStatus === "other"}
                          onChange={(e) => handleCheckBoxes(e, "project")}
                        />
                        <span>
                          <p>Other:</p>
                        </span>
                      </InputGroup>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Please attach specification document</p>
                    {showErr && error?.fileErr && (
                      <Form.Control.Feedback
                        type="invalid"
                        className="invalid_form"
                      >
                        Upload file.
                      </Form.Control.Feedback>
                    )}
                    <p>{file?.name}</p>
                    <div className="mt-3">
                      <input
                        ref={fileInput}
                        type="file"
                        accept="image/*"
                        multiple="false"
                        onChange={handleFile}
                        hidden
                      />
                      <div ref={fileImage} className="add-file">
                        <img src={downloadSvg} />
                        <p>Add File</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                    <Button
                      className="btn-submit"
                      type="submit"
                      disabled={loading}
                    >
                      Submit
                    </Button>
                    <Button
                      className="btn-clear"
                      type="submit"
                      onClick={clearForm}
                    >
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
