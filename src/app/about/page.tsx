"use client";

import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const Page = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-dark dark:to-black text-gray-900 dark:text-gray-100">
      {/* Decorative gradient blur */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative container max-w-7xl mx-auto py-20 px-4 md:px-8">
        {/* Page Title */}
        <h1 className="text-6xl font-extrabold mb-14 text-center tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
          About Me
        </h1>

        {/* Bio Section */}
        <section className="mb-24">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed font-medium">
            I’m a passionate{" "}
            <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>{" "}
            with expertise in building modern web applications and{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              AI/ML systems
            </span>
            . With a strong foundation in both frontend and backend
            technologies, I strive to create seamless user experiences and
            robust, scalable server-side solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Reusable card style */}
            {[
              {
                icon: <FaCode className="h-10 w-10 text-purple-500 mb-4" />,
                title: "Frontend",
                items: [
                  "HTML5 | CSS3",
                  "JavaScript | TypeScript",
                  "React.js | Next.js | Angular.js",
                  "Tailwind CSS | Bootstrap",
                  "JSP",
                ],
              },
              {
                icon: (
                  <FaLaptopCode className="h-10 w-10 text-indigo-500 mb-4" />
                ),
                title: "Backend",
                items: [
                  "Spring Framework | Spring Boot",
                  "Spring Cloud | Spring JPA | Spring Security",
                  "Microservices | Node.js | Express.js",
                  "PostgreSQL | MongoDB | MySQL",
                ],
              },
              {
                icon: <FaCode className="h-10 w-10 text-pink-500 mb-4" />,
                title: "Tools & Others",
                items: [
                  "Docker | Kubernetes | AWS",
                  "CI/CD Pipeline | Git | GitHub",
                  "Linux | Shell Scripting",
                  "Low-Level Design | DBMS",
                  "Networking | Operating System",
                ],
              },
              {
                icon: <FaCode className="h-10 w-10 text-yellow-500 mb-4" />,
                title: "Artificial Intelligence & Machine Learning",
                items: [
                  "Python | NumPy | Pandas",
                  "Matplotlib | Scikit-Learn",
                  "Mathematics for ML",
                ],
              },
              {
                icon: <FaCode className="h-10 w-10 text-green-500 mb-4" />,
                title: "Programming Languages",
                items: ["Python", "C | C++", "Java", "JavaScript"],
              },
              {
                icon: <FaCode className="h-10 w-10 text-orange-500 mb-4" />,
                title: "Game Libraries",
                items: [
                  "Python | Tkinter | Pygame",
                  "C | C++ | Raylib | OpenGL",
                  "Java | Swing | JavaFX | AWT",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-dark/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                {card.icon}
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {card.title}
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium leading-relaxed">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Experiences
          </h2>

          <div className="max-w-3xl mx-auto space-y-12">
            <div className="bg-white/80 dark:bg-dark/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                Full-Stack Developer — Freelancer
              </h3>
              <p className="text-indigo-500 mb-3 font-medium">
                Freelancer • 2025 - Present
              </p>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 leading-relaxed">
                <li>
                🚀 Led the design and implementation of full-stack web applications with React and Spring Boot, focusing on efficient performance and seamless, modern UI.
                </li>
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-dark/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">
                Open Source Contributions
              </h3>
              <p className="text-indigo-500 mb-3 font-medium">
                Open Source Projects
              </p>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  Contributed to multiple open-source web applications using
                  React.js and Spring Boot, improving community collaboration
                  and developer productivity.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 dark:bg-dark/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">
                Computer Science and Mathematics
              </h3>
              <p className="text-indigo-500 mb-2 font-medium">
                🚀 CS graduate passionate about building intelligent, scalable full-stack applications powered by Artificial Intelligence and Machine Learning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
