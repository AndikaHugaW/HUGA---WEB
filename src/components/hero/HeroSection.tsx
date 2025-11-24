"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import { Vortex } from "@/components/ui/vortex";

export default function HeroSection() {
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Vortex Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Vortex
          backgroundColor="black"
          baseHue={140}
          particleCount={700}
          rangeY={200}
          baseSpeed={0.5}
          rangeSpeed={1.5}
          className="w-full h-full"
          containerClassName="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-[80vh]">
          {/* Left: Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-12 min-w-max self-end"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#00ff88] mb-4 leading-none"
              >
                50+
              </motion.div>
              <div className="text-xs md:text-sm lg:text-base text-white font-bold uppercase tracking-wider whitespace-nowrap">
                Project Done
              </div>
            </div>
            
            <div className="h-px w-24 bg-[#00ff88]/50"></div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#00ff88] mb-4 leading-none"
              >
                50+
              </motion.div>
              <div className="text-xs md:text-sm lg:text-base text-white font-bold uppercase tracking-wider whitespace-nowrap">
                Happy Clients
              </div>
            </div>
          </motion.div>

          {/* Center: Profile Image + Overlay Text */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
            {/* Profile Image - Centered and Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-10 mt-40 md:mt-48 lg:mt-56"
            >
              <div className="relative">
                <div className="w-72 md:w-96 lg:w-[500px] xl:w-[550px] aspect-square rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl shadow-[#00ff88]/40">
                  <img
                    src="/images/hero/foto-huga.jpg"
                    alt="Andika Huga Widyatama"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback ke placeholder jika gambar tidak ditemukan
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80";
                    }}
                  />
                </div>
                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-full bg-[#00ff88]/10 blur-3xl -z-10 scale-150"></div>
              </div>
            </motion.div>

            {/* Overlay Text - Precisely positioned to overlap image */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Hi I'm Huga - Above the head, overlapping top of image */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`absolute top-[5%] md:top-[7%] lg:top-[9%] pointer-events-auto cursor-pointer group ${hoveredText === "hi" ? "glitch-hover" : ""}`}
                  onMouseEnter={() => setHoveredText("hi")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <div className="relative">
                    <motion.div
                      className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] whitespace-nowrap ${
                        hoveredText === "hi" ? "font-black" : "font-medium"
                      }`}
                      style={{
                        WebkitTextStroke: "2px #00ff88",
                        WebkitTextFillColor: hoveredText === "hi" ? "#00ff88" : "transparent",
                        color: hoveredText === "hi" ? "#00ff88" : "transparent",
                        transition: "all 0.3s ease-in-out",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        letterSpacing: "0.02em",
                      }}
                    >
                      <TextReveal
                        text="Hi I'm Huga"
                        variant="glitch"
                        className=""
                        delay={0.4}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Full Stack Dev - Below Hi I'm Huga, closer spacing */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={`absolute top-[25%] md:top-[27%] lg:top-[29%] pointer-events-auto cursor-pointer group ${hoveredText === "dev" ? "glitch-hover" : ""}`}
                  onMouseEnter={() => setHoveredText("dev")}
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <div className="relative">
                    <motion.div
                      className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] whitespace-nowrap ${
                        hoveredText === "dev" ? "font-black" : "font-medium"
                      }`}
                      style={{
                        WebkitTextStroke: "2px #00ff88",
                        WebkitTextFillColor: hoveredText === "dev" ? "#00ff88" : "transparent",
                        color: hoveredText === "dev" ? "#00ff88" : "transparent",
                        transition: "all 0.3s ease-in-out",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        letterSpacing: "0.02em",
                      }}
                    >
                      <TextReveal
                        text="Full Stack Dev"
                        variant="glitch"
                        className=""
                        delay={0.6}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 space-y-8 lg:pl-4 self-end"
          >
            <div className="space-y-4">
              {/* Baris pertama */}
              <TextReveal
                text="I'M A FULL STACK DEVELOPER"
                variant="word"
                className="text-sm md:text-base font-bold text-white uppercase tracking-wide leading-tight"
                delay={0.6}
              />
              
              {/* Baris kedua */}
              <TextReveal
                text="WITH 1+ YEARS OF EXPERIENCE."
                variant="word"
                className="text-sm md:text-base font-bold text-white uppercase tracking-wide leading-tight"
                delay={0.7}
              />
              
              {/* Baris ketiga */}
              <TextReveal
                text="FOCUSED ON WEB DEVELOPMENT AND UI/UX DESIGN."
                variant="word"
                className="text-xs md:text-sm text-white font-medium leading-relaxed"
                delay={0.8}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4"
            >
              <MagneticButton
                className="px-8 py-4 bg-[#00ff88] text-black font-bold text-base rounded-lg shadow-lg shadow-[#00ff88]/50 hover:shadow-[#00ff88]/70 transition-all duration-300 flex items-center gap-3 w-full justify-center"
                magneticStrength={0.4}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Get Started</span>
                <span className="text-xl">→</span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-[#00ff88] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#00ff88] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
