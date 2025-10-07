"use client";

import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/contents/project";

const Projects = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        My Projects
      </h1>
      <p className="text-lg text-secondary mb-24 text-center max-w-2xl mx-auto">
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative bg-white dark:bg-dark/40 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl pointer-events-none"></div>

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <Image
                src={project.Image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Animated tech badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech:string, idx:number) => (
                  <span
                    key={idx}
                    className="px-4 py-1 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 text-white rounded-full text-sm font-semibold transition-transform transform hover:scale-110 hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-all font-medium"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </Link>
                )}

                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-all font-medium"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Animated gradient borders */}
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
