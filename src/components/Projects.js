import { FiEye, FiGithub } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";

function Projects() {
  return (
    <div className="w-full py-12 px-5" id="projects">
      <div
        className="text-2xl text-sky-100 mb-5 grid grid-cols-[max-content_auto] items-center md:w-[50%]"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <p className="font-medium flex items-center gap-1">
          <code className="font-normal text-xl text-sky-400">
            <IoCodeSlash />
          </code>
          Projects
        </p>
        <span className="ps-[10px]">
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </span>
      </div>
      <div className="max-w-[1440px] text-white grid sm:grid-cols-2 lg:grid-cols-3 min-[1200px]:grid-cols-4 gap-8 auto-rows-[500px]">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            className="max-w-[320px] flex flex-col gap-2 mx-auto hover:shadow-lg hover:shadow-slate-950 px-2 ease-in-out transition-all duration-300"
            key={i}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-full h-[200px] p-2 shadow shadow-sky-500 flex justify-center mx-auto">
              <img
                src=""
                alt="project-img"
                className="w-full h-full object-fill"
              />
            </div>
            <h1 className=" text-sky-400 font-bold">Calculator</h1>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JAVASCRIPT", "REACT"].map((language) => (
                <span
                  className="rounded-full py-[1px] px-3 w-fit text-center text-slate-400 font-normal bg-[#0a192f] brightness-[1.50] "
                  key={language}
                >
                  {language}
                </span>
              ))}
            </div>
            <p className="text-base text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              excepturi tenetur inventore itaque vero nobis. Quaerat laudantium
            </p>
            <div className="flex gap-2 bottom-2 absolute">
              <button className="border-2 rounded-full py-1 transition ease-in-out duration-[0.3s]  px-2 border-sky-500 hover:bg-sky-500 hover:text-[#0a192f] text-sky-300 flex items-center gap-1">
                <FiEye /> Preview
              </button>
              <button className="px-3 text-sky-300 flex items-center gap-1 transition ease-in-out duration-[0.3s] hover:shadow-[0px_2px_0px_#0ea5e9]">
                Github repo <FiGithub />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
