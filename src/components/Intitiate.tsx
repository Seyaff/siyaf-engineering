"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contactService } from "@/services/api.service"; // Import the service

export default function Initiate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState(""); // Track specific validation errors

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // 🚀 THE CLEAN CALL: Separation of Concerns in action
      await contactService.transmitLead(formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
      
    } catch (err: any) {
      console.error("Transmission Error:", err.message);
      setErrorMsg(err.message); // This will show your Zod errors from the backend!
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
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

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm shadow-2xl flex flex-col gap-6 group hover:border-white/20 transition-colors"
          >
            {/* Grainy Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* Input Fields (Shortened for brevity - keep your existing styles) */}
            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">Identifier</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">Return Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">Project Parameters</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="relative z-10 mt-4 w-full bg-[#f4efe6] text-black font-sans font-bold uppercase tracking-[0.2em] py-4 hover:bg-[#d4c3b3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Transmit Payload"}
              {status === "loading" && "Authenticating..."}
              {status === "success" && "Transmission Secured"}
              {status === "error" && "Link Failed. Retry."}
            </button>

            {/* ERROR MESSAGE FEEDBACK */}
            {status === "error" && (
              <p className="text-red-400 text-[10px] uppercase tracking-widest text-center mt-2">
                {errorMsg}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}