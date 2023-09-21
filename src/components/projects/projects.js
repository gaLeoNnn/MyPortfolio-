import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "../projectCard/ProjectCard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./projects.css";
import projImg1 from "../../assets/img/proj1.png";
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
      title: "STUFF store",
      description: "Stylish clothing store",
      imgUrl: projImg8,
      href: "https://react-store-srhndk.vercel.app/",
    },
    {
      title: "IBoard",
      description: "Acounting of employees and customers",
      imgUrl: projImg1,
      href: "https://react-dashboard-wheat.vercel.app/",
    },
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
      href: "https://marvelapp-alpha.vercel.app/",
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
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2></h2>
            <p>Welcome to my projects, enjoy😊</p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {projects.map((item, index) => {
                        return <ProjectCard key={index} {...item} />;
                      })}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="sharp2" />
    </section>
  );
};
