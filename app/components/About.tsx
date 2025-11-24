"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Code, Brain, Rocket, Users, Presentation } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        {/* Professional Photo - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ring-4 ring-primary-100 dark:ring-primary-900">
            <Image
              src="/images/profile.jpg"
              alt="Eswar Dheekonda - AI Engineer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 288px"
            />
          </div>
        </motion.div>

        {/* Content - Full Width */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Organizations Through AI-Native Solutions
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                As an AI Engineer and Team Lead at <span className="font-semibold text-primary-600 dark:text-primary-400">University of Arkansas at Little Rock</span>, I architect production-grade AI systems that harness the power of Large Language Models and Retrieval-Augmented Generation (RAG) architectures. My work focuses on building intelligent systems that transform how organizations process information, make decisions, and scale operations.
              </p>
              <p>
                I specialize in creating multi-agent orchestration systems, hybrid retrieval pipelines combining graph and vector databases, and optimizing LLM inference strategies. Through strategic integration of LangChain, LangGraph, and foundational models, I&apos;ve architected systems that process 50,000+ documents with 94% accuracy while reducing operational costs by 55%.
              </p>
              <p>
                With a foundation in cloud engineering from Accenture, I bring a unique perspective that bridges cutting-edge AI research with production-grade system design. My approach centers on building AI-native applications from the ground up—systems where intelligence isn&apos;t an add-on, but the core architecture that enables small teams to achieve enterprise-scale impact.
              </p>
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
              <Brain className="text-primary-600 dark:text-primary-400" size={28} />
              Core Competencies
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "LangChain & LangGraph",
                "RAG Architecture",
                "OpenAI GPT-4",
                "Multi-Agent Systems",
                "Neo4j & Graph DBs",
                "Vector Databases",
                "Python & FastAPI",
                "AWS & Azure Cloud",
                "Docker & Kubernetes",
              ].map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="px-4 py-2 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <GraduationCap className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Education
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                M.S. Computer and Information Science
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                University of Arkansas at Little Rock
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                GPA: 3.5/4.0 | Dec 2025 | STEM OPT Eligible
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <MapPin className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Location
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Little Rock, AR
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                Remote & On-site Available
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <Calendar className="text-primary-600 dark:text-primary-400" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Current Role
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI Engineer - Team Lead
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                University of Arkansas at Little Rock
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Jan 2024 - Present
              </p>
            </div>
          </motion.div>
        </div>

        {/* Personal Philosophy & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Rocket className="text-primary-600 dark:text-primary-400" size={28} />
              My Approach & Philosophy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In an AI landscape where technologies evolve weekly and new frameworks emerge monthly, I&apos;ve learned that success isn&apos;t about mastering the latest tool—it&apos;s about building unshakeable fundamentals. The engineers who thrive are those who understand the underlying principles: how neural networks learn, why transformers work, what makes RAG effective, and when to use graph databases versus vector stores. These fundamentals remain constant even as the tools change.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              My approach is fundamentally multi-disciplinary. I don&apos;t see AI as a hammer where every problem looks like a nail. Instead, I start with the problem itself—understanding its domain, constraints, and success metrics. Then I evaluate: Does this need AI at all? If yes, which approach? Sometimes a well-designed rule-based system outperforms an over-engineered LLM solution. Other times, a hybrid approach combining traditional software engineering with strategic AI integration delivers the best results.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              This philosophy has shaped how I work: I learn quickly not because I chase trends, but because I can map new technologies to fundamental concepts I already understand. When LangGraph emerged, I didn&apos;t need to learn state machines from scratch—I understood the concept and could apply it immediately. When new embedding models are released, I can evaluate them against first principles of semantic search rather than treating them as black boxes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              The result? Solutions that are both innovative and pragmatic. Systems that leverage AI where it adds genuine value, integrate seamlessly with existing infrastructure, and remain maintainable as the technology landscape shifts. This isn&apos;t just about building with AI—it&apos;s about thinking like an engineer who happens to have AI as one of many powerful tools in their toolkit.
            </p>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Production AI Systems",
                description: "Architected threat intelligence system processing 50,000+ documents with 94% accuracy, serving 500+ daily users with 99.9% uptime through AI-native architecture",
              },
              {
                icon: Brain,
                title: "Cost Optimization",
                description: "Reduced LLM inference costs by 55% through strategic model routing, context caching, and prompt compression while maintaining 94% task success",
              },
              {
                icon: Rocket,
                title: "Multi-Agent Systems",
                description: "Engineered multi-agent cybersecurity system with MITRE ATT&CK framework, integrating network, endpoint, and email agents for coordinated attack detection",
              },
              {
                icon: Code,
                title: "Projects from Scratch at UALR",
                description: "Built multiple AI-native projects from the ground up during the last two years at University of Arkansas at Little Rock, demonstrating end-to-end development capabilities from architecture to deployment",
                hasImage: true,
                imagePath: "/images/dart-participation.jpg", // Placeholder - user will provide image
              },
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="mb-4">
                    <Icon className="text-primary-600 dark:text-primary-400" size={32} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                    {achievement.description}
                  </p>
                  {achievement.hasImage && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="relative w-full h-24 rounded overflow-hidden">
                        <Image
                          src={achievement.imagePath}
                          alt="DART Annual Presentation Participation"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          onError={(e) => {
                            // Hide image if not found - user will add it later
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                        DART Annual Presentations & Meetings
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Academic Participation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Academic Participation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Presentation,
                title: "DART Annual Presentations",
                description: "Actively participated in DART (Data Analytics and Research Technology) annual presentations and meetings, showcasing AI research projects and contributing to the academic community at University of Arkansas at Little Rock.",
              },
              {
                icon: Users,
                title: "Research Collaboration",
                description: "Engaged in collaborative research initiatives, presenting findings and contributing to discussions on AI-native applications, RAG systems, and multi-agent architectures within the DART research group.",
              },
            ].map((participation, index) => {
              const Icon = participation.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <Icon className="text-primary-600 dark:text-primary-400" size={32} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {participation.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {participation.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

