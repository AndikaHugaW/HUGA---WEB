"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GridBackground } from "@/components/ui/GridBackground";

const services = [
  {
    id: 1,
    title: "Web Design",
    active: true,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    about: "Creating Visually Stunning And User-Friendly Website Designs That Combine Aesthetic Appeal With Functional Excellence. Focus On Modern Layouts, Intuitive Navigation, And Seamless User Experience.",
    tags: ["UI", "UX DESIGN", "WEB DESIGN"],
  },
  {
    id: 2,
    title: "Web Development",
    active: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    about: "Building Robust And Scalable Web Applications Using Modern Technologies. From Frontend Frameworks To Backend Architecture, Ensuring High Performance, Security, And Maintainability.",
    tags: ["FRONTEND", "BACKEND", "WEB DEVELOPMENT"],
  },
  {
    id: 3,
    title: "UI / UX",
    active: false,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    about: "Conducting Comprehensive User Research And Usability Testing To Understand User Behavior, Pain Points, And Preferences. Data-Driven Design Decisions That Enhance User Satisfaction And Engagement.",
    tags: ["RESEARCH", "UX DESIGN", "UI/UX"],
  },
  {
    id: 4,
    title: "Mobile App Design",
    active: false,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    about: "Designing Intuitive And Engaging Mobile Application Interfaces That Provide Seamless User Experiences Across Different Devices And Platforms. Focus On Modern Design Principles And User-Centered Approach.",
    tags: ["UI", "UX DESIGN", "MOBILE APP DESIGN"],
  },
  {
    id: 5,
    title: "Mobile App Development",
    active: false,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    about: "Developing Native And Cross-Platform Mobile Applications Using Modern Technologies. From iOS And Android Development To React Native And Flutter, Ensuring High Performance And User Satisfaction.",
    tags: ["IOS", "ANDROID", "MOBILE APP DEVELOPMENT"],
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    active: false,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    about: "Implementing AI Solutions That Enhance User Experiences And Automate Complex Processes. From Machine Learning Models To Natural Language Processing, Creating Intelligent Systems That Learn And Adapt.",
    tags: ["AI", "DEEP LEARNING", "ARTIFICIAL INTELLIGENCE"],
  },
  {
    id: 7,
    title: "Machine Learning",
    active: false,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    about: "Building Machine Learning Models And Algorithms That Analyze Data, Make Predictions, And Provide Insights. From Data Preprocessing To Model Deployment, Creating Solutions That Drive Business Value.",
    tags: ["ML", "DATA SCIENCE", "MACHINE LEARNING"],
  },
];

export default function WhatIDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(services.find(s => s.active) || services[0]);

  const handleServiceClick = (service: typeof services[0]) => {
    setActiveService(service);
  };

  return (
    <section ref={ref} className="relative pt-0 pb-0 px-0 bg-black overflow-hidden">
      {/* Grid Background */}
      <GridBackground 
        className="opacity-40" 
        dotColor="rgba(0, 255, 136, 0.2)"
        size={20}
      />

      <div className="relative z-10 max-w-7xl mx-auto py-32 px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gray-400 text-sm mb-8">//WHAT I DO?</div>
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className={`w-full text-left py-4 px-0 transition-all duration-300 ${
                    activeService.id === service.id
                      ? "text-white text-2xl md:text-3xl font-bold"
                      : "text-gray-500 text-xl md:text-2xl font-medium hover:text-gray-400"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Content Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Image */}
            {activeService.image && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80";
                  }}
                />
              </motion.div>
            )}

            {/* About Section */}
            {activeService.about && (
              <motion.div
                key={`about-${activeService.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-gray-400 text-sm mb-4">ABOUT</div>
                <p className="text-gray-300 leading-relaxed">{activeService.about}</p>
              </motion.div>
            )}

            {/* Tags Section */}
            {activeService.tags && (
              <motion.div
                key={`tags-${activeService.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-gray-400 text-sm mb-4">TAGS</div>
                <div className="flex flex-wrap gap-3">
                  {activeService.tags.map((tag, index) => {
                    // Highlight the tag that matches the active service title
                    const isHighlighted = tag.toUpperCase() === activeService.title.toUpperCase() || 
                                         tag.toUpperCase().includes(activeService.title.toUpperCase().replace(/\s+/g, "")) ||
                                         (activeService.title === "UI / UX" && (tag === "UI/UX" || tag === "UI" || tag === "UX DESIGN"));
                    return (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                          isHighlighted
                            ? "border-[#00ff88] text-[#00ff88]"
                            : "border-gray-600 text-gray-400"
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

