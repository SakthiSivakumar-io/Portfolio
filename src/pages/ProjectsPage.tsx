import PageWrapper from "../components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Projects & Case Studies
        </h1>

        <div className="space-y-14">

          {/* PROJECT 1 */}
          <div className="border rounded-xl p-8 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Inventory Variance Analysis & Heat Treatment Control Study
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Inventory Analyst / MIS & SAP MM · Manufacturing Environment
            </p>

            <h3 className="font-semibold mb-1">Objective</h3>
            <p className="text-gray-600 mb-4">
              To identify, quantify, and analyze inventory variance occurring
              during the Heat Treatment (HT) stage and recommend control measures
              to prevent inventory loss and audit risk.
            </p>

            <h3 className="font-semibold mb-1">Business Problem</h3>
            <p className="text-gray-600 mb-4">
              Despite SAP indicating sufficient stock, shortages were detected
              during physical verification at the HT stage. The variance remained
              undetected due to the absence of system receipt confirmation.
            </p>

            <h3 className="font-semibold mb-1">Root Cause Identified</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Removal of SAP 311 movement between In-House and HT</li>
              <li>HT merged under same storage location as In-House</li>
              <li>No receipt acknowledgment or weighing control at HT</li>
              <li>Loss of system-level accountability</li>
            </ul>

            <h3 className="font-semibold mb-1">Analysis & Validation</h3>
            <p className="text-gray-600 mb-4">
              Power BI analysis confirmed that{" "}
              <strong>100% of inventory variance</strong>
              {" "}originated at the HT stage, with no variance observed in
              In-House or Post-HT stages.
            </p>

            <h3 className="font-semibold mb-1">Key Findings</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>42 materials impacted</li>
              <li>Total variance identified: <strong>–1161 Qty</strong></li>
              <li>HT contribution to total variance: <strong>100%</strong></li>
            </ul>

            <h3 className="font-semibold mb-1">Tools Used</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {["SAP MM", "Power BI", "Excel", "Physical Stock Verification"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>

            <h3 className="font-semibold mb-1">Outcome & Recommendations</h3>
            <p className="text-gray-700 font-medium">
              ✔ Identified system-driven control failure <br />
              ✔ Prevented undetected inventory loss <br />
              ✔ Recommended reinstating receipt control and HT weighing process <br />
              ✔ Strengthened audit readiness and inventory governance
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="border rounded-xl p-8 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Weighing Scale Accuracy & Inventory Conversion Improvement Study
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              MIS / Inventory Analyst · Metrological & Process Study
            </p>

            <h3 className="font-semibold mb-1">Objective</h3>
            <p className="text-gray-600 mb-4">
              To scientifically analyze and control inventory variation occurring
              during weight-to-piece conversion of components using an industrial
              weighing scale.
            </p>

            <h3 className="font-semibold mb-1">Problem Statement</h3>
            <p className="text-gray-600 mb-4">
              Minor inventory discrepancies (1–4 pcs per lot) were observed
              despite defined SOPs and periodic scale calibration, especially for
              lightweight components.
            </p>

            <h3 className="font-semibold mb-1">Experimental Study & Observation</h3>
            <p className="text-gray-600 mb-4">
              Experimental trials showed that weighing scale resolution and
              linearity improve only when the applied load exceeds approximately
              <strong> 2 kg</strong>. Below this range, average piece weight varied
              with sample size, leading to cumulative rounding errors.
            </p>

            <h3 className="font-semibold mb-1">Evidence-Based Root Cause</h3>
            <p className="text-gray-600 mb-4">
              The issue was identified as{" "}
              <strong>systemic and metrological</strong>, not due to operator
              error or process non-compliance.
            </p>

            <h3 className="font-semibold mb-1">Corrective & Preventive Actions</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Revised sampling logic based on minimum ≥ 2 kg applied load</li>
              <li>Defined tolerance limits (±0.2%) for inventory variation</li>
              <li>Introduced operational validation using actual components</li>
              <li>Established reference average weight above stable load range</li>
            </ul>

            <h3 className="font-semibold mb-1">Tools Used</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Excel", "Statistical Analysis", "Process Validation"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>

            <h3 className="font-semibold mb-1">Results & Business Impact</h3>
            <p className="text-gray-700 font-medium">
              ✔ Reduced inventory variation <br />
              ✔ Scientifically justified discrepancies during audits <br />
              ✔ Reduced rechecking and reconciliation effort <br />
              ✔ Improved inventory credibility and control
            </p>
          </div>
{/* PROJECT 3 */}
<div className="border rounded-xl p-8 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  <h2 className="text-2xl font-semibold mb-2">
    SAP MM Inventory Flow Analysis (GRN → Consumption → Reconciliation)
  </h2>

  <p className="text-sm text-gray-500 mb-4">
    Inventory Analyst · SAP MM & MIS · Manufacturing Environment
  </p>

  <h3 className="font-semibold mb-1">Objective</h3>
  <p className="text-gray-600 mb-4">
    To analyze the end-to-end SAP MM inventory flow from Goods Receipt (GRN)
    to production consumption and reconciliation, identifying stock variances
    impacting inventory accuracy, financial reporting, and audit compliance.
  </p>

  <h3 className="font-semibold mb-1">Approach</h3>
  <p className="text-gray-600 mb-4">
    Modeled SAP MM inventory data to track GRN postings, production consumption,
    and physical stock verification. A Power BI MIS dashboard was developed to
    visualize quantity and value-based variances.
  </p>

  <h3 className="font-semibold mb-1">Key Analysis</h3>
  <ul className="list-disc list-inside text-gray-600 mb-4">
    <li>Compared GRN and consumption trends over time</li>
    <li>Identified material-level stock discrepancies</li>
    <li>Evaluated financial impact of inventory variances</li>
    <li>Applied plant and storage-location filters for control analysis</li>
  </ul>

  <h3 className="font-semibold mb-1">Outcome & Impact</h3>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Improved visibility into SAP MM inventory movement</li>
    <li>Enabled quicker identification of discrepancy-prone materials</li>
    <li>Supported audit reconciliation and corrective actions</li>
    <li>Strengthened inventory control and reporting reliability</li>
  </ul>

  <h3 className="font-semibold mb-1">Tools Used</h3>
  <div className="flex flex-wrap gap-2">
    {["SAP MM", "Power BI", "Advanced Excel", "MIS Reporting"].map(
      (tool) => (
        <span
          key={tool}
          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
        >
          {tool}
        </span>
      )
    )}
  </div>
</div>

        </div>
      </div>
    </PageWrapper>
  );
}
