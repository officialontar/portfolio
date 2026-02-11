import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 60 },
  { name: "Javascript", value: 85 },
  { name: "Python", value: 50 },
  { name: "React", value: 75 },
];

const professionalSkillsData = [
  { name: "Creativity", value: 90 },
  { name: "Communication", value: 65 },
  { name: "Problem Solving", value: 75 },
  { name: "Teamwork", value: 85 },
];

const MySkills = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00ffff]">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <motion.div
                  className="h-2 bg-gray-700 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ backgroundColor: "#38bdf8" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Professional Skills</h3>
          <div className="grid grid-cols-2 gap-6">
            {professionalSkillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div className="radial-progress text-cyan-400" style={{ "--value": skill.value }}>
                  {skill.value}%
                </div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MySkills;
