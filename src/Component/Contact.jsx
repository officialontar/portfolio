import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Contact = () => {
  const SubmitHaandel = (e) => {
    e.preventDefault(); // form refresh ঠেকাতে

    const form = e.target;

    Swal.fire({
      title: "Do you want to contact with ANISUJJAMAN ONTAR?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save Contact",
      denyButtonText: `Send `,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        // ✅ Netlify-তে ডাটা পাঠানোর জন্য (API না, normal form POST)
        const formData = new FormData(form);

        fetch("/", {
          method: "POST",
          body: formData,
        })
          .then(() => {
            Swal.fire("Your request send ", "", "success");
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

        {/* ✅ Netlify detect করার জন্য form attributes */}
        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          onSubmit={SubmitHaandel}
          className="space-y-6"
        >
          {/* ✅ Netlify form-name hidden field */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              required
              className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
              className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="textarea textarea-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff] h-32"
          ></textarea>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn bg-[#00ffff] text-[#0d0e0e] hover:bg-[#00ffff] border-none px-6 py-2 rounded-lg shadow-lg"
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
