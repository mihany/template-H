export const metadata = {
    title: "Apply to Hoetzin Coding Bootcamp",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
      title: "Apply to Hoetzin Coding Bootcamp",
      description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
      url: "https://www.hoetzin.com/about",
      images: [
        {
          url: "https://www.hoetzin.com/public/about-cover.jpg",
          width: 800,
          height: 600,
          alt: "Apply to Hoetzin Coding Bootcamp",
        },
      ],
    },
  };
  
  export default function Apply() {
    return (
      <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="mx-auto max-w-3xl">
              {/* Content goes here */}
              <h1>Apply to Hoetzin Coding Bootcamp</h1>
              <p>Welcome to Hoetzin Coding Bootcamp.</p>
              <p>check the voucher and print out the discount</p>
              <p>lead to the stripe page to pay $49</p>
            </div>
          </div>
      </>

    );
  }
  