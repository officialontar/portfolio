
import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";
import { div } from "framer-motion/client";
import projectPic from '../../assets/WhatsApp Image 2025-07-06 at 3.53.43 PM.jpeg'
import prejectpic2 from '../../assets/WhatsApp Image 2025-07-06 at 3.54.31 PM.jpeg'
import prejectpic3 from '../../assets/WhatsApp Image 2025-07-06 at 3.55.44 PM.jpeg'
import prejectpic0 from '../../assets/image.png'
import { Link } from "react-router-dom";

const Projects = () => {
    const projectList = [
        {
            title: "UI/UX Design",
            description: "A modern and clean design project.",
            projectLink: "https://example.com/design",
        },
        {
            title: "Web Development",
            description: "A responsive and interactive website.",
            projectLink: "https://example.com/web",
        },
        {
            title: "Frontend Development",
            description: "Advanced frontend development techniques.",
            projectLink: "https://example.com/frontend",
        },
    ];

    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-6">
                Letest <span className="text-cyan-400">Project</span><span className="text-cyan-900">'</span>s
            </h2>

            <Marquee>

                {/* <ProjectCard></ProjectCard> */}
                <div className="container mx-auto py-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            projectLink={project.projectLink}
                        />
                    ))}
                </div>
            </Marquee>
            <Marquee
                style={{ backgroundColor: "cyan-300" }}
                className="custom-class text-shadow-emerald-300 font-sans font-medium  pb-4"
                // autoFill={true}
                play={true}
                pauseOnHover={true}
                pauseOnClick={true}
                direction="right"
            >

                <div className="flex gap-4">

                    <div className="card bg-base-100 w-80 shadow-sm">
                        <figure>
                            <img
                                class="w-full h-48 object-cover"
                                // project er pic dite hobne
                                src={projectPic}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className=" card-title text-[#00ffff]">Card Title</h2>
                            <p className="text-cyan-900">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <p className="text-cyan-900">Reting:- 5*</p>
                            <p className="text-gray-900">Fontend language = <span className="text-red-900"> <i>HTML-TAILWIND - DAISYUI</i> </span></p>
                            <p className="text-gray-900"> Backend language= <span className="text-red-900"> <i>React-Python-Node.js,Firebase</i> </span> </p>

                            <div className="card-actions justify-end">
                                <a
                                    href="https://hamza5028.github.io/Responsive-website/ "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-outline hover:shadow-lg shadow-cyan-900  text-cyan-400 hover:bg-neutral-900 
                                bg-neutral-700
                                hover:text-cyan-200 ">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 shadow-sm">
                        <figure>
                            <img
                                class="w-full h-48 object-cover"
                                // project er pic dite hobne
                                src={prejectpic2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className=" card-title text-[#00ffff]">Card Title</h2>
                            <p className="text-cyan-900">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <p className="text-cyan-900">Reting:- 5*</p>
                            <p className="text-gray-900">Fontend language = <span className="text-red-900"> <i>HTML-TAILWIND - DAISYUI</i> </span></p>
                            <p className="text-gray-900"> Backend language= <span className="text-red-900"> <i>React-Python-Node.js,Firebase</i> </span> </p>

                            <div className="card-actions justify-end">
                                <a
                                    href="https://hamza5028.github.io/Assingment-3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-outline hover:shadow-lg shadow-cyan-900  text-cyan-400 hover:bg-neutral-900 
                                bg-neutral-700
                                hover:text-cyan-200 ">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 shadow-sm">
                        <figure>
                            <img
                                class="w-full h-48 object-cover"
                                // project er pic dite hobne
                                src={prejectpic3}
                                alt="project" />
                        </figure>
                        <div className="card-body">
                            <h2 className=" card-title text-[#00ffff]">Card Title</h2>
                            <p className="text-cyan-900">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <p className="text-cyan-900">Reting:- 5*</p>
                            <p className="text-gray-900">Fontend language = <span className="text-red-900"> <i>HTML-TAILWIND - DAISYUI</i> </span></p>
                            <p className="text-gray-900"> Backend language= <span className="text-red-900"> <i>React-Python-Node.js,Firebase</i> </span> </p>

                            <div className="card-actions justify-end">
                                <a
                                    href=" https://hamza5028.github.io/New-year-project/ "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-outline hover:shadow-lg shadow-cyan-900  text-cyan-400 hover:bg-neutral-900 
                                bg-neutral-700
                                hover:text-cyan-200 ">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-80 shadow-sm">
                        <figure>
                            <img
                                class="w-full h-48 object-cover"
                                // project er pic dite hobne
                                src={prejectpic0}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className=" card-title text-[#00ffff]">Card Title</h2>
                            <p className="text-cyan-900">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <p className="text-cyan-900">Reting:- 5*</p>
                            <p className="text-gray-900">Fontend language = <span className="text-red-900"> <i>HTML-TAILWIND - DAISYUI</i> </span></p>
                            <p className="text-gray-900"> Backend language=<span className="text-red-900"> <i>React-Python-Node.js,Firebase</i> </span> </p>

                            <div className="card-actions justify-end">
                                <a
                                    href=" https://hamza-boss-top10.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  
                                    className="btn btn-primary btn-outline hover:shadow-lg shadow-cyan-900  text-cyan-400 hover:bg-neutral-900 
                                bg-neutral-700
                                hover:text-cyan-200 ">View Project</a>
                            </div>
                        </div>
                    </div>

                </div>
            </Marquee>
        </div>


    );
};

export default Projects;
