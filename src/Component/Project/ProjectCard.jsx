const ProjectCard = ({ title, description, projectLink }) => {
  return (
    <div className="relative group w-80 h-56 bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      
      {/* ✅ Image Layer (সবার নিচে থাকবে) */}
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500 z-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/mVMj1px2/image.j888888pg')`,
        }}
      ></div>

      {/* ✅ Overlay Layer (ছবির উপর একটু অন্ধকার) */}
      <div className="absolute inset-0  bg-opacity-90 group-hover:bg-opacity-80 transition-all duration-500 z-10"></div>

      {/* ✅ Content Layer (সবার উপরে) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#07fae6] hover:underline"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;  