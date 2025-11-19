"use client";

import { useState, useEffect } from "react";
import { projectsData } from "@/lib/projects";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "안녕하세요, 프론트엔드 엔지니어 유슬기입니다.";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 타이핑 효과
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        // 1초 대기 후 초기화
        setTimeout(() => {
          index = 0;
          setDisplayedText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            top: "20%",
            left: "10%",
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            top: "40%",
            right: "10%",
            animation: "float 10s ease-in-out infinite 2s",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            bottom: "10%",
            left: "20%",
            animation: "float 9s ease-in-out infinite 4s",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto md:px-6 px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text md:text-3xl">
            <span className="block md:hidden">sg.dev</span>
            <span className="hidden md:block">seulgi.dev</span>
          </h1>
          <ul className="flex gap-2 items-center">
{[
                { label: "about", id: "about" },
                { label: "projects", id: "projects" },
                { label: "skills", id: "skills" },
                { label: "contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-200 hover:text-white transition duration-300 relative group text-xs md:text-base px-1 md:px-2 py-1 flex items-center justify-center"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {item.label.toUpperCase()}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center px-6 py-32 z-10">
        <div className="max-w-4xl text-center fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Frontend Engineer</span>
            <br />
            <span className="text-slate-300">Portfolio</span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-300 mb-4 h-8">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
            <br />
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition duration-300 font-semibold pulse-btn group relative overflow-hidden"
            >
              <span className="relative z-10">내 작업 보기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-400 text-white rounded-lg hover:bg-purple-400/10 hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 font-semibold"
            >
              연락하기
            </a>
          </div>
        </div>

        {/* Floating code elements */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8">
            <span className="gradient-text">About Me</span>
          </h3>
          <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm hover:border-purple-500/60 transition duration-300 glow-box">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              저는 아름답고 직관적인 사용자 인터페이스를 만드는 것에 열정을 가진 프론트엔드 엔지니어입니다. 
              React, TypeScript, 그리고 최신 웹 기술에 대한 전문 지식으로 디자인 아이디어를 매력적인 디지털 경험으로 변환합니다.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              훌륭한 웹 경험은 미적 감각, 기능성, 그리고 성능의 조합이라고 믿습니다. 
              모든 프로젝트는 배우고 혁신할 수 있는 기회입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/** projectsData를 lib에서 가져와 사용합니다. */}
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <a href={`/projects/${project.id}`}>
                  <div className="relative bg-slate-900/80 backdrop-blur border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/60 transition duration-300">
                    <div className="relative w-full rounded-xl overflow-hidden">
                      {/* 16:9 비율(데스크탑 캡처에 적절) 유지: padding-top 트릭 사용 */}
                      <div className="w-full pt-[56.25%] relative">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-30 pointer-events-none"></div>
                        {hoveredProject === idx && (
                          <div className="absolute inset-0 bg-white/5 shimmer-effect"></div>
                        )}
                      </div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition">
                        {project.title}
                      </h4>
                      <p className="text-slate-300 mb-6">{project.desc}</p>
                      <div className="flex gap-2 mb-6 flex-wrap">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-sm text-purple-300 hover:bg-purple-500/30 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="inline-block text-purple-400 hover:text-purple-300 font-semibold group/link transition">
                        프로젝트 보기
                        <span className="ml-2 inline-block group-hover/link:translate-x-2 transition duration-300">
                          →
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-16">
            <span className="gradient-text">Skills & Technologies</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              },
              {
                title: "Tools & Platforms",
                skills: ["Git", "VS Code", "Figma", "Docker", "Vercel"],
              },
              {
                title: "Core Concepts",
                skills: ["REST APIs", "Responsive Design", "Web Performance", "SEO", "Accessibility"],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 hover:bg-slate-900/80 transition duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-slate-300 hover:text-white transition duration-200 flex items-center group/item"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover/item:scale-125 transition"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">
            <span className="gradient-text">Let's Work Together</span>
          </h3>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            프로젝트 아이디어가 있거나 협업하고 싶으신가요? 저에게 연락하세요!
            함께 멋진 것을 만들어보겠습니다.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:your@email.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition duration-300 font-semibold"
            >
              이메일 보내기
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-purple-400 text-white rounded-lg hover:bg-purple-400/10 transition duration-300 font-semibold"
            >
              LinkedIn에서 연결하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-8 border-t border-purple-500/20 bg-slate-950/80 backdrop-blur-lg z-10 text-center text-slate-400">
        <p>&copy; 2025 Frontend Engineer Portfolio. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
