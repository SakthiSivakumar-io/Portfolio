import PageWrapper from "../components/PageWrapper";

export default function ResumePage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Resume
        </h1>

        <p className="text-gray-600 mb-8">
          Download my latest resume highlighting my experience in Inventory,
          SAP MM, Audit & MIS reporting.
        </p>

        <a
          href="/Portfolio/Sakthi_Sivakumar_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold
                     transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Download PDF Resume
        </a>
      </div>
    </PageWrapper>
  );
}
