import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, user authentication, and secure payment processing.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/yourusername/project',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Order management system',
        'Admin dashboard'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, task assignments, and progress tracking.',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/yourusername/project',
      features: [
        'Real-time task updates',
        'Team collaboration features',
        'Task assignment and tracking',
        'Progress visualization',
        'Notification system'
      ]
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and reporting tools.',
      category: 'web',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/yourusername/project',
      features: [
        'Social media analytics',
        'Data visualization',
        'Custom reporting',
        'User engagement metrics',
        'Content performance tracking'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">My Projects</h1>
              <p className="lead text-muted">
                A collection of my work showcasing my skills and experience in web development.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Content */}
      <section className="projects-content py-5">
        <Container>
          {/* Filter Buttons */}
          <Row className="justify-content-center mb-5">
            <Col md={8} className="text-center">
              <ButtonGroup>
                <Button 
                  variant={activeFilter === 'all' ? 'primary' : 'outline-primary'}
                  onClick={() => setActiveFilter('all')}
                >
                  All Projects
                </Button>
                <Button 
                  variant={activeFilter === 'web' ? 'primary' : 'outline-primary'}
                  onClick={() => setActiveFilter('web')}
                >
                  Web Development
                </Button>
                <Button 
                  variant={activeFilter === 'mobile' ? 'primary' : 'outline-primary'}
                  onClick={() => setActiveFilter('mobile')}
                >
                  Mobile Apps
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

          {/* Projects Grid */}
          <Row className="g-4">
            {filteredProjects.map(project => (
              <Col key={project.id} lg={6}>
                <Card className="h-100 project-card shadow-sm">
                  <Card.Body>
                    <Card.Title className="h4 mb-3">{project.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {project.description}
                    </Card.Text>
                    <div className="mb-4">
                      <h5 className="h6 text-muted mb-2">Technologies Used</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-light text-dark">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="h6 text-muted mb-2">Key Features</h5>
                      <ul className="list-unstyled mb-0">
                        {project.features.map((feature, index) => (
                          <li key={index} className="mb-2">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex gap-2">
                      <Button 
                        variant="primary" 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline-primary" 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Projects; 