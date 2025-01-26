import Image from "next/image";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Overview from "@/app/components/courses/Overview";
import AdmissionProcess from "@/app/components/courses/AdmissionProcess";
import JobLanding from "@/app/components/courses/JobLanding";
import Financing from "@/app/components/courses/Financing";
import StartDate from "@/app/components/courses/StartDate";
import FAQ from "@/app/components/courses/FAQ"
import Curriculum from "@/app/components/courses/Curriculum"


const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Students per cohort', value: '10' },
  { name: 'Hours', value: '600+' },
  { name: 'Hours per week', value: '20/40' },
  { name: 'Lifetime live cohort audit', value: 'Unlimited' },
]

const pages = [
  { name: 'Courses', href: '/courses', current: false },
  { name: 'Cyber Security Bootcamp', href: '#', current: true },
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

export default function CyberSecurityCareerTrack() {
  return (
    <>
    {/* Hero section start */}
        <div className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-20">
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
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
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
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumbs starts here */}
            <nav className="flex pb-10" aria-label="Breadcrumb">
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
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Secure your future with our Cyber Security Bootcamp. Enroll today!</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
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
        <div className="sticky top-0 z-10 bg-gray-800 shadow">
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
          <section id="section3" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
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
          <section id="section6" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
