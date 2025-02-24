import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const ButtonAnimatedGradient = ({ children, className }) => {
  const firstColor = "#3cd5dd";
  const secondColor = "#3a0ca3";

  const primary = useMotionValue(firstColor);
  const second = useMotionValue(secondColor);
  const background = useMotionTemplate`linear-gradient(to right, ${primary}, ${second})`;

  function handleHover() {
    animate(primary, secondColor, {
      duration: 1,
      repeat: 1,
      repeatType: "reverse",
      ease: "easeOut",
    });
    animate(second, firstColor, {
      duration: 1,
      repeat: 1,
      repeatType: "reverse",
      ease: "easeOut",
    });
  }

  //   const [gradient, setGradient] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setGradient((prev) => (prev + 1) % gradients.length);
  //     }, 1000); // Change every 4 seconds

  //     return () => clearInterval(interval);
  //   });

  //   const gradients = [
  //     "linear-gradient(90deg, var(--color-one), var(--color-two))",
  //     "linear-gradient(90deg, var(--color-two), var(--color-one))",
  //   ];

  // const [scope, animate] = useAnimate();

  // function handleHover() {
  //   animate(
  //     scope.current,
  //     {
  //       background:
  //         "linear-gradient(to right, var(--color-two)}, var(--color-one))",
  //     },
  //     { duration: 1 }
  //   );
  // }

  return (
    <motion.button
      // ref={scope}
      onHoverStart={handleHover}
      style={{
        background,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimatedGradient;
