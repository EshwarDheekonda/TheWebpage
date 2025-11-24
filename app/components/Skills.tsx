"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: string;
  icon?: string;
}

const skills: Skill[] = [
  // AI & LLM Technologies
  { name: "LangChain", category: "AI & LLM Technologies", icon: "langchain" },
  { name: "LangGraph", category: "AI & LLM Technologies", icon: "langchain" },
  { name: "OpenAI GPT-4", category: "AI & LLM Technologies", icon: "openai" },
  { name: "Anthropic Claude", category: "AI & LLM Technologies", icon: "anthropic" },
  { name: "Meta Llama 3.3", category: "AI & LLM Technologies", icon: "meta" },
  { name: "Hugging Face", category: "AI & LLM Technologies", icon: "huggingface" },
  { name: "RAG", category: "AI & LLM Technologies" },
  { name: "Prompt Engineering", category: "AI & LLM Technologies" },
  { name: "AutoGen", category: "AI & LLM Technologies", icon: "microsoft" },
  { name: "Model Context Protocol", category: "AI & LLM Technologies" },
  
  // Vector & Graph Databases
  { name: "Neo4j", category: "Vector & Graph Databases", icon: "neo4j" },
  { name: "ChromaDB", category: "Vector & Graph Databases" },
  { name: "FAISS", category: "Vector & Graph Databases", icon: "facebook" },
  
  // Programming Languages
  { name: "Python", category: "Programming Languages", icon: "python" },
  { name: "JavaScript", category: "Programming Languages", icon: "javascript" },
  { name: "Node.js", category: "Programming Languages", icon: "nodedotjs" },
  { name: "TypeScript", category: "Programming Languages", icon: "typescript" },
  { name: "SQL", category: "Programming Languages", icon: "postgresql" },
  
  // Backend & APIs
  { name: "FastAPI", category: "Backend & APIs", icon: "fastapi" },
  { name: "Flask", category: "Backend & APIs", icon: "flask" },
  { name: "Express.js", category: "Backend & APIs", icon: "express" },
  { name: "React", category: "Backend & APIs", icon: "react" },
  
  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", icon: "amazonaws" },
  { name: "Azure", category: "Cloud & DevOps", icon: "microsoftazure" },
  { name: "Docker", category: "Cloud & DevOps", icon: "docker" },
  { name: "Kubernetes", category: "Cloud & DevOps", icon: "kubernetes" },
  { name: "Terraform", category: "Cloud & DevOps", icon: "terraform" },
  { name: "Ansible", category: "Cloud & DevOps", icon: "ansible" },
  { name: "Git", category: "Cloud & DevOps", icon: "git" },
  { name: "GitHub", category: "Cloud & DevOps", icon: "github" },
  { name: "CI/CD", category: "Cloud & DevOps" },
  
  // Databases & Caching
  { name: "PostgreSQL", category: "Databases & Caching", icon: "postgresql" },
  { name: "MongoDB", category: "Databases & Caching", icon: "mongodb" },
  { name: "MySQL", category: "Databases & Caching", icon: "mysql" },
  { name: "Redis", category: "Databases & Caching", icon: "redis" },
];

const categories = [
  "AI & LLM Technologies",
  "Vector & Graph Databases",
  "Programming Languages",
  "Backend & APIs",
  "Cloud & DevOps",
  "Databases & Caching",
];

const getIconUrl = (iconName?: string): string | null => {
  if (!iconName) return null;
  return `https://cdn.simpleicons.org/${iconName}`;
};

// Simple Skill Card Component
function SkillCard({ skill, index, categoryIndex }: { skill: Skill; index: number; categoryIndex: number }) {
  const iconUrl = getIconUrl(skill.icon);
  const revealDelay = categoryIndex * 0.1 + index * 0.03;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        y: 20,
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: revealDelay,
      }}
      className="relative bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 min-h-[100px] cursor-pointer group"
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={skill.name}
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full"><span class="text-2xl font-bold text-primary-600 dark:text-primary-400">${skill.name.charAt(0)}</span></div>`;
              }
            }}
          />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {skill.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Skill Name */}
      <span className="text-sm font-medium text-gray-900 dark:text-white text-center leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30 dark:from-primary-900/10 dark:via-transparent dark:to-purple-900/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build AI-native solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
