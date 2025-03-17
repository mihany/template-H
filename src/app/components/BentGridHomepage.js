export default function BentGridHomepage() {
    return (
        <>
          <div className="bg-secondary-robinEggBlue/10 py-8 sm:py-10">
        <div className="mx-auto max-w-2xl px-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-secondary-robinEggBlue">General statistics on graduates</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-secondary-onyx sm:text-5xl">
            🚀 Build a Tech Career That Changes Your Future
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="p-7 py-8">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-secondary-onyx max-lg:text-center">
                    Fast-Track Your Way into Tech
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-secondary-onyx/85 ">
                    Our immersive bootcamps are designed to take beginners and career changers from learning to landing a tech job in just weeks. Gain hands-on experience, work on real-world projects, and develop the skills that top companies demand.
                  </p>
                  <ul role="list" className="mt-2 space-y-2 text-sm/6 text-secondary-onyx/85 xl:mt-6">
                  <li className="flex gap-x-3">
                        {/* <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-secondary-lightGreen" /> */}
                        <svg className="h-6 w-6 flex-none fill-white stroke-secondary-robinEggBlue stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Master in-demand tech skills in weeks, not years
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-white stroke-secondary-robinEggBlue stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Learn from industry experts & mentors
                      </li>
                      
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-white stroke-secondary-robinEggBlue stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Build a portfolio that showcases your expertise
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-white stroke-secondary-robinEggBlue stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Career coaching & job search support included
                      </li>
                  </ul>
                  <p className="mt-2 max-w-lg text-lg/6 font-medium text-secondary-onyx/85 max-lg:text-center">
                    Your journey to a high-paying tech career starts here!
                  </p>
                </div>

                
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-1 ">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div 
              className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]
              ">
                {/* bg-[length:12rem_7rem] bg-[10rem_7rem] bg-no-repeat bg-[url('/images/growing-graph-up.png')] */}
                <div className="p-7">
                  <p className="bg-gradient-to-r from-secondary-green via-secondary-lightGreen to-secondary-aquaMarine inline-block text-transparent bg-clip-text">
                    <span className="mt-2 text-4xl font-medium tracking-tight max-lg:text-center">+$25K</span> annually
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-secondary-onyx/85 ">
                    Tech jobs offer some of the highest salaries in any industry, and companies are actively hiring skilled professionals. Bootcamp graduates across the industry see salary increases of $25K+ annually, and with the right skills, you could be next!
                  </p>
                </div>
                {/* <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div> */}
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="p-7">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-secondary-onyx max-lg:text-center">
                    How Much Can You Earn in Tech?
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-secondary-onyx/85 max-lg:text-center">
                    The tech industry is booming, and salaries reflect the high demand for skilled professionals. While salaries vary by role and experience, entry-level positions in Web Development, Data Analytics, Cybersecurity, and AI start at $65K–$85K per year—with rapid growth potential.
                  </p>
                  
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="p-8">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-secondary-onyx max-lg:text-center">
                    Career paths open up to you
                  </p>
                  {/* <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                  </p> */}
                  <ul role="list" className="mt-8 space-y-3 text-sm/6 text-secondary-onyx/85 xl:mt-10">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-white stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Software development jobs: Software Engineer, Software Developer, Back-end Developer, Front-end Developer, Full-stack Developer...
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-white stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Tech-related jobs: Product Manager, Ops Specialist, Customer Success Manager, Technical Project Manager, Tech Consultant, Generative AI Specialist, AI Product Manager…
                      </li>
                  </ul>
                </div>
                
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>

          </div>
        </div>
      </div>
        </>
    )
  }
  