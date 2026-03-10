import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";

import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <Container className="py-5">
        <Row>
          <Col md={4}>
            <CardComponent
              title="Fast"
              description="Optimized performance with modern UI"
            />
          </Col>

          <Col md={4}>
            <CardComponent
              title="Responsive"
              description="Mobile-first and responsive design"
            />
          </Col>

          <Col md={4}>
            <CardComponent
              title="Scalable"
              description="Reusable components architecture"
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
