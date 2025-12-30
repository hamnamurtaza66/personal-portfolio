"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Full-Stack MERN Development",
    image: "/images/projects/pic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hamnamurtaza66/portfolio-website.git",
    previewUrl:
      "https://portfolio-website-lyptldqe2-hamnas-projects-a7b57d3a.vercel.app",
  },
  {
    id: 2,
    title: "AI Powered Blog App",
    description: "Full-Stack Blog App using MERN Stack, Google Gemini API & ImageKit",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hamnamurtaza66/QuickBlog.git",
    previewUrl: "https://www.kmblogs.com",
  },
  {
    id: 3,
    title: "DevDeck Website",
    description: "A WordPress website showcasing Marketing and IT solutions.",
    image: "/images/projects/devdeck.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://devdeck.net",
  },
  {
    id: 4,
    title: "Project Management App",
    description: "PERN Stack Project (PostgreSQL,Express,React,Node)",
    image: "/images/projects/project-management.png",
    tag: ["All", "Logo"],
    gitUrl: "https://github.com/hamnamurtaza66/project-management.git",
    previewUrl: "https://project-mgt-theta.vercel.app",
  },
  {
    id: 5,
    title: "API CRUD Operations",
    description: "RESTful API with CRUD Features",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hamnamurtaza66/pet-api.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Food Delivery",
    description: "Full-Stack MERN Development",
    image: "/images/projects/food.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Tags
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Logo"
          isSelected={tag === "Logo"}
        />
      </div> */}

      {/* Project List */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
