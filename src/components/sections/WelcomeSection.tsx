"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "bg-blue-600",
  },
  {
    name: "Email",
    url: "mailto:andika@example.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-gray-600",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "bg-gray-800",
  },
];

export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Main Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-16 text-center"
        >
          <div className="space-y-4 md:space-y-6 flex flex-col items-center justify-center w-full">
            <div className="w-full flex justify-center">
              <TextReveal
                text="WELCOME TO MY PORTFOLIO! I&apos;M"
                variant="word"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-tight flex justify-center flex-wrap"
                delay={0.3}
              />
            </div>
            <div className="w-full flex justify-center">
              <div className="flex justify-center flex-wrap">
                <TextReveal
                  text="A FULL STACK DEVELOPER &"
                  variant="word"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-tight flex justify-center flex-wrap"
                  delay={0.4}
                />
                <TextReveal
                  text=" UI/UX DESIGNER,"
                  variant="word"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00ff88] uppercase leading-tight flex justify-center flex-wrap"
                  delay={0.5}
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <TextReveal
                text="CREATING MODERN,"
                variant="word"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00ff88] uppercase leading-tight flex justify-center flex-wrap"
                delay={0.6}
              />
            </div>
            <div className="w-full flex justify-center">
              <TextReveal
                text="RESPONSIVE WEBSITES THAT"
                variant="word"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00ff88] uppercase leading-tight flex justify-center flex-wrap"
                delay={0.7}
              />
            </div>
            <div className="w-full flex justify-center">
              <TextReveal
                text="DELIVER SEAMLESS EXPERIENCES."
                variant="word"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-tight flex justify-center flex-wrap"
                delay={0.8}
              />
            </div>
          </div>
        </motion.div>

        {/* Available for Work + Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
        >
          <div className="text-lg md:text-xl text-white font-medium">
            Available for Work |
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

