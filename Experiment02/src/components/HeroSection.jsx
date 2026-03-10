import { Container, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <div className="bg-light py-5 text-center">
      <Container>
        <h1 className="fw-bold">Modern Hybrid UI</h1>
        <p className="text-muted">
          Built using Bootstrap for layout and Material UI for components
        </p>
        <Button variant="primary">Explore</Button>
      </Container>
    </div>
  );
}

export default HeroSection;
