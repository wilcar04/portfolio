import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ButtonAnimatedGradient from "../components/ButtonAnimatedGradient";

const Hero = () => {
  return (
    <div className="relative py-18 w-full">
      <div className="ml-32 max-w-[28rem]">
        <h5 className="text-3xl">Hi &#128075;</h5>
        <h1 className="mt-4 text-7xl font-bold tracking-tight">
          I&apos;m Wilson Carvajal
        </h1>
        <p className="mt-7 text-t-2 text-lg font-medium">
          Frontend developer with a passion for beautiful, useful and intuitive
          user interfaces
        </p>

        <div className="flex h-[3.3rem] mt-14 ">
          <ButtonAnimatedGradient className="">
            Contact me
          </ButtonAnimatedGradient>

          <div className="flex gap-5 ml-8">
            <a
              href="https://github.com/wilcar04"
              target="_blank"
              className="h-full"
            >
              <div className="group duration-300 ease-out hover:bg-white bg-n-2 border border-stroke-2 rounded-xl h-full aspect-square flex">
                <FaGithub className="m-auto text-3xl group-hover:text-[#080808] duration-300 ease-out" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-carvajal-83974b1b0/"
              target="_blank"
              className="h-full"
            >
              <div className="group duration-300 ease-out hover:bg-white bg-n-2 border border-stroke-2 rounded-xl h-full aspect-square flex">
                <FaLinkedin className="m-auto text-3xl group-hover:text-[#007AB6] duration-300 ease-out" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/5 max-md:scale-125 top-0 md:-top-44 w-full -z-10">
        <img src="/src/assets/Hero Lights.png" alt="background lights" />
      </div>
      {/* <div className="absolute -right-1/2 max-md:scale-125 md:-right-2/5 top-0 md:-top-44 w-full -z-10">
        <img src="/src/assets/Hero Lights.png" alt="background lights" />
      </div> */}
    </div>
  );
};

export default Hero;
