import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default function Contacts() {
  return (
    <section className="py-5 bg-light text-dark">
      <Container className="text-center">
        <h5 className="text-uppercase text-primary fw-semibold mb-3">
          Get In Touch With Me
        </h5>
        <h1 className="display-5 fw-bold mb-3">
            Contact Me
        </h1>
        <p className=" mx-auto mb-5" style={{ maxWidth: "720px" }}>
            If you have any questions, feedback, or just want to say hello, feel
            free to reach out! Whether it's about a project, collaboration, or
            anything else, I'm always open to connecting and discussing new ideas.
        </p>

        <Row className="align-items-stretch gy-4">
          {/* Map Iframe */}
          <Col lg="6">
            <div
              className="rounded-3 overflow-hidden shadow-sm"
              style={{ height: "100%", minHeight: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3082878574382!2d108.48156177356236!3d-6.732191765821906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1e284cfc5c2b%3A0xba5e38bbfe4273a7!2sPerumahan%20Griya%20Nusa%20Endah%20Pasalakan%20Sumber!5e0!3m2!1sid!2sid!4v1751097649244!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg="6">
            <div className="bg-white shadow rounded-3 p-4 p-md-5 h-100">
              <Form
                action="https://formspree.io/f/xblyqznv"
                method="POST"
              >
                <Row>
                  <Col md="6">
                    <FormGroup className="text-start">
                      <Label className="fw-medium">First Name</Label>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        required
                        className="rounded-3"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="text-start">
                      <Label className="fw-medium">Last Name</Label>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="rounded-3"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup className="text-start">
                  <Label className="fw-medium">Your Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="rounded-3"
                  />
                </FormGroup>

                <FormGroup className="text-start">
                  <Label className="fw-medium">Your Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    rows="5"
                    placeholder="Type your message here..."
                    required
                    className="rounded-3"
                  />
                </FormGroup>

                <Button
                  type="submit"
                  color="primary"
                  className="w-100 mt-3 rounded-3"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
