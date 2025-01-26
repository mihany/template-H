import { CheckIcon } from '@heroicons/react/20/solid';

export default function Overview() {
    return (
      <div className="bg-secondary-lightGreenBG/15 py-8 sm:py-10">
        <div className="mx-auto max-w-2xl px-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-secondary-lightGreen">Overview</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Build a Tech Career That Changes Your Future
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="p-8">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Become a Software Developer in weeks
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Learn to build web and AI applications from scratch, setting you up for success in cutting-edge companies or your next AI ventures.
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10">
                  <li className="flex gap-x-3">
                        {/* <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-secondary-lightGreen" /> */}
                      <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                        Master front-end technologies to create interactive apps
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Learn back-end development and databases
                      </li>
                      
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Build AI features into your web applications
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Develop a strong portfolio of real-world projects
                      </li>
                  </ul>
                </div>

                
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="p-8">
                  <p><span className="mt-2 text-4xl font-medium tracking-tight text-gray-950 max-lg:text-center">+$25K</span> annually</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Average salary increase of software engineers who completed online bootcamp and provided pre- and post-course salaries
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
                <div className="p-8">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    What is the average Web Development salary?
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                  
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="p-8">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Career paths open up to you
                  </p>
                  {/* <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                  </p> */}
                  <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="11" />
                          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                        </svg>
                        Software development jobs: Software Engineer, Software Developer, Back-end Developer, Front-end Developer, Full-stack Developer...
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
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
    );
}
  