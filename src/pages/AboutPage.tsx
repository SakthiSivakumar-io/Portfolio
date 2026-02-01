import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Me
        </h1>

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            I am an{" "}
            <span className="font-medium text-gray-800">
              Inventory Analyst
            </span>{" "}
            with hands-on experience in{" "}
            <span className="font-medium text-gray-800">
              SAP MM
            </span>
            , internal audits, and MIS reporting. I work at the intersection of
            operations, data, and systems to ensure inventory accuracy and
            process efficiency.
          </p>

          <p>
            Over the{" "}
            <span className="font-medium text-gray-800">
              3.5+ years
            </span>
            , I have been involved in stock reconciliation, variance analysis,
            audit support, and SAP-driven reporting across manufacturing
            environments. My work focuses on identifying gaps, improving
            controls, and enabling better decision-making through clean,
            reliable data.
          </p>

          <p>
            I have a strong interest in{" "}
            <span className="font-medium text-gray-800">
              data-driven roles
            </span>{" "}
            and continuously work on improving my skills in analytics,
            reporting, and automation—while maintaining a solid foundation in
            SAP and inventory operations.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              What I Do
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Inventory control & reconciliation</li>
              <li>SAP MM (P2P, GR/IR, stock management)</li>
              <li>Internal audit & compliance support</li>
              <li>MIS & management reporting</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              What I’m Growing Into
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Advanced Excel & reporting automation</li>
              <li>Data analysis & visualization</li>
              <li>Process improvement using insights</li>
              <li>Business-focused analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
