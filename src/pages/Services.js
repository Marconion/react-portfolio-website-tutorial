import React from "react";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "Consulting",
      imageURL: project1,
    },
    {
      id: 2,
      name: "Web App Development",
      imageURL: project2,
    },
    {
      id: 3,
      name: "Pranje nogu",
      imageURL: project1,
    },
  ];

  return (
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5 }}>
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {servicesList.map((item) => {
            return (
              <motion.div key={item.id} whileHover={{ scale: 1.1, transition: 0.5 }}>
                <Card>
                  <Card.Img variant="top" src={item.imageURL} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Services;
