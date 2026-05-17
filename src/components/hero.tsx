'use client';

import { Code2, Smartphone, CheckSquare, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const skills = [
    { name: 'MERN Stack', icon: Code2, color: 'text-blue-500' },
    { name: 'Flutter', icon: Smartphone, color: 'text-cyan-500' },
    { name: 'Jira', icon: CheckSquare, color: 'text-blue-600' },
    { name: 'Notion', icon: FileText, color: 'text-gray-700 dark:text-gray-300' },
  ];

  return (
    <div className="py-24 md:py-32 text-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-10 left-1/4" />
        <div className="w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-1/2 right-1/4" />
        <div className="w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-10 left-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4 animate-fadeInUp delay-300">
          <Sparkles className="inline-block w-5 h-5 mr-2 -mt-1 animate-spin-slow" />
          Welcome to My Work
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight animate-fadeInUp delay-500">
          Exploring the Art of
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ml-3">
            Creation
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 animate-fadeInUp delay-700">
          A deep dive into complex engineering problems and creative solutions.
        </p>
        <a 
          href="#projects"
          className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-slow delay-900"
        >
          View All Projects
          <Code2 className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
