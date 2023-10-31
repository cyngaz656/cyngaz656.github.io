import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have explored many interests during the 4 years of my university life.
        I'm a skilled 3D modeller with experience in Blender, Fusion 360 and AutoCAD.
        I'm also a skilled video editor with expericence in Adobe premiere pro, Adobe
        Illustrator, and Blender. Because of my major, I have also with experience in 
        programming language such as C++, Python, VBA, and Java. I'm a quick learner 
        and collaborate clsely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to 
        bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
