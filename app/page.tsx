export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Portfolio
          </h1>
          <ul className="flex gap-8">
            <li>
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Frontend Engineer
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Creating beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-300 text-slate-900 dark:border-slate-600 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm a passionate frontend engineer dedicated to building responsive, user-friendly web applications.
            With expertise in modern web technologies and a keen eye for design, I create seamless digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-40"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Project {project}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Description of your project goes here
                  </p>
                  <a
                    href="#"
                    className="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Frontend
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Tools
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>Git</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Other
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>REST APIs</li>
                <li>Responsive Design</li>
                <li>Web Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'd love to hear from you. Feel free to reach out!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
