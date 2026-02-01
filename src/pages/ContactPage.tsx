export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Contact Me
      </h1>

      <p className="text-gray-600 mb-12 max-w-2xl">
        I’m always open to discussing opportunities, inventory analytics,
        SAP MM roles, or data-driven projects. Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT: CONTACT DETAILS */}
        <div className="space-y-8">
          {/* EMAIL */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <a
              href="mailto:iamsakthii20@gmail.com"
              className="text-blue-600 hover:underline"
            >
              iamsakthii20@gmail.com
            </a>
          </div>

          {/* LINKEDIN */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sakthi-sivakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/sakthi-sivakumar
            </a>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">Tamil Nadu, India</p>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM (Formspree-ready) */}
        <form
          className="space-y-6 border rounded-xl p-8 shadow-sm bg-white"
          method="POST"
          action="#"  // ⬅ will be replaced with Formspree URL next
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
