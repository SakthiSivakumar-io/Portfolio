import { useContactForm } from "../components/useContactForm";

export default function ContactPage() {
  const { handleSubmit, loading, success, error } = useContactForm();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        I’m always open to discussing opportunities, inventory analytics,
        SAP MM roles, or data-driven projects.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT INFO */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Email</h3>
            <a
              href="mailto:iamsakthii20@gmail.com"
              className="text-blue-600 hover:underline"
            >
              iamsakthii20@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sakthi-sivakumar-540125244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/sakthi-sivakumar
            </a>
          </div>

          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">Tamil Nadu, India</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 font-medium">
              ✅ Message sent successfully!
            </p>
          )}

          {error && (
            <p className="text-red-600 font-medium">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
