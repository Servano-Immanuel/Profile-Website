import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  return (
    <div className="education-page">
      {/* Hero Section */}
      <section className="education-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">Education</h1>
              <p className="lead text-muted">
                My academic journey from primary to tertiary education.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Education Timeline */}
      <section className="education-timeline py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              {/* Tertiary Education */}
              <div className="timeline-item mb-5">
                <Row className="g-4">
                  <Col md={4} className="text-md-end">
                    <div className="timeline-date">
                      <h3 className="h5 text-primary mb-2">2022 - Present</h3>
                      <p className="text-muted mb-0">Bachelor's Degree (3rd Year)</p>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card className="timeline-card shadow-sm">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-mortarboard-fill text-primary fs-4 me-3"></i>
                          <h2 className="h4 mb-0">Bachelor's Degree in Information Technology</h2>
                        </div>
                        <h3 className="h6 text-primary mb-3">University of Cabuyao</h3>
                        <p className="text-muted mb-4">
                          Currently in my third year, pursuing a comprehensive study of information technology fundamentals, 
                          software development, and modern programming practices.
                        </p>
                        <div>
                          <h4 className="h6 text-muted mb-2">Key Courses</h4>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge bg-light text-dark">Web Development</span>
                            <span className="badge bg-light text-dark">Data Structures</span>
                            <span className="badge bg-light text-dark">Algorithms</span>
                            <span className="badge bg-light text-dark">Database Management</span>
                            <span className="badge bg-light text-dark">Computer Programming</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>

              {/* Secondary Education */}
              <div className="timeline-item mb-5">
                <Row className="g-4">
                  <Col md={4} className="text-md-end">
                    <div className="timeline-date">
                      <h3 className="h5 text-primary mb-2">2016 - 2022</h3>
                      <p className="text-muted mb-0">Secondary Education</p>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card className="timeline-card shadow-sm">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-book text-primary fs-4 me-3"></i>
                          <h2 className="h4 mb-0">High School Diploma</h2>
                        </div>
                        <h3 className="h6 text-primary mb-3">Camp Vicente Lim Integrated School</h3>
                        <p className="text-muted mb-4">
                          Completed secondary education with focus on mathematics and science.
                        </p>
                        <div>
                          <h4 className="h6 text-muted mb-2">Key Subjects</h4>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge bg-light text-dark">Mathematics</span>
                            <span className="badge bg-light text-dark">Physics</span>
                            <span className="badge bg-light text-dark">Computer Science</span>
                            <span className="badge bg-light text-dark">English</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>

              {/* Primary Education */}
              <div className="timeline-item">
                <Row className="g-4">
                  <Col md={4} className="text-md-end">
                    <div className="timeline-date">
                      <h3 className="h5 text-primary mb-2">2010 - 2016</h3>
                      <p className="text-muted mb-0">Primary Education</p>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card className="timeline-card shadow-sm">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-pencil text-primary fs-4 me-3"></i>
                          <h2 className="h4 mb-0">Primary School</h2>
                        </div>
                        <h3 className="h6 text-primary mb-3">Latian Elementary School</h3>
                        <p className="text-muted mb-4">
                          Completed primary education with excellent academic performance.
                        </p>
                        <div>
                          <h4 className="h6 text-muted mb-2">Key Achievements</h4>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge bg-light text-dark">Academic Excellence</span>
                            <span className="badge bg-light text-dark">Leadership</span>
                            <span className="badge bg-light text-dark">Sports</span>
                            <span className="badge bg-light text-dark">Arts</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Education; 