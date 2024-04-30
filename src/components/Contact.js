import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { useFormik } from "formik";
import { sendEmailSchema } from "../schemas";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const onSubmit = async (values, actions) => {
    emailjs
      .sendForm("service_b10rbsh", "template_w2q0er6", form.current, {
        publicKey: "BeNYm_NwFCQMRn09m",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    errors,
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: sendEmailSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="w-full py-12 px-5 max-w-[1400px] mx-auto" id="contact">
      <div
        className="text-2xl text-sky-100 mb-5 grid grid-cols-[max-content_auto] items-center md:w-[50%]"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <p className="font-medium flex items-center gap-1">
          <code className="font-normal text-xl text-sky-400">
            <IoCodeSlash />
          </code>
          Contact me.
        </p>
        <span className="ps-[10px]">
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </span>
      </div>
      <div
        className="md:w-[90%] text-white grid md:grid-cols-2 gap-10 md:shadow-2xl mx-auto md:bg-[#0a192f]  brightness-[1.30] md:p-10"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <div className="flex flex-col gap-7 mx-auto md:mx-0 max-w-[500px]">
          <h1
            className="text-xl sm:text-2xl"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Have an awesome project idea? <br />
            <span className="text-sky-400">Let's Discuss.</span>
          </h1>

          <div
            className="flex flex-col gap-7"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 rounded-full p-2 text-black">
                <FaPhoneAlt size={20} />
              </span>
              <p className="text-blue-100">+234 816 573 9126</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-blue-100 rounded-full p-2 text-black">
              <a href="mailto:dcoder495@gmail.com">
                <BiLogoGmail size={20} />
                </a>
              </span>
              <p className="text-blue-100">dcoder495@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-blue-100 rounded-full p-2 text-black">
                <FaMapMarkerAlt size={20} />
              </span>
              <p className="text-blue-100">Lagos, Nigeria.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-[500px] mx-auto md:mx-0">
            <form
              ref={form}
              onSubmit={handleSubmit}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="flex flex-col gap-1 text-slate-300">
                <label htmlFor="name" className="text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`outline-0 rounded-lg bg-[#0a192f] border brightness-[1.30] p-3 text-sm placeholder-slate-400 text-slate-300 focus:border-sky-700 focus:border-2 ${
                    errors.name && touched.name
                      ? "border-red-500 text-red-500"
                      : "border-slate-500"
                  }`}
                />
                <div className="h-3 mb-[5px] text-xs text-red-500">
                  <p>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-slate-300">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter email"
                  className={`outline-0 rounded-md bg-[#0a192f] border brightness-[1.30] p-3 text-sm placeholder-slate-400 text-slate-300 focus:border-sky-700 focus:border-2 ${
                    errors.email && touched.email
                      ? "border-red-500 text-red-500"
                      : "border-slate-500"
                  }`}
                />
                <div className="h-3 mb-[5px] text-xs text-red-500">
                  <p>
                    {errors.email && touched.email && (
                      <span>{errors.email}</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-slate-300">
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={301}
                  placeholder="Write a message..."
                  className={`h-32 resize-none outline-0 rounded-md bg-[#0a192f] border brightness-[1.30] p-3 text-sm placeholder-slate-400 text-slate-300 focus:border-sky-700 focus:border-2 ${
                    errors.message && touched.message
                      ? "border-red-500 text-red-500"
                      : "border-slate-500"
                  }`}
                />
              </div>
              <div className="h-3 mb-[5px] text-xs text-red-500">
                <p>
                  {errors.message && touched.message && (
                    <span>{errors.message}</span>
                  )}
                </p>
              </div>
              <button
                className={`bg-sky-700 hover:bg-sky-900 rounded-lg p-2 mt-5 flex items-center gap-1 ${
                  isSubmitting && "opacity-50"
                }`}
                disabled={isSubmitting}
                type="submit"
              >
                {!isSubmitting ? (
                  <>
                    Send message <MdOutlineMessage />
                  </>
                ) : (
                  "Sending..."
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
