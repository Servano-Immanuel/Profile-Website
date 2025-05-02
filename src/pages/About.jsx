import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">About Me</h1>
              <p className="lead text-muted">
                A passionate full-stack developer IT student with a keen eye for design and user experience.
                I believe in creating digital experiences that are both beautiful and functional.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="about-content py-5">
        <Container>
          <Row className="g-4">
            {/* Personal Info */}
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-4">Personal Information</h2>
                  <div className="mb-4">
                    <h3 className="h6 text-muted mb-2">Name</h3>
                    <p className="mb-0">Immanuel Servano</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="h6 text-muted mb-2">Location</h3>
                    <p className="mb-0">Calamba City, Laguna, Philippines</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="h6 text-muted mb-2">Email</h3>
                    <p className="mb-0">immanuelserv@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="h6 text-muted mb-2">Languages</h3>
                    <p className="mb-0">Filipino (Native), English (Intermediate)</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Skills */}
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-4">Technical Skills</h2>
                  <div className="mb-4">
                    <h3 className="h6 text-muted mb-2">Frontend Development</h3>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary">React</span>
                      <span className="badge bg-primary">JavaScript</span>
                      <span className="badge bg-primary">HTML5</span>
                      <span className="badge bg-primary">CSS3</span>
                      <span className="badge bg-primary">Bootstrap</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="h6 text-muted mb-2">Backend Development</h3>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary">Node.js</span>
                      <span className="badge bg-primary">Express</span>
                      <span className="badge bg-primary">MongoDB</span>
                      <span className="badge bg-primary">REST APIs</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="h6 text-muted mb-2">Tools & Others</h3>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary">Git</span>
                      <span className="badge bg-primary">Docker</span>
                      <span className="badge bg-primary">AWS</span>
                      <span className="badge bg-primary">Agile</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Hobbies & Interests */}
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-4">Hobbies & Interests</h2>
                  <Row className="g-4">
                    <Col sm={6}>
                      <div className="hobby-item text-center">
                        <i className="bi bi-book display-4 text-primary mb-3"></i>
                        <h3 className="h6">Reading</h3>
                        <p className="text-muted small">Tech blogs and design magazines</p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="hobby-item text-center">
                        <i className="bi bi-camera display-4 text-primary mb-3"></i>
                        <h3 className="h6">Photography</h3>
                        <p className="text-muted small">Digital art and nature photography</p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="hobby-item text-center">
                        <i className="bi bi-tree display-4 text-primary mb-3"></i>
                        <h3 className="h6">Hiking</h3>
                        <p className="text-muted small">Outdoor activities and nature</p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="hobby-item text-center">
                        <i className="bi bi-code-square display-4 text-primary mb-3"></i>
                        <h3 className="h6">Coding</h3>
                        <p className="text-muted small">Learning new technologies</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Personal Statement */}
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-4">Personal Statement</h2>
                  <p className="text-muted">
                    I am a dedicated developer who thrives on creating innovative solutions to complex problems.
                    My approach combines technical expertise with creative thinking, ensuring that every project
                    I work on is both technically sound and user-friendly.
                  </p>
                  <p className="text-muted">
                    I believe in continuous learning and staying up-to-date with the latest technologies and
                    best practices in web development. This commitment to growth allows me to deliver
                    cutting-edge solutions that meet modern web standards.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About; 