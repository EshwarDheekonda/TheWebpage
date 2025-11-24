"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Filter } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";

const projects: Project[] = [
  {
    id: "1",
    title: "Deep Learning Image Classifier",
    description: "A convolutional neural network for image classification using TensorFlow and Keras.",
    longDescription: "Built a CNN model achieving 95% accuracy on CIFAR-10 dataset. Implemented data augmentation and transfer learning techniques.",
    image: "/images/project1.jpg",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Deep Learning",
    featured: true,
  },
  {
    id: "2",
    title: "NLP Sentiment Analysis",
    description: "Sentiment analysis model using transformer architectures and BERT.",
    longDescription: "Developed a sentiment analysis system using BERT and fine-tuned on custom dataset. Achieved 92% accuracy on test set.",
    image: "/images/project2.jpg",
    technologies: ["Python", "PyTorch", "Transformers", "NLP"],
    githubUrl: "https://github.com",
    category: "NLP",
    featured: true,
  },
  {
    id: "3",
    title: "Recommendation System",
    description: "Collaborative filtering recommendation system using machine learning algorithms.",
    longDescription: "Built a hybrid recommendation system combining collaborative and content-based filtering for e-commerce applications.",
    image: "/images/project3.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com",
    category: "Machine Learning",
    featured: true,
  },
  {
    id: "4",
    title: "Computer Vision Object Detection",
    description: "Real-time object detection using YOLO and OpenCV.",
    longDescription: "Implemented YOLO v5 for real-time object detection with custom training on specific object classes.",
    image: "/images/project4.jpg",
    technologies: ["Python", "PyTorch", "OpenCV", "YOLO"],
    githubUrl: "https://github.com",
    category: "Computer Vision",
    featured: false,
  },
];

const categories = ["All", "Deep Learning", "NLP", "Machine Learning", "Computer Vision"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my work in AI and machine learning
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Placeholder for project image */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

