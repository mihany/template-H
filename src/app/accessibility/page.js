export const metadata = {
  title: "Accessibility Statement",
  description:
    "Learn about Hoetzin's commitment to accessibility and how we strive to make our website inclusive for everyone.",
  openGraph: {
    title: "Accessibility Statement",
    description:
      "Learn about Hoetzin's commitment to accessibility and how we strive to make our website inclusive for everyone.",
    url: "https://www.hoetzin.com/accessibility",
    images: [
      {
        url: "https://www.hoetzin.com/public/accessibility-cover.jpg",
        width: 800,
        height: 600,
        alt: "Accessibility Statement",
      },
    ],
  },
};

export default function Accessibility() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 text-secondary-onyx">
      <h1 className="text-4xl font-bold text-center mb-8">
        Accessibility Statement
      </h1>
      <p className="text-lg text-secondary-onyx/80 mb-6">
        At Hoetzin, we are committed to ensuring our website and services are
        accessible to everyone, including individuals with disabilities. We
        continuously work to improve the user experience and apply relevant
        accessibility standards.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Accessibility Features</h2>
      <ul className="list-disc pl-6 text-secondary-onyx/80 mb-8 space-y-3">
        <li>Keyboard navigation for all interactive elements.</li>
        <li>Screen reader compatibility with descriptive alt text.</li>
        <li>High-contrast modes for improved readability.</li>
        <li>Resizable text to accommodate different visual needs.</li>
        <li>Support for assistive technologies like screen readers.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Standards and Compliance</h2>
      <p className="text-secondary-onyx/80 mb-6">
        We aim to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1
        Level AA and other applicable accessibility standards, including Section
        508 of the Rehabilitation Act.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Feedback and Support</h2>
      <p className="text-secondary-onyx/80 mb-6">
        If you experience any issues accessing content on our website or have
        suggestions on how we can improve, please contact us:
      </p>
      <ul className="list-none text-secondary-onyx/80 mb-8 space-y-2">
        <li>Email: <a href="mailto:support@hoetzin.com" className="text-secondary-darkCyan hover:underline">support@hoetzin.com</a></li>
        <li>Phone: (123) 456-7890</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Ongoing Efforts</h2>
      <p className="text-secondary-onyx/80 mb-6">
        Accessibility is an ongoing process at Hoetzin. We conduct regular
        accessibility audits, training, and improvements to ensure our website
        remains accessible to all users.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Tools and Resources</h2>
      <p className="text-secondary-onyx/80 mb-6">
        Here are some tools you can use to enhance your browsing experience:
      </p>
      <ul className="list-disc pl-6 text-secondary-onyx/80 space-y-3">
        <li>Screen Readers: NVDA, JAWS, or VoiceOver.</li>
        <li>Browser Zoom Settings: Adjust text size in your browser settings.</li>
        <li>Accessibility Plugins: Explore browser extensions for enhanced accessibility.</li>
      </ul>
    </div>
  );
}