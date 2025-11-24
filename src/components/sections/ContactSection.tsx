"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Email",
    url: "mailto:andika@example.com",
    icon: "M24 5.457v13.909c0 .904-.732 1.636 1.636 1.636h23.818c.904 0 1.636-.732 1.636-1.636V5.457c0-.904-.732-1.636-1.636-1.636H1.636C.732 3.821 0 4.553 0 5.457zM13.909 11.181L2.727 6.545v9.818l11.182-5.182zm1.636 1.636L26.727 16.364V6.545l-11.182 5.272zM1.636 3.821h23.818c.904 0 1.636.732 1.636 1.636v-.545H0v.545c0-.904.732-1.636 1.636-1.636z",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Pesan berhasil dikirim! Terima kasih.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <TextReveal
            text="Hubungi Saya"
            variant="glitch"
            className="text-5xl md:text-7xl font-bold text-black mb-4"
            delay={0.2}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 w-32 bg-[#00ff88] rounded-full mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-black text-lg mt-6 max-w-2xl mx-auto"
          >
            Tertarik untuk berkolaborasi? Mari kita diskusikan project Anda!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Mari Berkolaborasi</h3>
              <p className="text-black leading-relaxed mb-8">
                Saya selalu terbuka untuk diskusi tentang project baru, kolaborasi, atau sekadar
                ngobrol tentang teknologi dan design. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00ff88] flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Email</p>
                  <a href="mailto:andika@example.com" className="text-[#00ff88] hover:text-[#00cc6a] transition-colors">
                    andika@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 rounded-full bg-[#00ff88]/20 border border-[#00ff88]/30 flex items-center justify-center hover:border-[#00ff88]/60 hover:bg-[#00ff88]/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-[#00ff88]" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#00ff88]/30 rounded-lg text-black focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all duration-300"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#00ff88]/30 rounded-lg text-black focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-black mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-[#00ff88]/30 rounded-lg text-black focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 transition-all duration-300 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#00ff88] text-black font-semibold rounded-lg shadow-lg shadow-[#00ff88]/50 hover:shadow-[#00ff88]/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                magneticStrength={0.3}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

