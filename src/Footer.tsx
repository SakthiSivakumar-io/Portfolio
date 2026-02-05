export function Footer({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">
            Sakthi Sivakumar
          </h3>
          <p className="text-sm">
            Inventory Analyst | SAP MM | Audit & MIS | Data & Reporting
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => setCurrentPage("about")}
              className="cursor-pointer hover:text-white"
            >
              About
            </li>
            <li
              onClick={() => setCurrentPage("projects")}
              className="cursor-pointer hover:text-white"
            >
              Projects
            </li>
            <li
              onClick={() => setCurrentPage("experience")}
              className="cursor-pointer hover:text-white"
            >
              Experience
            </li>
            <li
              onClick={() => setCurrentPage("contact")}
              className="cursor-pointer hover:text-white"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">Tamil Nadu, India</p>
          <a
            href="mailto:iamsakthii20@gmail.com"
            className="text-sm text-blue-400 hover:underline block mt-1"
          >
            iamsakthii20@gmail.com
          </a>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Sakthi Sivakumar. All rights reserved.
      </div>
    </footer>
  );
}
