export const metadata = {
  title: "Terms and Conditions",
  description:
    "Understand the terms and conditions for using Hoetzin's services and ensure compliance with our policies.",
  openGraph: {
    title: "Terms and Conditions",
    description:
      "Understand the terms and conditions for using Hoetzin's services and ensure compliance with our policies.",
    url: "https://www.hoetzin.com/terms-and-conditions",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "Terms and Conditions",
      },
    ],
  },
};

// Generate an ID from a section title
const generateId = (title) => title.toLowerCase().replace(/\s+/g, "-");

// Sections array
const sections = [
  {
    title: "OUR SERVICES",
    content: `
      <p class="text-1xl mb-2">
        The information provided when using the Services is not intended for
        distribution to or use by any person or entity in any jurisdiction or
        country where such distribution or use would be contrary to law or
        regulation or which would subject us to any registration requirement
        within such jurisdiction or country.
      </p>
    `,
  },
  {
    title: "INTELLECTUAL PROPERTY RIGHTS",
    content: `
      <p class="text-1xl mb-2">
        We are the owner or the licensee of all intellectual property rights in
        our Services, including all source code, databases, functionality,
        software, website designs, audio, video, text, photographs, and graphics
        in the Services (collectively, the "Content").
      </p>
    `,
  },
  {
    title: "USER REPRESENTATIONS",
    content: `
      <p class="text-1xl mb-2">
        By using the Services, you represent and warrant that all registration
        information you submit will be true, accurate, current, and complete.
      </p>
    `,
  },
  // Add more sections as needed
];

export default function TermsAndConditions() {
  return (
    <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
        {/* Sticky Sidebar */}
        <div className="md:w-64 w-full bg-white shadow-lg p-4">
          <div className="sticky top-0 max-h-screen overflow-auto hide-scrollbar">
            <h2 className="text-2xl font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={generateId(section.title)}>
                  <a
                    href={`#${generateId(section.title)}`}
                    className="text-blue-500 hover:underline"
                  >{`${index + 1}. ${section.title}`}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-1 text-center">
            Terms and Conditions
          </h1>
          <h3 className="text-1xl font-bold mb-6 text-center">
            Last updated: December 15, 2024
          </h3>

          {sections.map((section, index) => (
            <section
              id={generateId(section.title)}
              key={generateId(section.title)}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">{`${index + 1}. ${
                section.title
              }`}</h2>
              <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}