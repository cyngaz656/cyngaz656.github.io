import { motion } from "framer-motion";

import { styles } from "../styles";
import { LogoCanvas } from "./canvas";

const Tech = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            My Skills.
          </h2>
        </div>
      </div>

      <LogoCanvas />
    </section>
  );
};

export default Tech;
