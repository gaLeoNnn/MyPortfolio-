import { Col, Container, Row } from "react-bootstrap";
import "./skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../../assets/img/react.png";
import typescript from "../../assets/img/typescript.png";
import javascript from "../../assets/img/javascript.svg";
import redux from "../../assets/img/redux.svg";
import sсss from "../../assets/img/sass.png";
import bootstrap from "../../assets/img/boot1.png";
import api from "../../assets/img/api.png";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>The main stack of technologies I work with.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="typescript" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="redux" />
                  <h5>REDUX</h5>
                </div>
                <div className="item">
                  <img src={sсss} alt="scss" />
                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="sass" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={api} alt="sass" />
                  <h5>Rest API</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
        <p style={{ margin: "60px auto 60px auto", textAlign: "center" }}>
          I am eager to learn new technologies and use my experience to help my team become industry leaders. I am
          passionate about development and strive to practice and learn something new every day.
        </p>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  );
};
