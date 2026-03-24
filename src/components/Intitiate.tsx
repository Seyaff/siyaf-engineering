"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Initiate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Bypassing Next.js API routes - talking straight to your custom Node.js microservice
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Backend unreachable:", error);
      setStatus("error");
    }
  };

  return (
    // Replace the top <section> wrapper with this:
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#1a1a1a] border-t border-white/10 z-[9999] isolate pointer-events-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: The Narrative */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-sans tracking-[0.2em] text-[#d4c3b3] uppercase mb-4 block">
              / 03 — Initiate
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#f4efe6] tracking-tighter uppercase leading-none mb-8">
              Open a<br />
              Channel.
            </h2>
            <p className="text-lg md:text-xl font-sans text-white/60 leading-relaxed max-w-md">
              Whether you need scalable backend architecture, aggressive
              database optimization, or a decoupled Next.js ecosystem. Let's
              engineer it.
            </p>
          </motion.div>
        </div>

        {/* Right Side: The Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm shadow-2xl flex flex-col gap-6 group hover:border-white/20 transition-colors"
          >
            <div
              className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
              pointer-events-none
            />

            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">
                Identifier
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onClick={(e) => e.stopPropagation()} // <-- ADD THIS
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] font-sans focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm placeholder:text-white/20"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">
                Return Address
              </label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                onClick={(e) => e.stopPropagation()} // <-- ADD THIS
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] font-sans focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm placeholder:text-white/20"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">
                Project Parameters
              </label>
              <textarea
                required
                rows={4}
                onClick={(e) => e.stopPropagation()} // <-- ADD THIS
                placeholder="We need to decouple our monolithic architecture..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] font-sans focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm resize-none placeholder:text-white/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="relative z-10 mt-4 w-full bg-[#f4efe6] text-black font-sans font-bold uppercase tracking-[0.2em] py-4 hover:bg-[#d4c3b3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-none"
            >
              {status === "idle" && "Transmit Payload"}
              {status === "loading" && "Authenticating..."}
              {status === "success" && "Transmission Secured"}
              {status === "error" && "Link Failed. Retry."}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
