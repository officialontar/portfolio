import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const FloatingInput = ({
  type,
  name,
  id,
  label,
  value,
  onChange,
  pattern,
  title,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.trim() !== "";

  return (
    <div className="relative pt-3">
      <label
        htmlFor={id}
        className={`absolute left-4 leading-none pointer-events-none transition-all duration-200 z-10 ${
          isActive
            ? "top-0 text-[13px] px-1 bg-gray-800 text-[#00ffff]"
            : "top-1/2 -translate-y-1/2 text-[16px] text-[#00ffff]"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=""
        required
        pattern={pattern}
        title={title}
        className="w-full h-14 rounded-lg bg-gray-700 text-[#00ffff] px-5 pt-5 pb-2 border border-gray-600 outline-none focus:border-[#00ffff] focus:ring-0"
      />
    </div>
  );
};

const FloatingTextarea = ({ name, id, label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.trim() !== "";

  return (
    <div className="relative pt-3">
      <label
        htmlFor={id}
        className={`absolute left-4 leading-none pointer-events-none transition-all duration-200 z-10 ${
          isActive
            ? "top-0 text-[13px] px-1 bg-gray-800 text-[#00ffff]"
            : "top-7 text-[16px] text-[#00ffff]"
        }`}
      >
        {label}
      </label>

      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=""
        required
        className="w-full h-48 rounded-lg bg-gray-700 text-[#00ffff] px-5 pt-7 pb-3 border border-gray-600 outline-none resize-none focus:border-[#00ffff] focus:ring-0"
      ></textarea>
    </div>
  );
};

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    "bot-field": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SubmitHaandel = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    Swal.fire({
      title: "Do you want to contact with ANISUJJAMAN ONTAR?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save Contact",
      denyButtonText: "Send",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        const formData = new FormData(form);

        fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
            Swal.fire("Your request send", "", "success");
            setFormValues({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
              "bot-field": "",
            });
            form.reset();
          })
          .catch(() => {
            Swal.fire("Something went wrong!", "", "error");
          });
      }
    });
  };

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-gray-900 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Contact <span className="text-[#00ffff]">Me!</span>
        </h2>

        <Marquee
          className="custom-class text-shadow-emerald-300 font-sans font-medium text-[#00ffff] pb-4"
          play={true}
          pauseOnHover={true}
          pauseOnClick={true}
          direction="left"
        >
          IF YOU FACE ANY PROBLEM!? YOU CAN HIRE ME FOR SOLVE YOUR
          PROBLEM.......
        </Marquee>

        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={SubmitHaandel}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don’t fill this out:
              <input
                name="bot-field"
                value={formValues["bot-field"]}
                onChange={handleChange}
              />
            </label>
          </p>

          <div data-netlify-recaptcha="true"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FloatingInput
              type="text"
              name="name"
              id="name"
              label="Full Name"
              value={formValues.name}
              onChange={handleChange}
            />

            <FloatingInput
              type="email"
              name="email"
              id="email"
              label="Email Address"
              value={formValues.email}
              onChange={handleChange}
            />

            <FloatingInput
              type="tel"
              name="phone"
              id="phone"
              label="Mobile Number"
              value={formValues.phone}
              onChange={handleChange}
              pattern="^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$"
              title="Enter a valid phone number like 017XXXXXXXX or +88017XXXXXXXX"
            />

            <FloatingInput
              type="text"
              name="subject"
              id="subject"
              label="Subject"
              value={formValues.subject}
              onChange={handleChange}
            />
          </div>

          <FloatingTextarea
            name="message"
            id="message"
            label="Your Message"
            value={formValues.message}
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 0 20px rgba(34,197,94,0.55), 0 0 40px rgba(34,197,94,0.35), 0 0 60px rgba(34,197,94,0.25)",
              }}
              whileTap={{ scale: 0.9 }}
              className="btn bg-[#00ffff] text-[#0d0e0e] border-none px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.55),0_0_40px_rgba(34,197,94,0.35),0_0_60px_rgba(34,197,94,0.25)]"
            >
              Submit
            </motion.button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;