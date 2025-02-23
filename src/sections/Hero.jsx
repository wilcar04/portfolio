import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex">
      <div className="flex-1 my-14 mx-20 max-w-[24rem]">
        <h5 className="text-2xl">Hi &#128075;</h5>
        <h1 className="mt-4 text-6xl font-bold tracking-tight">
          I&apos;m Wilson Carvajal
        </h1>
        <p className="mt-5 text-t-2">
          Frontend developer with a passion for beautiful, useful and intuitive
          user interfaces
        </p>

        <div className="flex h-[3rem] mt-14 ">
          <button className="bg-linear-to-r from-one to-two rounded-2xl p-0.5">
            <div className="bg-n-3 h-full rounded-2xl flex items-center px-4">
              Contact me
            </div>
          </button>

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
    </div>
  );
};

export default Hero;
