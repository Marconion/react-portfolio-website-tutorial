import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    // restDelta: 1,
  });
  return (
    <>
      <motion.div style={{ scaleX }} className="progress-bar-animate"></motion.div>
      <div>
        <article className="about">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolore libero et ducimus, architecto odit voluptates veritatis officia unde
            itaque rerum fugiat sed fuga repellendus quaerat adipisci praesentium earum voluptas accusamus dolorem? Amet natus eaque alias, quo cum odio id ab,
            laudantium quibusdam vitae nostrum, maiores labore rem suscipit reiciendis!
          </p>
          <h3>Something...</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque sed veniam cumque dolor deleniti adipisci a id doloribus quasi!</p>
          <h3>More of something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae et hic, numquam, expedita itaque voluptates assumenda rerum ipsum
            impedit vel. Eligendi voluptatibus sint, inventore earum officia esse quas eum numquam omnis rem vel incidunt nisi debitis. Sunt voluptate adipisci
            quaerat, qui minima magni numquam cupiditate iste minus et obcaecati!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus porro sit dicta, excepturi ratione recusandae pariatur consectetur
            voluptates modi ut aperiam, culpa fugiat reprehenderit tempore explicabo? Non ullam maxime magnam vero et repellat esse dolore, labore ex sed ipsum
            maiores aliquam perspiciatis iure numquam tempore, fugit id officia est, cupiditate assumenda laborum quasi! Et dolore maiores eius optio eaque!
          </p>
        </article>
      </div>
    </>
  );
};

export default About;
