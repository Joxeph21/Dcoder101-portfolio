import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";

function Footer() {
  return (
    <div className="w-full pt-16">
      <div className="text-center p-10 text-slate-500">
        <div className=" grid grid-cols-5 max-w-[350px] mx-auto">
          <span className="justify-center flex hover:text-sky-500">
            <FiGithub size={20} />
          </span>
          <span className="justify-center flex hover:text-sky-500">
            <FaInstagram size={20} />
          </span>
          <span className="justify-center flex hover:text-sky-500">
            <FiTwitter size={20} />
          </span>
          <span className="justify-center flex hover:text-sky-500">
            <FiLinkedin size={20} />
          </span>
          <span className="justify-center flex hover:text-sky-500">
            <TbBrandGmail size={20} />
          </span>
        </div>
        <p className="mt-5 hover:text-sky-500">
          <code>Designed & Built by Dcoder101</code>
        </p>
      </div>
    </div>
  );
}

export default Footer;
