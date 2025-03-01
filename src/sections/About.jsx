import { LuBird } from "react-icons/lu";
import { BsGrid1X2 } from "react-icons/bs"; // maybe use this icon

const About = () => {
  return (
    <div className="container mt-48">
      <h3 className="font-semibold text-3xl drop-shadow-title">About me</h3>
      <div className="grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">
        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container group">
            <img
              src="assets/grid.svg"
              alt="grid"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div className="relative">
              <LuBird className="relative z-10 isometric text-7xl text-one" />
              <LuBird className="absolute isometric text-7xl text-gray-500/30 top-0 translate-y-[10px]"></LuBird>
            </div>
            <div>
              <p className="grid-headtext">Hi, I’m Wilson Carvajal</p>
              <p className="grid-subtext">Bring life to your web page</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 xl:row-span-2">
          <div className="grid-container group">
            {/* <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            /> */}

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container group">
            <div>
              <p className="grid-headtext">Enhancing user experience</p>
              <p className="grid-subtext">
                I&apos;m based in Rjieka, Croatia and open to remote work
                worldwide.
              </p>
              {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container group">
            {/* <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            /> */}

            <div>
              <p className="grid-headtext">Problem Solver</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container group">
            {/* <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            /> */}

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              {/* <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container group">
            {/* <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            /> */}

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              {/* <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
