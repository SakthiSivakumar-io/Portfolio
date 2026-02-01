export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Contact Me
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        I’m always open to discussing opportunities, inventory analytics,
        SAP MM roles, or data-driven projects. Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <a
              href="mailto:iamsakthii20@gmail.com"
              className="text-blue-600 hover:underline"
            >
              iamsakthii20@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sakthi-sivakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/sakthi-sivakumar
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Location</h3>
            <p className="text-gray-600">Tamil Nadu, India</p>
          </div>
        </div>

        {/* Contact Form (UI only) */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
