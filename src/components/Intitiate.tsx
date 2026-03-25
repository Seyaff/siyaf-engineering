"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contactService } from "@/services/api.service";

export default function Initiate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
     
      await contactService.transmitLead(formData);

   
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error("Transmission Error:", err.message);
      setErrorMsg(err.message || "Link Failed. Retry.");
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

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm shadow-2xl flex flex-col gap-6 group hover:border-white/20 transition-colors"
          >
       
            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* Input Fields */}
            <div className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] font-sans tracking-[0.2em] text-white/40 uppercase">
                Identifier
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onClick={(e) => e.stopPropagation()}
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
                value={formData.email}
                onClick={(e) => e.stopPropagation()}
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
                placeholder="We need to decouple our monolithic architecture..."
                value={formData.message}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-black/40 border border-white/10 p-4 text-[#f4efe6] font-sans focus:outline-none focus:border-[#d4c3b3] transition-colors rounded-sm resize-none placeholder:text-white/20"
              />
            </div>

      
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="relative z-10 mt-4 w-full bg-[#f4efe6] text-black font-sans font-bold uppercase tracking-[0.2em] py-4 hover:bg-[#d4c3b3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Transmit Payload"}
              {status === "loading" && "Authenticating..."}
              {status === "success" && "Transmission Secured"}
              {status === "error" && "Link Failed. Retry."}
            </button>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-[10px] uppercase tracking-widest text-center mt-2 relative z-10"
              >
                {errorMsg}
              </motion.p>
            )}

           
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-sans tracking-[0.1em] text-center rounded-sm relative z-10"
              >
                Data received. The engineering team has been notified.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>