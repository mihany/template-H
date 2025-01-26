export const metadata = {
    title: "Tracks at Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
      title: "Tracks at Hoetzin",
      description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
      url: "https://www.hoetzin.com/about",
      images: [
        {
          url: "https://www.hoetzin.com/public/about-cover.jpg",
          width: 800,
          height: 600,
          alt: "Tracks at Hoetzin",
        },
      ],
    },
  };
  
 
  export default function Course() {
    return (
      <>
        <div className="relative overflow-hidden bg-white py-9">
          {/* Decorative background image and gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white/75" />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white" />
          </div>

          {/* Callout */}
            <section
              aria-labelledby="sale-heading"
              className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Get 25% off during our one-time sale
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                  Most of our products are limited releases that won't come back. Get your favorite items while they're in
                  stock.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Find your new career
                </a>
              </div>
            </section>
          </div>
          {/* stats about the tech field courses start*/}
          <div className="bg-secondary-lightTurquoise/15 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  How can Hoetzin transform your life?
                </h2>
                <p className="mt-6 text-base/7 text-gray-600">
                  Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
                  purus nibh cursus sit eu in id. Integer vel nibh.
                </p>
              </div>
              <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-grey p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                  <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
                    <p className="mt-2 text-base/7 text-gray-600">Vel labore deleniti veniam consequuntur sunt nobis.</p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-green p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                  <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight text-secondary-grey">
                      We’re proud that our customers have made over $8 billion in total revenue.
                    </p>
                    <p className="mt-2 text-base/7 text-secondary-grey">
                      Eu duis porta aliquam ornare. Elementum eget magna egestas.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-turquoise p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                  <p className="flex-none text-3xl font-bold tracking-tight text-secondary-grey">401,093</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight text-secondary-grey">Transactions this year</p>
                    <p className="mt-2 text-base/7 text-secondary-grey">
                      Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* stats about the tech field courses end*/}
          {/* join our courses start*/}

          <div className="relative isolate overflow-hidden bg-secondary-green">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                  Join our game-changer bootcamp
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                  commodo do ea.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Apply Now
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            >
              <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#B9f0E7" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          {/* join our courses end*/}

          
      </>
    );
  }
  