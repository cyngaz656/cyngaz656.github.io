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
        I have experienced in <b>3D modelling</b> with <i>Blender, Fusion 360, and AutoCAD</i>. 
        I have experienced in <b>video editing</b> with <i>Adobe Premiere Pro, Adobe 
        Illustrator, and Blender</i>. I am also having experienced in <b>programming</b> to develop 
        apps and website. I'm a quick learner and collaborate closely with clients 
        to create efficient, scalable, and user-friendly solutions that solve
         real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
