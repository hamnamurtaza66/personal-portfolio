"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hamna 
            </span>
            <br />
            <TypeAnimation
              sequence={[
      "Mern Stack Developer", // type karega
      1200,                   // 1.2s rukega
      "",                     // delete karega
      500,                    // 0.5s pause
    
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
            Passionate Web Developer specializing in building responsive and
            dynamic web applications using React.js and modern JavaScript.
            Experienced in creating clean user interfaces, integrating REST APIs,
            and developing scalable full-stack projects using Node.js, Express,
            and PostgreSQL.
          </p>

          <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-semibold hover:opacity-90 transition"
            >
              Hire Me
            </Link>

            <Link
              href="/#projects"
              className="px-6 py-3 rounded-full border border-primary-500 text-white hover:bg-primary-500 transition"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] relative">
            <Image
              src="/images/hero-image.png" // replace with your real image
              alt="Hamna Murtaza"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
