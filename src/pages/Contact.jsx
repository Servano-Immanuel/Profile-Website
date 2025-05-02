import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">Get in Touch</h1>
              <p className="lead text-muted">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="contact-content py-5">
        <Container>
          <Row className="g-4">
            {/* Contact Information */}
            <Col lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-4">Contact Information</h2>
                  <div className="contact-info">
                    <div className="d-flex align-items-center mb-4">
                      <i className="bi bi-envelope-fill text-primary fs-4 me-3"></i>
                      <div>
                        <h3 className="h6 text-muted mb-1">Email</h3>
                        <a href="mailto:your.email@example.com" className="text-decoration-none">
                          immanuelserv@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                      <div>
                        <h3 className="h6 text-muted mb-1">Location</h3>
                        <p className="mb-0">Calamba City, Laguna, Philippines</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                      <div>
                        <h3 className="h6 text-muted mb-1">Phone</h3>
                        <p className="mb-0">+63 9104 179 262</p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h2 className="h4 mb-4">Follow Me</h2>
                  <div className="social-links d-flex gap-3">
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="bi bi-github fs-4"></i>
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="bi bi-linkedin fs-4"></i>
                    </a>
                    <a 
                      href="https://twitter.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="bi bi-twitter fs-4"></i>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h2 className="h4 mb-4">Send a Message</h2>
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Message subject"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Your message"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg"
                          className="w-100"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact; 