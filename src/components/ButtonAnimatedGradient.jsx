import { motion, useTime, useTransform } from "framer-motion";

const ButtonAnimatedGradient = ({ children, className }) => {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #3cd5dd, #3a0ca3, #3cd5dd)`;
  });

  return (
    <div className="group h-full relative">
      <motion.div
        className="absolute -inset-[1px] rounded-xl -z-10"
        style={{ background: rotatingBg }}
      />
      <button className="bg-n-3 h-full rounded-xl flex items-center px-6 ">
        {children}
      </button>

      <div className="group-hover:scale-125 duration-300 ease-out absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 h-34 w-34 flex">
        <img
          src="/src/assets/Ellipse Button.png"
          alt="Ellipse"
          className="object-contain m-auto"
        />
      </div>
    </div>
  );
};

export default ButtonAnimatedGradient;
