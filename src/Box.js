import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StyledBox } from "./Styles";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 300 }
};

const Box = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <StyledBox
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={BoxVariants}
    />
  );
};

export default Box;