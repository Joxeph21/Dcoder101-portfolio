import { IoCodeSlash } from "react-icons/io5";
import Profile1 from "../assets/profile1.jpeg";

function About() {
  return (
    <div className="w-full py-12 px-5 max-w-[1400px] mx-auto" id="about">
      <div
        className="text-2xl text-sky-100 mb-5 grid grid-cols-[max-content_auto] items-center md:w-[50%]"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <p className="font-medium flex items-center gap-1">
          <code className="font-normal text-xl text-sky-400">
            <IoCodeSlash />
          </code>
          About Me
        </p>
        <span className="ps-[10px]">
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </span>
      </div>
      <div className="max-w-[1440px] text-white grid md:grid-cols-2 gap-10">
        <div>
          <p
            className="font-normal text-slate-400 mb-5"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Hello! My name is Dcoder101 and i love building great stuffs for the
            web. My interest in web development dated back in 2021 when i first
            came across a friend who's also a web developer in campus, overtime
            seeing my course mate code everytime i began having interest in dev
            and soon afterwards i started with my mobile phone where i first
            learned <span className="text-sky-400">HTML & CSS</span> from
            <span className="text-sky-400"> Codeliber App.</span>
          </p>
          <p
            className="font-normal text-slate-400 mb-5"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Down till this very day i use my knowledge of various programming
            language such as
            <span className="text-sky-400">HTML5, CSS3, JAVASCRIPT</span> to
            build digital solutions and create user-ecentric digital experiences
            that seamlessly blend aesthetics and functionality.
          </p>

          <p
            className="font-normal text-slate-400 mb-5"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="text-sky-400 font-bold">TECHNOLOGIES</span> i work
            with:
          </p>

          <div
            className="grid grid-cols-2 gap-3 max-w-[300px]"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "REACT",
              "TAILWIND",
              "BOOTSTRAP",
              "ANT-DESIGN",
            ].map((language) => (
              <span
                className="rounded-full py-1 px-3 w-fit text-center text-slate-400 font-normal bg-[#0a192f] brightness-[1.50] "
                key={language}
              >
                {language}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center h-[500px] grid items-center justify-center transition-all duration-300 ease-in-out">
          <div
            className="h-[230px] w-[230px] md:h-[350px] md:w-[300px] border-2 border-sky-400 rounded relative"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="h-[230px] w-[230px] md:h-[350px] md:w-[300px] relative rounded right-[15px] bottom-[15px]">
              <img
                src={Profile1}
                alt="profile"
                className="w-[100%] absolute h-full rounded transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
