import { useState } from "react";
import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster, toast } from "sonner";

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
      <Footer />
      <Toaster />
    </div>
  );
}

function Navigation({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) {
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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
                className={`px-3 py-2 text-sm font-medium transition-colors ${
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
      </div>
    </nav>
  );
}

function HomePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inventory Analyst specializing in<br />
            <span className="text-blue-600">SAP MM, Audit & Data-Driven Reporting</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            3.5+ years of experience in SAP MM, Inventory Control, Stock Reconciliation, 
            Variance Analysis, and MIS Reporting. Passionate about optimizing processes 
            and delivering data-driven insights for business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => setCurrentPage("resume")}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Download Resume
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">SAP MM Expert</h3>
            <p className="text-gray-600">Extensive experience in SAP Materials Management, P2P processes, and system optimization</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Audit & Analysis</h3>
            <p className="text-gray-600">Specialized in inventory reconciliation, variance analysis, and internal audit support</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">MIS Reporting</h3>
            <p className="text-gray-600">Advanced Excel, Power BI dashboards, and automated reporting for management insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-600 mb-6">
            I am a dedicated Inventory Analyst with 3.5+ years of specialized experience in SAP MM, 
            inventory management, and data-driven reporting. My expertise lies in bridging the gap 
            between complex SAP systems and practical business solutions.
          </p>
          
          <p className="text-gray-600 mb-6">
            Throughout my career, I have successfully reduced inventory variances, optimized 
            procurement processes, and implemented automated reporting systems that have saved 
            organizations millions in operational costs.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Career Goal</h3>
          <p className="text-gray-600">
            I am transitioning towards more data-driven roles while maintaining my strong SAP domain 
            expertise. My goal is to leverage advanced analytics and business intelligence tools to 
            drive strategic decision-making in inventory and supply chain management.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Strengths</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">SAP MM Expertise</h4>
              <p className="text-gray-600 text-sm">P2P processes, GR/IR, Inventory Management, Master Data</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">Stock Reconciliation</h4>
              <p className="text-gray-600 text-sm">Physical vs System reconciliation, Variance Analysis, Shrinkage Control</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">MIS & Reporting</h4>
              <p className="text-gray-600 text-sm">Excel Advanced, Power BI, Automated Dashboards, KPI Development</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">Internal Audit Support</h4>
              <p className="text-gray-600 text-sm">Audit documentation, Compliance reporting, Process validation</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">Process Improvement</h4>
              <p className="text-gray-600 text-sm">Workflow optimization, Automation, Cross-functional collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsPage() {
  const skills = useQuery(api.portfolio.getSkills);
  
  if (!skills) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-4 bg-gray-100 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "expert": return "bg-green-500";
      case "advanced": return "bg-blue-500";
      case "intermediate": return "bg-yellow-500";
      case "basic": return "bg-gray-500";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills & Expertise</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">{category}</h2>
            <div className="space-y-3">
              {categorySkills.map((skill) => (
                <div key={skill._id} className="flex items-center justify-between">
                  <span className="text-gray-800">{skill.name}</span>
                  <span className={`px-2 py-1 rounded text-xs text-white font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const projects = useQuery(api.portfolio.getProjects);
  
  if (!projects) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects & Case Studies</h1>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {project.featured && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Objective</h3>
                <p className="text-gray-600 mb-4">{project.objective}</p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Problem Statement</h3>
                <p className="text-gray-600">{project.problemStatement}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analysis & Approach</h3>
                <p className="text-gray-600 mb-4">{project.analysis}</p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Outcome & Impact</h3>
                <p className="text-gray-600 font-medium">{project.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperiencePage() {
  const experience = useQuery(api.portfolio.getExperience);
  
  if (!experience) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="bg-gray-100 rounded-lg h-96"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Experience</h1>
      
      <div className="space-y-8">
        {experience.map((exp) => (
          <div key={exp._id} className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">{exp.title}</h2>
              <h3 className="text-xl text-blue-600 font-medium">{exp.company}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                <span className="text-gray-600">{exp.duration}</span>
                <span className="text-gray-600">{exp.location}</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>
      
      <div className="bg-white border rounded-lg p-8 shadow-sm text-center">
        <div className="mb-8">
          <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📄</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Download My Resume</h2>
          <p className="text-gray-600 mb-6">
            Get a comprehensive overview of my experience, skills, and achievements in inventory management and SAP MM.
          </p>
        </div>
        
        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Download PDF Resume
          </button>
          <p className="text-sm text-gray-500">
            Last updated: January 2024 | File size: ~150KB
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Quick Summary</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">3.5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">₹17.5M</div>
              <div className="text-sm text-gray-600">Cost Savings Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const submitContact = useMutation(api.portfolio.submitContact);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    try {
      await submitContact(formData);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in discussing new opportunities, collaborations, 
            or sharing insights about inventory management and SAP MM. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600">📧</span>
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray-600">sakthi.sivakumar@email.com</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600">💼</span>
              </div>
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-gray-600">linkedin.com/in/sakthi-sivakumar</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600">📍</span>
              </div>
              <div>
                <div className="font-medium">Location</div>
                <div className="text-gray-600">Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function AdminPage() {
  const loggedInUser = useQuery(api.auth.loggedInUser);
  const initializeData = useMutation(api.portfolio.initializePortfolioData);
  
  const handleInitialize = async () => {
    try {
      const result = await initializeData({});
      toast.success(result);
    } catch (error) {
      toast.error("Failed to initialize data");
    }
  };

  if (loggedInUser === undefined) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-8"></div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Panel</h1>
      
      <Unauthenticated>
        <div className="bg-white border rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Admin Login Required</h2>
          <p className="text-gray-600 mb-6">
            Please sign in to access the admin panel and manage portfolio content.
          </p>
          <SignInForm />
        </div>
      </Unauthenticated>
      
      <Authenticated>
        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Welcome, {loggedInUser?.email}</h2>
            <p className="text-gray-600 mb-4">
              You can manage the portfolio content from this admin panel.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Initialize Portfolio Data</h3>
            <p className="text-gray-600 mb-4">
              Click the button below to populate the portfolio with sample data including projects, skills, and experience.
            </p>
            <button
              onClick={handleInitialize}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Initialize Data
            </button>
          </div>
        </div>
      </Authenticated>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sakthi Sivakumar</h3>
            <p className="text-gray-400">
              Inventory Analyst specializing in SAP MM, Audit & Data-Driven Reporting
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-white cursor-pointer">About</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Projects</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Experience</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Contact</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <div className="text-gray-400">Email: sakthi.sivakumar@email.com</div>
              <div className="text-gray-400">LinkedIn: linkedin.com/in/sakthi-sivakumar</div>
              <div className="text-gray-400">Location: Tamil Nadu, India</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sakthi Sivakumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
