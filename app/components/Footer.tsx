"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/EshwarDheekonda" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/eshwar-dheekonda-7323a0138/" },
  { name: "Email", icon: Mail, url: "mailto:eshwardeekonda@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-sm">
              AI Engineer specializing in LLMs, RAG systems, and AI-native applications.
              Actively seeking opportunities to transform organizations through intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 flex items-center text-sm">
              <MapPin size={16} className="mr-2" />
              <span>Little Rock, AR | Available for remote and on-site opportunities</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p className="mb-2">
            &copy; {currentYear} <span className="text-white font-semibold">Eswar Dheekonda</span>. All rights reserved.
          </p>
          <p className="text-gray-500">
            AI Engineer | Graduating December 2025 | Available for opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}

