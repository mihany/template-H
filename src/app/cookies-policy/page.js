export const metadata = {
  title: "Cookies Policy",
  description:
    "Learn how Hoetzin uses cookies to enhance your experience and manage your preferences.",
  openGraph: {
    title: "Cookies Policy",
    description:
      "Learn how Hoetzin uses cookies to enhance your experience and manage your preferences.",
    url: "https://www.hoetzin.com/cookies-policy",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "Cookies Policy",
      },
    ],
  },
};

export default function CookiesPolicy() {
  const sections = [
    {
      heading: "What are cookies?",
      content: `
        Cookies are small text files stored on your device (computer, tablet, or mobile) 
        by a website you visit. They help websites recognize your device, store user 
        preferences, and improve overall functionality.
      `,
    },
    {
      heading: "How we use cookies",
      content: `
        Hoetzin uses cookies to:
        <ul class="list-disc pl-5 space-y-2">
          <li>Analyze user interactions and improve website functionality.</li>
          <li>Personalize your browsing experience.</li>
          <li>Provide relevant advertisements based on your preferences.</li>
        </ul>
      `,
    },
    {
      heading: "Types of cookies we use",
      content: `
        We use the following types of cookies:
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Essential cookies:</strong> These are necessary for the website to function correctly.</li>
          <li><strong>Performance cookies:</strong> These help us analyze website traffic and performance.</li>
          <li><strong>Advertising cookies:</strong> These track user activity to show personalized ads.</li>
        </ul>
      `,
    },
    {
      heading: "Managing cookies",
      content: `
        You can manage or disable cookies in your browser settings. However, disabling certain cookies 
        may affect the functionality of our website.
        <br/>
        Visit the following links for more information on managing cookies in your browser:
        <ul class="list-disc pl-5 space-y-2">
          <li><a href="https://support.google.com/chrome/answer/95647" class="text-indigo-600 hover:underline">Google Chrome</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" class="text-indigo-600 hover:underline">Safari</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" class="text-indigo-600 hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge" class="text-indigo-600 hover:underline">Microsoft Edge</a></li>
        </ul>
      `,
    },
    {
      heading: "Contact information",
      content: `
        If you have any questions about our Cookies Policy, please contact us at 
        <a href="mailto:support@hoetzin.com" class="text-indigo-600 hover:underline">support@hoetzin.com</a>.
      `,
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      {/* Header */}
      <div className="px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Cookies Policy
          </h1>
          <p className="mt-4 text-base text-gray-600">Last updated on November 2, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 px-6 lg:px-8">
        <div className="prose prose-lg prose-slate mx-auto max-w-[45rem]">
          {sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-base/7 font-semibold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: section.content }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}