"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, Tailwind CSS, Bootstrap</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js & Next.js</li>
        <li>Node.js & Express.js (Basic Backend)</li>
        <li>RESTful API Integration</li>
        <li>WordPress (Website Development & Customization)</li>
      </ul>
    ),
  },
  {
    title: "Technologies I Use",
    id: "technologies",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js for Frontend Development</li>
        <li>Node.js & Express.js for Backend APIs</li>
        <li>MongoDB, MySQL & PostgreSQL (Neon)</li>
        <li>Clerk for Authentication</li>
        <li>Inngest for Background Jobs & Workflows</li>
        <li>Tailwind CSS & Bootstrap for Styling</li>
        <li>Git & GitHub for Version Control</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      <li>Web Development Bootcamp Certification (2025) – NexSkills</li>
        <li>Hands-on Experience with Real-World Projects</li>
        <li>Continuous Learning in Modern Web Technologies</li>
         <li>WordPress Development Certification (2023) – DigiSkills</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          <p className="text-base lg:text-lg">
            I am a passionate and detail-oriented Web Developer with a strong
            focus on building responsive and dynamic web applications using
            React.js. I enjoy creating clean user interfaces, integrating APIs,
            and optimizing front-end performance. I am continuously learning
            modern web technologies to deliver high-quality and scalable
            solutions.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              Technologies I Use
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
