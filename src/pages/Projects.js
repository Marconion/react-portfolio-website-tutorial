import React from "react";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      name: "Creating web sites",
      imageURL: project1,
    },
    {
      id: 2,
      name: "Glide Utilities",
      imageURL: project2,
    },
    {
      id: 3,
      name: "Norton High Street Product",
      imageURL: project1,
    },
    {
      id: 4,
      name: "Gift and Voucher Today",
      imageURL: project2,
    },
    {
      id: 5,
      name: "Producktkart Studio",
      imageURL: project1,
    },
    {
      id: 1,
      name: "Library Management",
      imageURL: project2,
    },
  ];

  return (
    <motion.div className="projects" animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} exit={{ opacity: 0, transition: 0.5, transitionDelay: 1 }}>
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
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
    </motion.div>
  );
};

export default Projects;
