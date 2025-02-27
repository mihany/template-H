// import Image from "next/image";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from "@heroicons/react/20/solid";
import Overview from "@/app/components/courses/Overview";
import AdmissionProcess from "@/app/components/courses/AdmissionProcess";
import JobLanding from "@/app/components/courses/JobLanding";
import Financing from "@/app/components/courses/Financing";
import StartDate from "@/app/components/courses/StartDate";
import FAQ from "@/app/components/courses/FAQ";
import Curriculum from "@/app/components/courses/Curriculum";
import Link from 'next/link';

export const metadata = {
  title: "Web Development course | Hoetzin",
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

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Financing plan', href: '#' },
  { name: 'Our scholarships', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Students per cohort', value: '10' },
  { name: 'Hours', value: '600+' },
  { name: 'Hours per week', value: '20 or 40' },
  { name: 'Lifetime live cohort audit', value: 'Unlimited' },
]

const pages = [
  { name: 'Courses', href: '/courses', current: false },
  { name: 'Software Engineering Bootcamp', href: '#', current: true },
]

const sections = [
  { id: 'section1', name: 'Overview' },
  { id: 'section2', name: 'Curriculum' },
  { id: 'section3', name: 'How it Works' },
  { id: 'section4', name: 'Job Landing' },
  { id: 'section5', name: 'Start Date' },
  { id: 'section6', name: 'Financing Options' },
];

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

export default function SoftwareEngineeringCareerTrack() {
  return (
    <>
    {/* Hero section start */}
        <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-16">
          <img
            src="https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-5&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#09AE73] to-[#00FFBB] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#09AE73] to-[#00FFBB] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumbs starts here */}
            <nav className="flex pb-5 sm:pb-10" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="/" className="text-gray-100 hover:text-gray-200">
                    <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-100" aria-hidden="true" />
                    <a
                      href={page.href}
                      className="ml-4 text-sm font-medium text-gray-100 hover:text-gray-200"
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
              {/* Breadcrumbs ends here */}
            <div className="mx-auto max-w-2xl lg:mx-0">
              <Link
              href="/apply"
              className="inline-flex items-center gap-1 ml-2 font-semibold rounded-full text-xs bg-gray-100 px-2.5 py-1 text-gray-600 hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                </svg>
                  Accepting Applications
              </Link>
            
            <span className="inline-flex items-center gap-1 ml-2 font-semibold rounded-full px-2.5 py-1 bg-green-100 text-xs text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              Job Assistance
            </span>
            


              <h2 className="pt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Create cutting-edge web & AI applications with our Web Development program</h2>
              {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p> */}
              <ul className="my-9 space-y-3 text-sm text-white">
                  <li className="flex gap-x-2 items-start">
                    <svg className="h-6 w-6 flex-none fill-white stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    {/* <Image className="w-6 h-6 filter invert" 
                      src="/checkmark.svg" 
                      alt="Checkmark" 
                      width={50} 
                      height={50} /> */}

                    Master industry skills with expert guidance
                  </li>
                  <li className="flex gap-x-2 items-start">
                    <svg className="h-6 w-6 flex-none fill-white stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    Graduate in 4 to 7 months, flexible online
                  </li>
                  <li className="flex gap-x-2 items-start">
                    <svg className="h-6 w-6 flex-none fill-white stroke-secondary-lightGreen stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    Kickstart your career with hands-on support
                  </li>
              </ul>
              <a
                href="/apply"
                className="rounded-full bg-white px-3 py-3 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                >
                Apply now
              </a>
              {/* <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Apply now
              </button> */}
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div> */}
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        {/* Hero section end */}

        <div className="">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-10 bg-secondary-green shadow">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-start space-x-6 py-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                {section.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 1 */}
        <section id="section1" >
          <Overview />
          {/* <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
          <p className="mt-4 text-gray-600">
            This is the first section. Add your content here.
          </p> */}
        </section>

        {/* Section 2 */}
        <section id="section2" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            
            <Curriculum />
          </section>

          {/* Section 3 */}
          <section id="section3">
            {/* className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" */}
            {/* <h1 className="text-3xl font-bold text-gray-900">How it Works</h1>
            <p className="mt-4 text-gray-600">
              This is the third section. Add your content here.
            </p> */}
            <AdmissionProcess />
          </section>

          {/* Section 4 */}
          <section id="section4" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <JobLanding />
            {/* <h1 className="text-3xl font-bold text-gray-900">Job Landing</h1>
            <p className="mt-4 text-gray-600">
              This is the fourth section. Add your content here.
            </p> */}
          </section>

          {/* Section 5 */}
          
          <section id="section5">
          <StartDate />
            {/* <h1 className="text-3xl font-bold text-white">Start Date</h1>
            <p className="mt-4 text-gray-200">
              This is the fourth section. Add your content here.
            </p> */}
          </section>
          

          {/* Section 6 */}
          <section id="section6" className="bg-secondary-robinEggBlue/10 ">
          {/* <section id="section6" className="bg-secondary-lightGreenBG mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
            {/* <h1 className="text-3xl font-bold text-gray-900">Financing Options</h1>
            <p className="mt-4 text-gray-600">
              This is the fourth section. Add your content here.
            </p> */}
            <Financing />
          </section>

          {/* FAQ or your questions */}

        </div>

        {/* Here the faq starts */}
        <FAQ faqs={faqs} />
        {/* Here the faq ends */}
    </>
  );
}


// import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

// const links = [
//     { name: 'Open roles', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
// ]
// const stats = [
//     { name: 'Offices worldwide', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
// ]

// const pages = [
//     { name: 'Courses', href: '/courses', current: false },
//     { name: 'Cyber Security Bootcamp', href: '#', current: true },
// ]
  
// export default function SoftwareEngineeringCareerTrack() {
//     return (
//         <>
//         {/* Hero section start */}
//             <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-12">
//         <img
//           src="https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-5&exp=15&blend-mode=multiply"
//           alt=""
//           className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
//         />
//         <div
//           className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//           aria-hidden="true"
//         >
//           <div
//             className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <div
//           className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//           aria-hidden="true"
//         >
//           <div
//             className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           {/* Breadcrumbs starts here */}
//           <nav className="flex pb-10" aria-label="Breadcrumb">
//           <ol role="list" className="flex items-center space-x-4">
//             <li>
//               <div>
//                 <a href="/" className="text-gray-100 hover:text-gray-200">
//                   <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
//                   <span className="sr-only">Home</span>
//                 </a>
//               </div>
//             </li>
//             {pages.map((page) => (
//               <li key={page.name}>
//                 <div className="flex items-center">
//                   <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-100" aria-hidden="true" />
//                   <a
//                     href={page.href}
//                     className="ml-4 text-sm font-medium text-gray-100 hover:text-gray-200"
//                     aria-current={page.current ? 'page' : undefined}
//                   >
//                     {page.name}
//                   </a>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </nav>
//             {/* Breadcrumbs ends here */}
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Cyber Security</h2>
//             <p className="mt-6 text-lg leading-8 text-gray-300">
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//               fugiat veniam occaecat fugiat aliqua.
//             </p>
//           </div>
//           <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//               {links.map((link) => (
//                 <a key={link.name} href={link.href}>
//                   {link.name} <span aria-hidden="true">&rarr;</span>
//                 </a>
//               ))}
//             </div>
//             <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//               {stats.map((stat) => (
//                 <div key={stat.name} className="flex flex-col-reverse">
//                   <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
//                   <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//       {/* Hero section end */}
//           {/* <h1>Cyber Security Track Course Page</h1>
//           <p>Welcome to Cyber Security Track</p>
//           <Image
//             className="dark:invert"
//             src="./images/imageplaceholder.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           /> */}
//         </>
//       );
// }