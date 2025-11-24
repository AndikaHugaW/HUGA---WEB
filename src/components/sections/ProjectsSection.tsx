"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { GridBackground } from "@/components/ui/GridBackground";

const projects = [
  {
    id: 1,
    title: "Revive Website",
    description: "Platform kesehatan modern yang memudahkan pasien untuk konsultasi online, booking jadwal dokter, dan akses informasi medis terpercaya.",
    tags: ["Next.js", "Supabase", "Figma"],
    image: "/images/projects/revive-web.png",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Revive AI",
    description: "Collaborated on a Webflow site with reusable components. With allowing to expand it over time to represent their brand.",
    tags: ["API Integration", "Next.js", "Scikit-learn"],
    image: "/images/projects/revive-dasboard.png",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    title: "No Code Webflow Development",
    description: "Revamping outdated layouts into modern, responsive websites that improve usability and engagement.",
    tags: ["Wireframing", "Brand Strategy", "CMS Setup"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Branding Logo Design",
    description: "Crafting unique brand identities that reflect values, connect with audiences, and stand out.",
    tags: ["UX/UI Design", "Mobile Optimization", "Usability Testing"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "Building a modern e-commerce platform with seamless shopping experience and secure payment integration.",
    tags: ["Full Stack", "Payment Gateway", "Database Design"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Mobile App UI Design",
    description: "Designing intuitive mobile interfaces with focus on user experience and modern design principles.",
    tags: ["Mobile Design", "Prototyping", "User Research"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "#",
    featured: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative pt-0 pb-32 px-0 bg-black overflow-hidden">
      {/* Grid Background */}
      <GridBackground 
        className="opacity-40" 
        dotColor="rgba(0, 255, 136, 0.2)"
        size={20}
      />
      <div className="max-w-7xl mx-auto pt-16 pb-32 px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Title */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="text-[#00ff88] text-4xl font-bold"
                >
                  *
                </motion.div>
                <TextReveal
                  text="MY PROJECTS"
                  variant="word"
                  className="text-sm md:text-base font-bold text-white uppercase tracking-wider"
                  delay={0.3}
                />
              </div>
              <div className="space-y-1">
                <TextReveal
                  text="Transforming ideas"
                  variant="word"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-white leading-tight block"
                  delay={0.4}
                />
                <TextReveal
                  text="into memorable brand"
                  variant="word"
                  className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight block"
                  delay={0.5}
                />
                <TextReveal
                  text="journeys."
                  variant="word"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-white leading-tight block"
                  delay={0.6}
                />
              </div>
            </div>

            {/* Right: Description and Button */}
            <div className="flex flex-col justify-start h-full">
              <TextReveal
                text="We turn ideas into memorable brand journeys, crafting unique brand identities that reflect values, connect with audiences, and stand out."
                variant="word"
                className="text-base md:text-lg text-white/80 leading-relaxed mb-8"
                delay={0.5}
              />
              <MagneticButton
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-medium rounded-lg hover:bg-[#00cc6a] transition-colors w-fit"
                magneticStrength={0.3}
              >
                <span>All Projects</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              {/* Image Area */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Navigation Button - Top Right */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 transition-all ${
                    project.featured
                      ? "bg-[#00ff88] hover:bg-[#00cc6a]"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke={project.featured ? "black" : "black"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Content - No Background */}
              <div className="mt-4">
                {/* Tags - Above Title */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-[#00ff88]/20 backdrop-blur-sm text-[#00ff88] text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${
                    project.featured ? "text-[#00ff88]" : "text-white"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
