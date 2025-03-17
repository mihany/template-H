export const metadata = {
  title: "Privacy policy",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "Privacy policy",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/privacy-policy",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "Privacy policy",
      },
    ],
  },
};

// Content Array
const sections = [
  {
    heading: "Collection of personal information",
    content: `
      We receive and store any information you knowingly provide to us when you make a purchase through the Website. 
      Currently this is limited to your <strong>email address</strong>, which is required for you to be able to login 
      to the Website and access any purchased Tailwind UI products.
    `,
  },
  {
    heading: "Collection of non-personal information",
    content: `
      When you visit the Website, our servers automatically record information that your browser sends. 
      This data may include information such as your device's IP address, browser type and version, operating system type 
      and version, language preferences, or the webpage you were visiting before you came to our Website.
    `,
  },
  {
    heading: "Use of collected information",
    content: `
      Any information we collect from you may be used to: <br/>
      <ul class="list-disc pl-5 space-y-2">
        <li>Improve our Website to serve you better.</li>
        <li>Respond to your customer service requests and support needs.</li>
        <li>Send periodic emails regarding updates or services.</li>
      </ul>
    `,
  },
  {
    heading: "Contacting us",
    content: `
      If you have any questions about this Policy, please contact us by email at <a href="mailto:support@hoetzin.com" class="text-secondary-darkCyan hover:underline">support@hoetzin.com</a>.
    `,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative mx-auto max-w-[45rem] text-center pb-24 text-secondary-onyx">
      {/* Header */}
      <div className="py-20 px-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-base/7 text-secondary-onyx/80">
          Last updated on November 2, 2024
        </p>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 text-left">
        <p className="mb-5">
        This privacy policy (“Policy”) describes how Hoetzin LLC (“Hoetzin,” “we,” “us,” or “our”) collects, protects, and uses the personally identifiable information (“Personal Information”) you (“User,” “you,” or “your”) may provide through the Hoetzin website (hoetzin.com) or in the course of purchasing any Hoetzin products or services (collectively, “Website”).
        The Policy also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control or to individuals that we do not employ or manage.
        </p>
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="mb-5 text-base/7 font-semibold text-secondary-onyx">
              {section.heading}
            </h2>
            <div
              className="prose prose-slate text-secondary-onyx/80"
              dangerouslySetInnerHTML={{ __html: section.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}