import React from "react";
import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting visually appealing and user-friendly designs for your applications.",
    icon: "🎨",
  },
  {
    title: "Website Development",
    description: "Building responsive and dynamic websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "Frontend Development",
    description: "Creating interactive and seamless user experiences using modern technologies.",
    icon: "💻",
  },
  {
    title: "Hacking",
    description: "Providing ethical hacking services to secure your digital assets.",
    icon: "🔐",
  },
  {
    title: "SEO Optimization",
    description: "Optimizing your website to rank higher in search engines.",
    icon: "📈",
  },
  {
    title: "Graphic Design",
    description: "Designing stunning graphics for your brand and projects.",
    icon: "🖌️",
  },
];

const Services = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#2d3532] rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.6 }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#00ffff]">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
