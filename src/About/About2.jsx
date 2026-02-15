import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import { FaUsers, FaBullseye, FaGlobe, FaHandshake, FaPhone } from "react-icons/fa";

const About2 = () => {
  return (
    <div className="bg-base-100 text-base-content py-16 px-4 md:px-20 space-y-16">
      {/* Section: Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Empowering the next generation through technology and creativity.
        </p>
      </motion.div>

      {/* Section: Our Story */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
      
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
        alt="Startup Meeting"
        className="rounded-2xl shadow-md hover:scale-105 transition duration-300"
      />
        <div>
          <h3 className="text-2xl font-bold mb-2 text-secondary">Our Journey</h3>
          <p className="text-md leading-relaxed">
            Founded in 2019 from a student dorm, we started with a small dream to make digital
            solutions accessible for everyone. Today, we’ve helped hundreds of startups, students,
            and creators grow online. I started with a simple dream — to make digital solutions accessible for everyone. Over the years,
            I’ve collaborated with startups, students, and businesses to build
            impactful digital experiences.we started with a small dream to make digital
            solutions accessible for everyone. Today, we’ve helped hundreds of startups, students,
            and creators grow online. I started with a simple dream — to make digital solutions accessible for everyone. Over the years,
            I’ve collaborated with startups, students, and businesses to build
            impactful digital experiences.
          </p>
        </div>
      </motion.div>

      {/* Section: Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10"
      >
        <div className="bg-base-200 p-6 rounded-xl shadow hover:bg-primary hover:text-white transition">
          <FaBullseye className="text-4xl mb-2 text-accent" />
          <h4 className="text-xl font-semibold mb-1">Our Mission</h4>
          <p>
            To simplify technology and provide affordable services to small businesses and learners
            globally.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow hover:bg-secondary hover:text-white transition">
          <FaGlobe className="text-4xl mb-2 text-accent" />
          <h4 className="text-xl font-semibold mb-1">Our Vision</h4>
          <p>
            To become the most trusted name in accessible tech innovation across South Asia and
            beyond.
          </p>
        </div>
      </motion.div>

      {/* Section: What We Do */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-center text-primary">What We Do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Web Development",
            "UI/UX Design",
            "SEO Optimization",
            "Student Portfolios",
            "Branding",
            "Online Marketing",
            "E-commerce Solutions",
            "Custom Web Applications",
            "AI Integration",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-base-200 p-4 rounded-xl shadow hover:bg-accent hover:text-white transition"
            >
              <p className="text-lg font-medium">{service}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section: Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-center text-secondary">Meet The Team</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { name: "Olivia Martinez", role: "Founder & Developer" },
            { name: "Nadiya", role: "UI/UX Designer" },
            { name: "Sophia Williams", role: "Marketing Lead" },
          ].map((member, i) => (
            <div
              key={i}
              className="w-60 bg-base-200 p-4 rounded-xl shadow hover:scale-105 hover:bg-primary hover:text-white transition"
            >
              <div className="avatar mb-2 flex justify-center">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                  <img src={`https://i.pravatar.cc/150?img=${i + 30}`} alt={member.name} />
                </div>
              </div>
              <h4 className="text-center font-semibold">{member.name}</h4>
              <p className="text-center text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section: Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10"
      >
        <h4 className="text-xl font-bold mb-2">Want to work with us?</h4>
        <a href="https://wa.me/8801319541875">
          <button className="btn btn-primary btn-wide">
            <FaPhone className="mr-2" />
            Contact Us
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default About2;
