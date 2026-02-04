import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

import { Toaster } from "sonner";
import { Footer } from "./Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === "home" && (
              <HomePage setCurrentPage={setCurrentPage} />
            )}
            {currentPage === "about" && <AboutPage />}
            {currentPage === "skills" && <SkillsPage />}
            {currentPage === "projects" && <ProjectsPage />}
            {currentPage === "experience" && <ExperiencePage />}
            {currentPage === "resume" && <ResumePage />}
            {currentPage === "contact" && <ContactPage />}
            {currentPage === "admin" && <AdminPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <Toaster />
    </div>
  );
}
