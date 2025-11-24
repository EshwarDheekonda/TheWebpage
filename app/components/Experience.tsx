"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Experience as ExperienceType } from "@/types";
import { formatDate } from "@/lib/utils";

const experiences: ExperienceType[] = [
  {
    id: "1",
    title: "AI Engineer - Team Lead",
    company: "University of Arkansas at Little Rock | DART Arkansas",
    location: "Little Rock, AR",
    startDate: "2024-01-01", // January 2024
    endDate: "present", // Present
    description: [
      "Architected production threat intelligence system prototype using LangChain and RAG architecture, processing 50,000+ security documents with 94% accuracy for security teams across for a Banking Client",
      "Engineered hybrid retrieval system combining Neo4j graph database and semantic vector search with sentence transformers, achieving superior technique matching through weighted fusion of graph precision and vector recall",
      "Deployed multi-agent cybersecurity system integrating network, endpoint, and email agents with MITRE ATT&CK framework, utilizing cross-agent correlation to identify coordinated attacks",
      "Optimized LLM inference costs by 55% through strategic model routing (GPT-4/GPT-3.5), context caching, and prompt compression while maintaining 94% task success rate",
      "Developed production ML pipelines with React and Python microservices on AWS Lambda/EKS, serving 500+ daily users with 99.9% uptime and sub-400ms p95 latency",
      "Implemented observability stack with Prometheus and Grafana, reducing MTTR by 65% and achieving sub-second retrieval through query optimization",
      "Built AI-powered PII detection API with FastAPI and OpenAI GPT-4, extracting 25+ personal information categories with 95%+ success rate using intelligent multi-layered scraping architecture",
    ],
    technologies: ["LangChain", "LangGraph", "RAG", "Neo4j", "OpenAI GPT-4", "FastAPI", "React", "Python", "AWS Lambda", "EKS", "Prometheus", "Grafana"],
  },
  {
    id: "2",
    title: "Application Development Analyst",
    company: "Accenture | Avanade Team",
    location: "Hyderabad, India",
    startDate: "2022-12-01", // December 2022
    endDate: "2023-12-31", // December 2023
    description: [
      "Led Azure cloud migration for 15+ applications using Terraform and Ansible, reducing provisioning time by 70% and maintaining 99.5% uptime",
      "Engineered Python and Node.js microservices handling 10,000+ daily requests with Redis caching and async processing, improving response times 5x to sub-100ms",
      "Managed AKS containerized deployments with auto-scaling and load balancing, achieving zero-downtime production releases",
      "Implemented Azure Monitor and Datadog dashboards providing real-time system health and performance insights",
    ],
    technologies: ["Azure", "Terraform", "Ansible", "Python", "Node.js", "Redis", "AKS", "Docker", "Kubernetes", "Azure Monitor", "Datadog"],
  },
  {
    id: "3",
    title: "Application Development Associate",
    company: "Accenture | Healthcare Client",
    location: "Hyderabad, India",
    startDate: "2021-10-01", // October 2021
    endDate: "2022-12-31", // December 2022
    description: [
      "Migrated 20+ healthcare applications to Azure cloud, managing 30+ Linux servers with automated CI/CD pipelines reducing deployment time 75%",
      "Developed Flask and Express.js RESTful APIs serving 5,000+ daily requests with sub-100ms response through query optimization and caching",
      "Automated infrastructure provisioning with Python/Bash scripts, eliminating manual errors across dev/staging/production environments",
      "Optimized PostgreSQL schemas with indexing and query tuning, improving search operations from 2s to 400ms average latency",
    ],
    technologies: ["Azure", "Flask", "Express.js", "Python", "Bash", "PostgreSQL", "Linux", "CI/CD", "Docker"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experience building AI-native solutions and cloud-based applications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10"></div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 pl-16 md:pl-0" : "md:pl-12 pl-16 md:pr-0"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>
                          {formatDate(experience.startDate)} - {experience.endDate === "present" ? "Present" : formatDate(experience.endDate)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

