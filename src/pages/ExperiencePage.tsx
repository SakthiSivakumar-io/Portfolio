import PageWrapper from "../components/PageWrapper";

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Professional Experience
        </h1>

        <div className="space-y-12">

          {/* CURRENT EXPERIENCE */}
          <div className="border rounded-xl p-8 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Inventory Analyst / MIS & SAP MM
            </h2>

            <p className="text-blue-600 font-medium mt-1">
              L.G. Balakrishnan & Bros Ltd
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Manufacturing Industry · Tamil Nadu · Mar 2025 – Present
            </p>

            <h3 className="font-semibold mb-2">Role Overview</h3>
            <p className="text-gray-600 mb-4">
              Handling inventory control, SAP MM operations, internal audit
              support, and MIS reporting across manufacturing and in-house
              processing operations.
            </p>

            <h3 className="font-semibold mb-2">Key Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                Managed SAP MM inventory transactions including goods receipt,
                goods issue, and stock reconciliation.
              </li>
              <li>
                Performed physical vs system stock verification and resolved
                inventory discrepancies.
              </li>
              <li>
                Supported internal audits by preparing inventory documentation,
                variance explanations, and compliance reports.
              </li>
              <li>
                Developed MIS reports and dashboards for management review using
                Excel and Power BI.
              </li>
              <li>
                Coordinated with stores, production, and quality teams to address
                inventory and process gaps.
              </li>
            </ul>

            <h3 className="font-semibold mb-2">Key Contributions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Identified system control gaps leading to inventory variance and
                proposed corrective measures.
              </li>
              <li>
                Conducted Heat Treatment inventory variance analysis, proving
                variance origin using data-driven methods.
              </li>
              <li>
                Improved audit readiness through stronger inventory controls and
                documentation practices.
              </li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Tools & Systems</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SAP MM",
                "Excel (Advanced)",
                "Power BI",
                "MIS Reporting",
                "Internal Audit Support",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* PREVIOUS EXPERIENCE */}
          <div className="border rounded-xl p-8 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Inventory Executive / Store Operations
            </h2>

            <p className="text-blue-600 font-medium mt-1">
              Goflex Wires & Cables
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Manufacturing Industry · Tamil Nadu · Jun 2022 – Dec 2024
            </p>

            <h3 className="font-semibold mb-2">Role Overview</h3>
            <p className="text-gray-600 mb-4">
              Responsible for store operations, inventory tracking, material
              movement control, and supporting production requirements.
            </p>

            <h3 className="font-semibold mb-2">Key Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                Managed daily inventory transactions including material receipts,
                issues, and stock updates.
              </li>
              <li>
                Maintained accurate stock records and supported physical stock
                verification activities.
              </li>
              <li>
                Coordinated with production teams to ensure timely material
                availability.
              </li>
              <li>
                Assisted in basic inventory reporting and documentation.
              </li>
            </ul>

            <h3 className="font-semibold mb-2">Key Learning & Growth</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Built strong fundamentals in inventory management and store
                operations.
              </li>
              <li>
                Gained hands-on exposure to manufacturing material flow.
              </li>
              <li>
                Developed discipline in stock accuracy and operational control.
              </li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Tools & Exposure</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SAP MM & WM",
                "Inventory Management",
                "Store Operations",
                "Material Issue & Receipt",
                "Stock Verification",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
