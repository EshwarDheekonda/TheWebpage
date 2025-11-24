"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const valuePropositions = [
  "I help Organizations transform and build AI-native Software Applications that drive innovation",
  "I architect AI-native software applications that transform how organizations operate and scale",
  "I develop intelligent agents powered by LLMs that automate complex workflows and enhance decision-making",
  "I enable small, focused teams to deliver enterprise-scale results through strategic AI integration",
  "I harness foundational models and LLMs to create intelligent systems that drive measurable business value",
  "I transform legacy applications into intelligent, adaptive solutions that learn from data and user interactions",
];

export default function Hero() {
  const [currentProposition, setCurrentProposition] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const proposition = valuePropositions[currentProposition];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < proposition.length) {
      timeout = setTimeout(() => {
        setDisplayText(proposition.slice(0, displayText.length + 1));
      }, 35);
    } else if (!isDeleting && displayText.length === proposition.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(proposition.slice(0, displayText.length - 1));
      }, 22);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentProposition((prev) => (prev + 1) % valuePropositions.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentProposition]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering Organizations Through AI-Driven Transformation
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 min-h-[80px] md:min-h-[100px] max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-primary-600 dark:text-primary-400">
              {displayText}
            </span>
            <span className="animate-pulse text-primary-600 dark:text-primary-400">|</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about crafting intelligent systems that solve real-world challenges and transform complex problems into elegant AI solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button
              onClick={() => scrollToSection("experience")}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              View Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} className="text-primary-600" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

