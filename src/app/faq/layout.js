export const metadata = {
    title: "FAQ",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
      title: "FAQ",
      description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
      url: "https://www.hoetzin.com/faq",
      images: [
        {
          url: "https://www.hoetzin.com/public/about-cover.jpg",
          width: 800,
          height: 600,
          alt: "FAQ",
        },
      ],
    },
  };
  
  export default function FAQLayout({ children }) {
    return <>{children}</>;
  }