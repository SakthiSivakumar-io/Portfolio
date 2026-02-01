import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";

export default function HomePage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16">

        {/* HERO TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Sakthi Sivakumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg text-gray-600 max-w-3xl"
        >
          Inventory Analyst | SAP MM | Audit & MIS | Data & Reporting
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-3xl"
        >
          Results-driven professional with hands-on experience in inventory
          control, SAP MM processes, internal audits, and MIS reporting.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex gap-4"
        >
          <button
            onClick={() => setCurrentPage("projects")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg
                       transition-all duration-300 hover:bg-blue-700
                       hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Projects
          </button>

          <button
            onClick={() => setCurrentPage("contact")}
            className="px-6 py-3 border rounded-lg
                       transition-all duration-300 hover:bg-gray-50
                       hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* METRICS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          <Metric label="Years Experience" value={3.5} />
          <Metric label="Projects Delivered" value={15} />
          <Metric label="Audits Supported" value={20} />
          <Metric label="Cost Impact (₹M)" value={17.5} />
        </motion.div>

      </section>
    </PageWrapper>
  );
}

/* ---------------- METRIC COMPONENT ---------------- */

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-900">
        <CountUp end={value} duration={2} />
      </div>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
