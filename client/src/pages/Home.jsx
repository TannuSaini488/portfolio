import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import zerodha from "../assets/zerodha.png";
import inventory from "../assets/inventory.png";
import restaurant from "../assets/restaurant.jpg";

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      <section className="bg-base-200">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-primary">Tannu Saini</span>
            </h1>
            <p className="mt-4 text-lg text-base-content/70">
              I’m a MERN Stack Developer passionate about building modern, fast,
              and responsive web applications that deliver real value.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Skills</h2>
          <p className="text-center mt-2 text-base-content/70">
            My core technical expertise
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "WebSockets",
              "C",
              "C++",
              "Java"
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 rounded-xl bg-base-200 text-center shadow hover:shadow-lg transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Preview */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <p className="text-center mt-2 text-base-content/70">
            A glimpse of my recent work
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div
              key="1"
              className="bg-base-100 rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <img src={zerodha} alt="project1" className="rounded-lg" />
              <h3 className="mt-4 font-bold text-lg">
                Online Trading Platform - Zerodha Clone
              </h3>
              <p className="text-base-content/70 mt-2">
                A Zerodha Clone is a trading platform replica that simulates
                Zerodha’s core features like live market data, order placement,
                and portfolio tracking, built for learning or demonstration
                using modern web technologies.
              </p>
              <a href="https://zerodha-clone-frontend-1890.onrender.com/">
                view demo
              </a>
            </div>
            <div
              key="2"
              className="bg-base-100 rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <img src={inventory} alt="project2" className="rounded-lg" />
              <h3 className="mt-4 font-bold text-lg">
                Product & Stock Management System
              </h3>
              <p className="text-base-content/70 mt-2">
                A software application that tracks and manages stock levels,
                orders, and product details to ensure efficient inventory
                control and smooth business operations.
              </p>
              <a href="https://inventory-frontend-xl36.onrender.com/">
                view demo
              </a>
            </div>
            <div
              key="3"
              className="bg-base-100 rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <img src={restaurant} alt="project3" className="rounded-lg" />
              <h3 className="mt-4 font-bold text-lg">
                Restaurant Reservation System
              </h3>
              <p className="text-base-content/70 mt-2">
                A platform that allows customers to book tables online, while
                helping restaurants manage reservations, seating arrangements,
                and customer flow efficiently.
              </p>
              <a href="https://restaurant-frontend-v6l8.onrender.com/">
                view demo
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="btn btn-primary">
              See All Projects
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content text-center">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-2 max-w-xl mx-auto">
          Have a project in mind or looking for a developer? Let’s connect and
          bring your ideas to life.
        </p>
        <Link to="/contact" className="btn btn-outline mt-6">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
