import { Button } from "bootstrap";
import React from "react";
import { Form, FormControl, FormGroup, FormLabel, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (event) => {};

  return (
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.2 }} exit={{ scale: 0 }} className="contact">
      <h2>Contact</h2>
      <Row className="contact-container">
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl required type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom02">
                <FormLabel>E-mail</FormLabel>
                <FormControl required type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom03">
                <FormLabel>Message</FormLabel>
                <FormControl required as="textarea" placeholder="Message" />
              </FormGroup>
              <newButton type="submit" className="btn btn-primary">
                Submit Form
              </newButton>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>If you want me to help you bulding website solution email me at rerwre@trent.mot</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam corporis quibusdam similique! Consequuntur nihil iusto
              consequatur quibusdam architecto officiis molestias sed pariatur at, veniam nulla alias incidunt beatae sit distinctio voluptatem odit accusamus
              vero quos nesciunt blanditiis ducimus omnis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis natus inventore! Magnam minima accusamus id quaerat amet nisi eos. Tempora
              suscipit excepturi laborum minus.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="">Youtube</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">Instagram</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">LinkedIn</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">Twitter</a>
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
