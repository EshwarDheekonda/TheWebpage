"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: "1",
    title: "IBM RAG and Agentic AI Professional Certificate",
    issuer: "IBM via Coursera",
    date: "2024",
    description: "Advanced RAG techniques, multi-agent systems, and production deployment strategies for enterprise-scale AI applications.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/S5EN4XZM30EO",
    skills: [
      "Advanced RAG Architecture",
      "Multi-Agent Systems",
      "Production Deployment",
      "Enterprise AI Solutions",
    ],
  },
  {
    id: "2",
    title: "NVIDIA Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    date: "2024",
    description: "Enterprise-scale RAG architecture, vector databases, and LLM orchestration for building production-ready AI agents.",
    certificateUrl: "https://learn.nvidia.com/certificates?id=FtNJtuHlRFS8tLdCSdDjQA",
    skills: [
      "RAG Architecture",
      "Vector Databases",
      "LLM Orchestration",
      "AI Agent Development",
    ],
  },
  {
    id: "3",
    title: "NVIDIA Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    date: "2024",
    description: "Advanced prompting techniques, few-shot learning, chain-of-thought reasoning, and optimization strategies for LLM applications.",
    certificateUrl: "https://learn.nvidia.com/certificates?id=41F33S_JR7u_IIwR3pjxoA",
    skills: [
      "Prompt Engineering",
      "Few-Shot Learning",
      "Chain-of-Thought",
      "LLM Optimization",
    ],
  },
];

export default function Certifications() {
  const [openCert, setOpenCert] = useState<string | null>(null);

  const toggleCert = (id: string) => {
    setOpenCert(openCert === id ? null : id);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and specialized training in AI, LLMs, and RAG systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Certification Header - Always Visible */}
              <button
                onClick={() => toggleCert(cert.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-expanded={openCert === cert.id}
                aria-controls={`cert-content-${cert.id}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                    <Award className="text-primary-600 dark:text-primary-400" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openCert === cert.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    className="text-gray-500 dark:text-gray-400"
                    size={24}
                  />
                </motion.div>
              </button>

              {/* Dropdown Content */}
              <AnimatePresence>
                {openCert === cert.id && (
                  <motion.div
                    id={`cert-content-${cert.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                      <div className="pt-6 space-y-4">
                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Skills Covered */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Skills Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Certificate Link */}
                        <div className="pt-2">
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
                          >
                            <span>View Certificate</span>
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

