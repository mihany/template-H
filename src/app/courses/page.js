
import CourseCards from "../components/CoursesCards";
import AdmissionProcess from "../components/AdmissionProcess";
import ContactProgramAdvisor from "../components/ContactProgramAdvisor";
import FAQ from "../components/courses/FAQ";
// import { Terminal } from "../components/Terminal";

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
                alt="background image"
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white/75" />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white" />
          </div>

          {/* Callout */}
            <section
              aria-labelledby="sale-heading"
              className="z-10 relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-secondary-onyx sm:text-5xl lg:text-6xl">
                  Get 50% off when you join the golden bootcamp
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-xl text-secondary-onyx/80">
                  Only limited spots are available. Don't miss out
                </p>
                <a
                  href="/apply"
                  className="mt-6 inline-block w-full rounded-full border border-transparent bg-secondary-onyx px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Find your new career
                </a>
              </div>
            </section>
          </div>
          {/* stats about the tech field courses start*/}
          <div id="transformyourlife" className="bg-secondary-robinEggBlue/5 text-secondary-onyx py-24 sm:py-32">
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
                  <p className="flex-none text-3xl sm:text-5xl font-bold tracking-tight">$15,082</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight ">
                      Avergae increase
                    </p>
                    <p className="mt-2 text-base/7 ">
                      The average salary increase that a graduate achieves in their first role after graduation.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl text-white bg-secondary-orangeCTA p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                  <p className="flex-none text-3xl sm:text-5xl font-bold tracking-tight">90 days</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-2xl font-semibold tracking-tight ">Land your job within days</p>
                    <p className="mt-2 text-base/7 ">
                      The average amount of time it takes a graduate to land their first job in their new field after graduation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* stats about the tech field courses end*/}
          

          {/* The course catalog start */}
          <section id="courses" className="py-6 sm:py-8 text-white bg-secondary-darkCyan">
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
          
          {/* Admission Process starts here */}
            <AdmissionProcess />
          {/* Admission Process starts here */}

          {/* The schedule starts here */}
          <section id="hoetzin-schedule" className="py-10 bg-secondary-darkCyan text-white">
            <div className="mx-auto max-w-7xl px-6 ">
              <div className="mx-auto max-w-2xl text-center pb-6">
                <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                  Boost your productivity. Start using our app today.
                </h2>
                
                <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                  commodo do ea.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="flex items-center justify-center col-span-4 lg:col-span-6">
                    {/* <div className="overflow-hidden rounded-2xl max-w-md bg-white text-slate-500 shadow-md shadow-slate-200">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="card image"
                          className="aspect-auto w-full"
                        />
                      </figure>
                      <div className="p-6">
                        <header className="">
                          <h3 className="text-xl font-medium text-slate-700">
                            Part-time schedule
                          </h3>
                          <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
                        </header>
                      </div>
                    </div> */}

                    <div className="flex max-w-xl flex-col items-start justify-between">
                      <div className=" relative w-[calc(100%-1.5rem)] mx-auto sm:w-96">
                        <figure>
                        <img
                          alt="some text"
                          src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                        />
                        </figure>
                        {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" /> */}
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-2xl font-semibold">
                            
                            Part-time schedule
                        </h3>

                        <ul className="my-5 space-y-3 text-base text-white">
                            <li className="flex gap-x-2 items-start">
                              <svg className="h-6 w-6 flex-none fill-transparent stroke-secondary-whiteSmoke stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="11" />
                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                              </svg>

                              4 Days a week / 20 hours a week
                            </li>
                            <li className="flex gap-x-2 items-start">
                              <svg className="h-6 w-6 flex-none fill-transparent stroke-secondary-whiteSmoke stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="11" />
                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                              </svg>
                              Live session with the instructor and TAs
                            </li>
                            <li className="flex gap-x-2 items-start">
                              <svg className="h-6 w-6 flex-none fill-transparent stroke-secondary-whiteSmoke stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="11" />
                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                              </svg>
                              Get support 24/7 a week
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 lg:col-span-6">
                <div className="flex max-w-xl flex-col items-start justify-between">
                      <div className="w-[calc(100%-1.5rem)] mx-auto sm:w-96">
                        <figure>
                        <img
                          alt="some text"
                          src="https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                        />
                        </figure>
                        {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" /> */}
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-2xl font-semibold">
                            <span className="absolute inset-0" />
                            Full-time schedule
                        </h3>

                        <ul className="my-5 space-y-3 text-base text-white">
                            <li className="flex gap-x-2 items-start">
                              <svg className="h-6 w-6 flex-none fill-transparent stroke-secondary-whiteSmoke stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="11" />
                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                              </svg>

                              5 Days a week / 40 hours a week
                            </li>
                            <li className="flex gap-x-2 items-start">
                              <svg className="h-6 w-6 flex-none fill-transparent stroke-secondary-whiteSmoke stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="11" />
                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                              </svg>
                              Live session with the instructor and TAs
                            </li>
                            <li className="flex gap-x-2 items-start">
                              <svg className="h-6 w-6 flex-none fill-transparent stroke-secondary-whiteSmoke stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="11" />
                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                              </svg>
                              Get support 24/7 a week
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          {/* The schedule starts here */}

          {/* HOW WE HELP YOU starts here */}
      
          <section className="bg-secondary-robinEggBlue/5 py-6">  
            {/*<!-- Component: Simple Table --> */}
                      {/* Comparison starts here */}
          <div className="max-w-4xl mx-auto px-6 py-10">
                <h2 className="py-4` text-4xl text-center font-semibold tracking-tight text-balance sm:text-5xl">
                  How Hoetzin stands out. No questions asked.
                </h2>
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
          <div className="bg-secondary-robinEggBlue/5">
            <ContactProgramAdvisor />
          </div>
          
          {/* Here the Contact Student Advisor ends */}

          {/* Here the faq starts */}
            <FAQ faqs={faqs} />
          {/* Here the faq ends */}
          
      </>
    );
  }
  