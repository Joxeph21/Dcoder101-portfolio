import { ReactTyped } from "react-typed";
import { PiGithubLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

function Intro() {
  return (
    <div className="text-white" id="intro">
      <div className="max-w-[600px] flex flex-col justify-center font-bold gap-2 px-5 text-center mx-auto h-screen mt-[-100px]">
        <p
          className="text-sky-400 text-xl"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          <code>Hi,</code>
        </p>
        <h1
          className="text-4xl text-blue-100"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          I'm <ReactTyped strings={["Dcoder101."]} typeSpeed={100} loop />
        </h1>
        <h1
          className="text-sky-400 text-4xl md:text-4xl"
          data-aos="fade-in"
          data-aos-delay="700"
        >
          Frontend Developer.
        </h1>
        <p
          className="font-medium text-blue-100 text-lg"
          data-aos="fade-in"
          data-aos-delay="750"
        >
          I specialize in creating scalable, fast and mobile first Applications
          with nice and exceptional digital{" "}
          <span className="text-sky-400">Experiences.</span>
        </p>

        <div
          className="flex text-black gap-5 mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <span className="bg-blue-100 rounded-full p-2">
            <a href="https://github.com/D-coder101">
              <PiGithubLogoFill size={20} />
            </a>
          </span>
          <span className="bg-blue-100 rounded-full p-2">
            <a href="mailto:dcoder495@gmail.com">
              <BiLogoGmail size={20} />
            </a>
          </span>
          <span className="bg-blue-100 rounded-full p-2">
            <a href="https://www.linkedin.com/in/favour-bello-831784281/">
              <BiLogoLinkedin size={20} />
            </a>
          </span>
          <span className="bg-blue-100 rounded-full p-2">
            <a href="https://twitter.com/favour31249">
            <BiLogoTwitter size={20} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
