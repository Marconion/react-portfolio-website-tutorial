import React from "react";
import { motion } from "framer-motion";
import Clock from "../components/Clock";

const Home = () => {
  return (
    <div className="home">
      <motion.div className="name" initial={{ x: -300, scale: 0.5, opacity: 0 }} animate={{ x: 0, scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
        <font>Marko</font> Zujovic
      </motion.div>
      <motion.div
        className="desc"
        initial={{ x: 300, y: 200, scale: 0.5, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}>
        Lorem ipsum <font> dolor sit amet </font>consectetur adipisicing elit. <font> Amet, dicta.</font>
      </motion.div>
      <Clock />
    </div>
  );
};

export default Home;
