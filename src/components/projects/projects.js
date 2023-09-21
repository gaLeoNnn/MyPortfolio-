import { Col, Container, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ProjectCard } from "../projectCard/ProjectCard";
import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import "./projects.css";

import projImg2 from "../../assets/img/proj2.png";
import projImg3 from "../../assets/img/proj3.png";
import projImg4 from "../../assets/img/proj4.png";
import projImg5 from "../../assets/img/proj5.png";
import projImg6 from "../../assets/img/proj6.png";
import projImg7 from "../../assets/img/proj7.png";
import projImg8 from "../../assets/img/proj8.png";

import colorSharp2 from "../../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Beauty-starter",
      description: "Online customer recording, sorting by time and canceling appointments",
      imgUrl: projImg8,
      href: "https://beauty-starter.vercel.app/",
    },
    ,
    {
      title: "PIZZA TIME",
      description: "Pizza purchase app",
      imgUrl: projImg2,
      href: "https://pizza-time-sage.vercel.app/",
    },
    {
      title: "MarvelApp",
      description: "An app for Marvel comics fans",
      imgUrl: projImg3,
      href: "https://galeonnn.github.io/MarvelMovies/",
    },
  ];
  const projects2 = [
    {
      title: "RunSmart",
      description: "landing page for a heart rate monitor store",
      imgUrl: projImg4,
      href: "https://nimble-faun-23c936.netlify.app/",
    },
    {
      title: "FoodProject",
      description: "Balanced nutrition website",
      imgUrl: projImg5,
      href: "https://foodproject-rust.vercel.app/",
    },
    {
      title: "Uber Taxi",
      description: "Website for uber candidates",
      imgUrl: projImg6,
      href: "https://papaya-pudding-a12db3.netlify.app/",
    },
    {
      title: "Irvas",
      description: "Project for my clients from the glazing industry",
      imgUrl: projImg7,
      href: "https://loquacious-meerkat-d3cef7.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2></h2>
            <p>Welcome to my projects, enjoy😊</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Row>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="tab-content">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((item, index) => {
                        return <ProjectCard key={index} {...item} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="sharp2" />
    </section>
  );
};
