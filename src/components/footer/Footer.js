import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/github.svg";
import navIcon3 from "../../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/feed/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/gaLeoNnn">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100079522472404">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Ali Zhanabekov Portfolio 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
