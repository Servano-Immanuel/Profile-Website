import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Hi, I'm <span className="text-primary">Elle Servano</span></h1>
              <h2 className="h3 text-muted mb-4">IT Student</h2>
              <p className="lead mb-4">
                I specialize in creating modern, responsive web applications with a focus on user experience and clean code.
                With expertise in React, Node.js, and modern web technologies, I bring ideas to life through elegant solutions.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  size="lg"
                >
                  Get in Touch
                </Button>
                <Button 
                  as={Link} 
                  to="/projects" 
                  variant="outline-primary" 
                  size="lg"
                >
                  View Projects
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="profile-image-container">
                <img 
                  src="/images/profile-placeholder.jpg" 
                  alt="Profile" 
                  className="img-fluid rounded-circle shadow-lg"
                  style={{ maxWidth: '400px', width: '100%' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="skills-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Technical Expertise</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 skill-card shadow-sm">
                <Card.Body>
                  <div className="text-center mb-4">
                    <i className="bi bi-code-square display-4 text-primary"></i>
                  </div>
                  <h3 className="h5 text-center mb-3">Frontend Development</h3>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-light text-dark">React</span>
                    <span className="badge bg-light text-dark">JavaScript</span>
                    <span className="badge bg-light text-dark">HTML5</span>
                    <span className="badge bg-light text-dark">CSS3</span>
                    <span className="badge bg-light text-dark">Bootstrap</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 skill-card shadow-sm">
                <Card.Body>
                  <div className="text-center mb-4">
                    <i className="bi bi-server display-4 text-primary"></i>
                  </div>
                  <h3 className="h5 text-center mb-3">Backend Development</h3>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-light text-dark">Node.js</span>
                    <span className="badge bg-light text-dark">Express</span>
                    <span className="badge bg-light text-dark">MongoDB</span>
                    <span className="badge bg-light text-dark">REST APIs</span>
                    <span className="badge bg-light text-dark">SQL</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 skill-card shadow-sm">
                <Card.Body>
                  <div className="text-center mb-4">
                    <i className="bi bi-tools display-4 text-primary"></i>
                  </div>
                  <h3 className="h5 text-center mb-3">Tools & Others</h3>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-light text-dark">Git</span>
                    <span className="badge bg-light text-dark">Docker</span>
                    <span className="badge bg-light text-dark">AWS</span>
                    <span className="badge bg-light text-dark">Agile</span>
                    <span className="badge bg-light text-dark">JIRA</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Featured Projects</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 project-card shadow-sm">
                <Card.Body>
                  <Card.Title className="h4 mb-3">E-Commerce Platform</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    A full-stack e-commerce solution with real-time inventory management and secure payment processing.
                  </Card.Text>
                  <div className="mb-4">
                    <h5 className="h6 text-muted mb-2">Technologies Used</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark">React</span>
                      <span className="badge bg-light text-dark">Node.js</span>
                      <span className="badge bg-light text-dark">MongoDB</span>
                      <span className="badge bg-light text-dark">Express</span>
                    </div>
                  </div>
                  <Button 
                    as={Link} 
                    to="/projects" 
                    variant="outline-primary"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 project-card shadow-sm">
                <Card.Body>
                  <Card.Title className="h4 mb-3">Task Management App</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    A collaborative project management tool with real-time updates and progress tracking.
                  </Card.Text>
                  <div className="mb-4">
                    <h5 className="h6 text-muted mb-2">Technologies Used</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark">React</span>
                      <span className="badge bg-light text-dark">Firebase</span>
                      <span className="badge bg-light text-dark">Material-UI</span>
                      <span className="badge bg-light text-dark">Redux</span>
                    </div>
                  </div>
                  <Button 
                    as={Link} 
                    to="/projects" 
                    variant="outline-primary"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 project-card shadow-sm">
                <Card.Body>
                  <Card.Title className="h4 mb-3">Social Media Dashboard</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Analytics dashboard for social media management with data visualization tools.
                  </Card.Text>
                  <div className="mb-4">
                    <h5 className="h6 text-muted mb-2">Technologies Used</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark">React</span>
                      <span className="badge bg-light text-dark">D3.js</span>
                      <span className="badge bg-light text-dark">Node.js</span>
                      <span className="badge bg-light text-dark">MongoDB</span>
                    </div>
                  </div>
                  <Button 
                    as={Link} 
                    to="/projects" 
                    variant="outline-primary"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home; 