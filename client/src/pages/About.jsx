export default function About() {
  return (
    <div className="pt-16 h-[72vh] flex flex-col justify-center">
      <section className="bg-base-200 py-16 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-base-content/70 max-w-3xl">
            Hi, I'm Tannu Saini. I build AI-powered applications and full-stack web products. Over the past few years, real-time systems,
            and modern web technologies. I enjoy turning ideas into functional products and I've worked on projects involving prompt engineering,
            workflow automation, learning new technologies through hands-on development.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {[
              "HTML & CSS",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "JavaScript",
              "WebSockets",
              "Git & GitHub",
              "TypeScript",
              "Firestore",
              "Docker",
              "CI/CD Pipelines",
              "Figma",
              "Google Cloud Platform",
              "Vercel",
              "Render",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-base-100 p-4 rounded-lg shadow text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 