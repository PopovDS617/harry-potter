import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const Transitions = (props: Props) => {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
export default Transitions;
