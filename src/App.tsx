import { useState } from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { Footer } from "./Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "skills" && <SkillsPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "experience" && <ExperiencePage />}
        {currentPage === "resume" && <ResumePage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "admin" && <AdminPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <Toaster />
    </div>
  );
}

/* ---------------- NAVIGATION ---------------- */

function Navigation({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <div
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          Sakthi Sivakumar
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium ${
                currentPage === item.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Authenticated>
            <button
              onClick={() => setCurrentPage("admin")}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Admin
            </button>
            <SignOutButton />
          </Authenticated>

          <Unauthenticated>
            <button
              onClick={() => setCurrentPage("admin")}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Admin Login
            </button>
          </Unauthenticated>
        </div>
      </div>
    </nav>
  );
}
