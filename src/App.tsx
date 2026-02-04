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

import { useState } from "react";

function Navigation({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
  const [open, setOpen] = useState(false);

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
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => {
            setCurrentPage("home");
            setOpen(false);
          }}
        >
          Sakthi Sivakumar
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setOpen(false);
                }}
                className={`text-left text-sm font-medium ${
                  currentPage === item.id
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
