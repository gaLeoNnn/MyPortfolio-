import "./contact.css";
import { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import { Row, Col, Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Contact = () => {
  const formInitialDetalis = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetalis);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (categoty, value) => {
    setFormDetails(prev => {
      return { ...prev, [categoty]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setButtonText("Sending...");

    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetalis);

    if (result.code === 200) {
      setStatus({ success: true, message: "Message send successufully" });
    } else {
      setStatus({ success: false, message: "Something went wrong, please try again later." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={contactImg} alt="Contact" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    name="firstName"
                    onChange={e => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={e => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    name="email"
                    onChange={e => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    name="phone"
                    onChange={e => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <textarea
                  rows={6}
                  value={formDetails.message}
                  placeholder="Message"
                  name="message"
                  onChange={e => setFormDetails("message", e.target.value)}
                />
                <button type="submit">
                  <span>{buttonText}</span>{" "}
                </button>

                {status.message && (
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
