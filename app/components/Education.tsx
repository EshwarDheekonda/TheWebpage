"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Education as EducationType } from "@/types";
import { formatDate } from "@/lib/utils";

const education: EducationType[] = [
  {
    degree: "Master of Science in Computer and Information Science",
    institution: "University of Arkansas at Little Rock",
    location: "Little Rock, AR",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    description: "Specialization in Artificial Intelligence, focusing on Large Language Models, RAG architectures, and AI-native application development",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
    achievements: [
      "GPA: 3.5/4.0",
      "Eligible for 3-year STEM OPT",
      "Graduating December 2025",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "JNTU Kakinada | University College of Engineering",
    location: "Kakinada, India",
    startDate: "2017-06-01",
    endDate: "2021-07-31",
    description: "Foundation in computer science principles, software development, and data structures",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
    ],
    achievements: [
      "GPA: 8.0/10.0",
    ],
  },
];

export default function Education() {
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
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {edu.description}
                </p>
              )}

              {edu.coursework && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Award size={20} className="text-primary-600 dark:text-primary-400" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.achievements && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

