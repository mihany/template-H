import TestComp from "../components/TestComp";


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
        <div className=" text-secondary-onyx">

          <div className="max-w-7xl mx-auto px-1 sm:px-7">
            
            <TestComp />
          </div>
        
        

        </div>
          {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 p-6 lg:p-24">
            <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2">
                <p className="text-xl leading-8 text-secondary-onyx/70">
                  The story of Hoetzin began in Cairo, Egypt in 2024.
                </p>
                <h2 className="mt-10 text-3xl font-bold tracking-tight sm:text-4xl">
                  WHY Hoetzin?
                </h2>
                <div className="mt-10 max-w-xl text-base leading-7 text-secondary-onyx/85">

                  <div className="mx-auto max-w-3xl">
                    Content goes here
                    <h1>Apply to Hoetzin Coding Bootcamp</h1>
                    <p>Welcome to Hoetzin Coding Bootcamp.</p>
                    <p>check the voucher and print out the discount</p>
                    <p>lead to the stripe page to pay $49</p>
                  </div>

                </div>
              </div>
              <div className="pt-4 sm:pt-0 lg:col-span-1 lg:sticky lg:top-24 lg:self-start text-secondary-onyx">
                <div className="space-y-8">
                  <dl className="w-full space-y-8">
                    
                      <div className="border rounded-xl p-4 flex flex-col-reverse gap-y-4">
                        <dt className="text-base leading-7 text-secondary-onyx/70">
                          stat.label
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-Prussian-Blue">
                          stat.value
                        </dd>
                      </div>
                    
                  </dl>
                </div>
              </div>
            </div>
          </div> */}
          
      </>

    );
  }
  