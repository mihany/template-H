export default function BenefitsHomepage() {
  return (
    <>
    <div className="bg-secondary-darkCyan py-14 sm:py-16 text-secondary-onyx">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-base/7 font-semibold text-secondary-robinEggBlue">Deploy faster</h2> */}
        <h2 className="text-center mt-2  text-4xl font-semibold tracking-tight text-pretty text-secondary-whiteSmoke sm:text-5xl">
          Everything you need to know about our Bootcamp
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-secondary-whiteSmoke max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-60 object-cover object-left"
              />
              <div className="p-8 pt-4">
                <h2 className="text-xl font-semibold">Break into tech from any background</h2>
                <p className="mt-2 max-w-lg text-base/6 text-secondary-onyx/70">
                  Learn tech skills from scratch with expert-designed courses that equip you with in-demand knowledge to land your dream job—even as a beginner.
                </p>
                <div className="mt-2 flex justify-end gap-x-6">
                <a href="/courses/#transformyourlife" className="text-sm/6 font-semibold text-secondary-orangeCTA">
                      Find out more <span aria-hidden="true">→</span>
                </a>
                {/* <a
                    href="/contact"
                    className="inline-flex rounded-md bg-secondary-orangeBuff px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-robinEggBlue/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-robinEggBlue/85"
                  >
                    Find out more
                  </a> */}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>

          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-secondary-whiteSmoke lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-60 object-cover object-left lg:object-right"
              />
              <div className="p-8 pt-4">
                <h2 className="text-xl font-semibold">Get practical experience with our cutting-edge curriculum</h2>
                <p className="mt-2 max-w-lg text-base/6 text-secondary-onyx/70">
                  Stay ahead in tech with our AI-integrated curriculum, designed by experts to equip you with the latest tools, skills, and knowledge to land your dream job.
                </p>
                <div className="mt-2 flex justify-end gap-x-6">
                <a href="/courses/#courses" className="text-sm/6 font-semibold text-secondary-orangeCTA">
                      Find out more <span aria-hidden="true">→</span>
                </a>
                {/* <a
                    href="/courses#howhoetzinhelps"
                    className="inline-flex rounded-md bg-secondary-orangeBuff px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-robinEggBlue/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-robinEggBlue/85"
                  >
                    Find your new career
                  </a> */}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem]" />
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-secondary-whiteSmoke lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-60 object-cover object-left"
              />
              <div className="p-8 pt-4">
                <h2 className="text-xl font-semibold">Navigate your next steps</h2>
                <p className="mt-2 max-w-lg text-base/6 text-secondary-onyx/70">
                  Learn from industry experts with mentor guidance, tutor feedback, and 1:1 career support to refine your resume, ace interviews, and land your dream job.
                </p>
                <div className="mt-2 flex justify-end gap-x-6">
                <a href="/scholarships" className="text-sm/6 font-semibold text-secondary-orangeCTA">
                      Find out more <span aria-hidden="true">→</span>
                </a>
                {/* <a
                    href="/contact"
                    className="inline-flex rounded-md bg-secondary-orangeBuff px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-robinEggBlue/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-robinEggBlue/85"
                  >
                    Meet our mentors
                  </a> */}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-secondary-whiteSmoke" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-60 object-cover"
              />
              <div className="p-8 pt-4">
                <h2 className="text-xl font-semibold">Shape your studies around your life</h2>
                <p className="mt-2 max-w-lg text-base/6 text-secondary-onyx/70">
                  Learn online with flexible full-time or part-time schedules—no commute, no rigid calendars, just structured remote learning that fits your life.
                {/* Swap the commute to class for the flexibility of remote learning. Our career-change platform is built with busy schedules in mind, so you can work to your own timetable—not rigid class calendars. No need to quit your job or put life on hold, since you decide when and where you learn. */}
                </p>
                <div className="mt-2 flex justify-end gap-x-6">
                <a href="/courses/#hoetzin-schedule" className="text-sm/6 font-semibold text-secondary-orangeCTA">
                      Find out more <span aria-hidden="true">→</span>
                </a>
                {/* <a
                    href="/contact"
                    className="inline-flex rounded-md bg-secondary-orangeBuff px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-robinEggBlue/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-robinEggBlue/85"
                  >
                    How it works
                  </a> */}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-secondary-whiteSmoke max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1593132517397-ceb31d77194a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-60 object-cover"
              />
              <div className="p-8 pt-4">
                <h2 className="text-xl font-semibold">Get support anytime</h2>
                <p className="mt-2 max-w-lg text-base/6 text-secondary-onyx/70">
                  Get 24/7 support during your Bootcamp and ongoing career guidance after graduation until you land your job—all with structured remote learning.
                </p>
                <div className="mt-2 flex justify-end gap-x-6">
                <a href="/scholarships" className="text-sm/6 font-semibold text-secondary-orangeCTA">
                      Find out more <span aria-hidden="true">→</span>
                </a>
                {/* <a
                    href="/contact"
                    className="inline-flex rounded-md bg-secondary-orangeCTA px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-robinEggBlue/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-robinEggBlue/85"
                  >
                    Get a call
                  </a> */}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

// const features = [
//   {
//     name: 'Push to deploy.',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'SSL certificates.',
//     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Database backups.',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ServerIcon,
//   },
// ]

// export default function BenefitsHomepage() {
//   return (
//     <div className="overflow-hidden bg-secondary-darkCyan py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="lg:pt-4 lg:pr-8">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base/7 font-semibold text-secondary-whiteSmoke">Deploy faster</h2>
//               <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
//                 A better workflow
//               </p>
//               <p className="mt-6 text-lg/8 text-white">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
//                 iste dolor cupiditate blanditiis ratione.
//               </p>
//               <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-white lg:max-w-none">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative pl-9">
//                     <dt className="inline font-semibold text-white">
//                       <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-secondary-whiteSmoke" />
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline">{feature.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//           <div className="max-w-full">
//           <img
//             alt="Product screenshot"
//             src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             width={2432}
//             height={1442}
//             className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
//           />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

