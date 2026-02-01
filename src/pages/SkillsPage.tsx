import PageWrapper from "../components/PageWrapper";

export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Skills & Expertise
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inventory & SAP */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Inventory & SAP MM
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>Inventory Management & Stock Control</li>
              <li>SAP MM – P2P Process</li>
              <li>Goods Receipt / Issue (GR / GI)</li>
              <li>GR/IR Reconciliation</li>
              <li>Physical vs System Stock Reconciliation</li>
              <li>Material Master & Vendor Master Data</li>
            </ul>
          </div>

          {/* Audit & Compliance */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Audit & Compliance
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>Internal Audit Support</li>
              <li>Inventory Variance Analysis</li>
              <li>Root Cause Identification</li>
              <li>Documentation & Audit Reporting</li>
              <li>Process Validation & Control Checks</li>
            </ul>
          </div>

          {/* Data & Reporting */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Data, MIS & Reporting
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>Advanced Excel (LOOKUPs, Pivot Tables)</li>
              <li>MIS & Management Reporting</li>
              <li>Inventory Dashboards</li>
              <li>Trend & Variance Analysis</li>
              <li>Data Accuracy & Validation</li>
            </ul>
          </div>

          {/* Tools & Soft Skills */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Tools & Professional Skills
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>SAP ECC / SAP MM</li>
              <li>Microsoft Excel</li>
              <li>Power BI (Basics)</li>
              <li>Cross-functional Coordination</li>
              <li>Problem Solving & Process Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
