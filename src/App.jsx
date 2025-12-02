import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#04070A] text-gray-100 overflow-x-hidden">
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f16] via-[#0d1b2a] to-black opacity-70" />

        {/* Animated Glow Orbs */}
        <div className="absolute w-72 h-72 bg-[#00eaff55] blur-3xl rounded-full -top-10 -left-10 animate-pulse" />
        <div className="absolute w-64 h-64 bg-[#8b5cf655] blur-3xl rounded-full bottom-0 right-0 animate-pulse" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-center"
        >
          Udith Narayan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg text-gray-300 mt-4"
        >
          AI Engineer • NLP • Automation • Cloud
        </motion.p>
      </section>

      {/* SUMMARY */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">Summary</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          AI Engineer with experience designing AI-driven automation platforms, building NLP pipelines, and deploying
          production-grade systems on AWS. Specialized in FastAPI, LangChain, Transformers, and LLM integration.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>

        {[
          {
            role: "AI Engineer — OneITCorp",
            date: "Jul 2024 – Present",
            bullets: [
              "Built AI-powered Document Processing Platform using FastAPI, LangChain, OpenAI API.",
              "Integrated HuggingFace Transformers + spaCy achieving 95%+ accuracy.",
              "Deployed on AWS (EC2, S3, Lambda) with Docker + GitHub Actions.",
              "Developed Angular dashboards for analytics.",
            ],
          },
          {
            role: "Graduate TA — UMass Lowell",
            date: "Sep 2023 – Dec 2023",
            bullets: [
              "Graded Data Structures & Algorithms coursework for 30+ students.",
              "Held weekly debugging + problem-solving sessions.",
              "Created exam questions blending coding + algorithm design.",
            ],
          },
          {
            role: "Cloud Automation Engineer — HP Inc.",
            date: "Jul 2021 – Jul 2022",
            bullets: [
              "Python automation for 5000+ enterprise devices.",
              "REST API-based monitoring + CI/CD pipeline improvements.",
              "Collaborated in Agile sprints; integrated Docker + Postman testing.",
            ],
          },
          {
            role: "Software Engineering Intern — Inbredia Technologies",
            date: "Jun 2020 – Jun 2021",
            bullets: [
              "Built client-matching platform using Java, HTML, Firebase.",
              "Improved app responsiveness by 35% using caching + optimizations.",
              "Implemented Firebase Auth + real-time database updates.",
            ],
          },
        ].map((job, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="p-6 bg-[#0f1624] rounded-2xl shadow-lg border border-gray-700 mb-6">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="italic mb-2">{job.date}</p>
            <ul className="list-disc ml-6 text-sm space-y-1 text-gray-300">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Job Assistant Web App",
              desc: "LLM-powered job-matching using FastAPI, React, Docker, AWS.",
            },
            {
              title: "NER for Digital Health",
              desc: "95% F1-score entity extraction using spaCy + TensorFlow.",
            },
            {
              title: "ChefConnect — Capstone Project",
              desc: "Award-winning Android app connecting users with local chefs using Firebase.",
            },
            {
              title: "IoT Pothole Prediction System",
              desc: "ML pipeline predicting potholes using scikit-learn + NumPy.",
            },
            {
              title: "AI Resume Analyzer (New)",
              desc: "Built an ATS-style resume insights tool using LangChain + Transformers.",
            },
            {
              title: "Cloud Cost Optimization Bot (New)",
              desc: "Automated AWS cost monitoring with Lambda, CloudWatch, Python.",
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#0f1624] rounded-2xl shadow-lg border border-gray-700"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <a
          href="/Udith_Narayan_Resume_ AI_Engineer.pdf"
          target="_blank"
          className="px-6 py-3 rounded-xl bg-[#00eaff] text-black font-semibold shadow hover:bg-[#00e0ff]"
        >
          Download Resume
        </a>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: udith.narayann@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/udith</p>
        <p>GitHub: github.com/udith</p>
      </section>
          {/* ABOUT ME */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm an AI Engineer passionate about building intelligent systems, automating workflows,
          and designing scalable NLP solutions. I care deeply about clean architecture, elegant code,
          and delivering business impact through machine learning and automation.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#00eaff]">AI & NLP</h3>
            <ul className="space-y-1">
              <li>LLMs (OpenAI, HuggingFace)</li>
              <li>LangChain</li>
              <li>TensorFlow, PyTorch</li>
              <li>spaCy, Transformers</li>
              <li>NLP Pipelines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#00eaff]">Backend & Cloud</h3>
            <ul className="space-y-1">
              <li>FastAPI, Node.js</li>
              <li>AWS (EC2, Lambda, S3)</li>
              <li>Docker, GitHub Actions</li>
              <li>PostgreSQL, MongoDB</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#00eaff]">Tools & Other</h3>
            <ul className="space-y-1">
              <li>Python, TypeScript</li>
              <li>React, Firebase</li>
              <li>CI/CD Pipelines</li>
              <li>Agile + Jira</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HIRE ME */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Hire Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          I'm currently seeking AI Engineer, Machine Learning Engineer, and Automation Engineer roles.
          If you're building something impactful, I'd love to contribute.
        </p>
        <a
          href="mailto:udith.narayann@gmail.com"
          className="px-8 py-3 rounded-xl bg-[#00eaff] text-black font-semibold shadow-lg hover:bg-[#00d5ff]"
        >
          Let's Talk
        </a>
      </section>
    </div>
  );
}
