
import CourseCards from "@/app/components/CoursesCards";
import ContactProgramAdvisor from "@/app/components/ContactProgramAdvisor";
import FAQ from "@/app/components/courses/FAQ";

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
  
  const features = [
    {
      name: 'Invite team members',
      description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
    },
    { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
    {
      name: 'Keyboard shortcuts',
      description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
    },
    { name: 'Calendars', description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.' },
    { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
    { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
    { name: 'Reporting', description: 'Eos laudantium repellat sed architecto earum unde incidunt.' },
    { name: 'Mobile app', description: 'Nulla est saepe accusamus nostrum est est fugit omnis.' },
  ]

  const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Egypt?",
        answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about USA?",
        answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about UK?",
        answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Germany?",
        answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
    ]
  export default function Courses() {
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
                  className="mt-6 inline-block w-full rounded-full border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Find your new career
                </a>
              </div>
            </section>
          </div>
          {/* stats about the tech field courses start*/}
          <div className="bg-secondary-robinEggBlue/5 text-secondary-onyx py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                  How can Hoetzin transform your life?
                </h2>
                <p className="mt-6 text-base/7 text-secondary-onyx/80">
                  Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras
                  purus nibh cursus sit eu in id. Integer vel nibh.
                </p>
              </div>
              <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end text-white">
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-robinEggBlue p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                  <p className="flex-none text-3xl sm:text-5xl font-bold tracking-tight ">250k</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight ">Users on the platform</p>
                    <p className="mt-2 text-base/7">Vel labore deleniti veniam consequuntur sunt nobis.</p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-darkCyan p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                  <p className="flex-none text-3xl sm:text-5xl font-bold tracking-tight text-center">$8.9 billion</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight ">
                      We’re proud that our customers have made over $8 billion in total revenue.
                    </p>
                    <p className="mt-2 text-base/7 ">
                      Eu duis porta aliquam ornare. Elementum eget magna egestas.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl text-white bg-secondary-orangeCTA p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                  <p className="flex-none text-3xl sm:text-5xl font-bold tracking-tight">401,093</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-2xl font-semibold tracking-tight ">Transactions this year</p>
                    <p className="mt-2 text-base/7 ">
                      Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* stats about the tech field courses end*/}
          

          {/* The course catalog start */}
          <section className="py-6 sm:py-8 text-white bg-secondary-darkCyan">
            <div className="mx-auto max-w-7xl my-6 px-6 lg:px-8">
              <div className="mx-auto max-w-3xl lg:mx-0">
                <p className="text-base/7 font-semibold">With Hoetzin</p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">Choose your course and explore a new career path</h2>
                <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
                Want a new career? Ok, let’s do it. In as little as 6 months, you’ll learn the tools, skills, and insights to get the job you want—all with an expert team of humans supporting your journey
                </p>
              </div>
            </div>

            <CourseCards />

          </section>
          
          {/* The course catalog end */}
          {/* HOW WE HELP YOU starts here */}
          <div className="bg-secondary-robinEggBlue/5 text-secondary-onyx py-24 sm:py-32" id="howhoetzinhelps">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div className="col-span-2">
                  <h2 className="text-base/7 font-semibold text-secondary-orangeCTA">HOW WE HELP YOU</h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-secondary-darkCyan">
                  Hoetzin Circle: the personalized team behind your success story
                  </p>
                  <p className="mt-6 text-base/7 text-secondary-onyx/80">
                  Learning on your own falls short for so many people. That’s why Springboard surrounds you with a circle of human support proven to help guide you through your learning journey.
                  </p>
                  <p className="mt-6 text-base/7 text-secondary-onyx/80">
                  From curriculum and assignment questions to time management and career goals, there’s a community of people in your corner the minute you enroll.
                  </p>
                </div>
                <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9 ">
                      <dt className="font-semibold text-secondary-darkCyan">
                        <svg className="absolute top-1 left-0 h-6 w-6 flex-none fill-white stroke-secondary-orangeCTA stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        {feature.name}
                      </dt>
                      <dd className="mt-2">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* HOW WE HELP YOU starts here */}
      
          <section className="bg-secondary-robinEggBlue/5 py-6">  
            {/*<!-- Component: Simple Table --> */}
                      {/* Comparison starts here */}
          <div className="max-w-4xl mx-auto px-6 py-10">
            {/* Header */}
            <p className="text-center text-gray-600 text-lg">
              You don’t have to go it alone. You learn on your terms, and you have dedicated pros that work with you before you enroll, during your coursework, and after you graduate.
            </p>

            {/* Table Container */}
            <div className="mt-6 overflow-hidden rounded-t-lg sm:border border-gray-400">
              
              {/* Table Header - Visible on Desktop */}
              <div className="hidden sm:grid grid-cols-3 text-secondary-onyx font-semibold text-center">
                <div className="px-4 py-3">YouTube / Online Video Courses</div>
                <div className="px-4 py-3 text-white bg-secondary-darkCyan/70">Hoetzin</div>
                <div className="px-4 py-3">Other Bootcamps + Degree Programs</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-secondary-onyx/30 text-secondary-onyx">
                {[
                  ["Learn on demand without human support", "Online learning flexibly with 1:1 human support", "Learn through live instruction at specific times"],
                  ["No/limited accountability", "Personal mentor and career coaching video calls to keep you on track", "Personal support and accountability through instruction and grading"],
                  ["Flexible - learn on your time", "Flexibility - learn on your time", "Scheduled classes"],
                  ["Part-time; keep your current job", "Part-time; keep your current job while preparing for your new career", "Full-time commitment"],
                  ["0-$", "$$", "$$$"]
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 text-center">
                    {/* Mobile View: Labels for each row */}
                    <div className="sm:hidden font-semibold text-lg pb-2">YouTube / Online Video Courses</div>
                    <div className="px-4 py-4 font-semibold sm:font-normal sm:bg-white">{row[0]}</div>
                    
                    <div className="sm:hidden text-white bg-secondary-darkCyan font-semibold text-lg pt-4 pb-2">Hoetzin</div>
                    <div className="px-4 py-4 text-white bg-secondary-darkCyan">{row[1]}</div>
                    
                    <div className="sm:hidden font-semibold text-lg pt-4 pb-2">Other Bootcamps + Degree Programs</div>
                    <div className="px-4 py-4 sm:bg-white">{row[2]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            {/*<!-- End Simple Table --> */}
          </section>
          {/* Comparison ends here */}

          {/* Here the Contact Student Advisor starts */}
          <ContactProgramAdvisor />
          {/* Here the Contact Student Advisor ends */}

          {/* Here the faq starts */}
            <FAQ faqs={faqs} />
          {/* Here the faq ends */}
          
      </>
    );
  }
  