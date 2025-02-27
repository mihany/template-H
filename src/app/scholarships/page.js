export const metadata = {
    title: "Scholarships",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
      title: "scholarships",
      description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
      url: "https://www.hoetzin.com/about",
      images: [
        {
          url: "https://www.hoetzin.com/public/about-cover.jpg",
          width: 800,
          height: 600,
          alt: "scholarships",
        },
      ],
    },
  };
 
import { Fragment } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import ContactProgramAdvisor from "@/app/components/ContactProgramAdvisor";
import UpcomingCohort from "@/app/components/UpcomingCohort";
import Newsletter from "@/app/components/Newsletter";


const tabs = [
  {
    name: 'Diversity Scholarship',
    features: [
      {
        name: 'You\'re a star',
        description:
          'The Hoetzin Diversity Scholarship is designed to support and empower individuals from underrepresented communities by providing financial assistance to pursue a career in technology. We believe that diversity enriches the learning experience and fosters innovation. This scholarship aims to create more inclusive opportunities in the tech industry, ensuring that talented individuals from all backgrounds have the chance to succeed.',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
        eligibilitycriteria: [
          'Applicants must be from an underrepresented community, including but not limited to racial and ethnic minorities, and persons with disabilities.',
          'Must demonstrate financial need.',
          'Must show a strong commitment to personal and professional growth in the tech industry.',
          'Applicants must have applied to or be enrolled in a Hoetzin Bootcamp program.',
        ],
        scholarshipbenefits: [
          '25% Tuition Coverage: Receive a scholarship covering up to 25% of the tuition for any of the Hoetzin Bootcamp programs.',
          'Access to exclusive mentorship opportunities with industry professionals.',
          'Priority consideration for career support services, including resume building, interview preparation, and job placement assistance.',
        ],
        howitworks: {
          step1: '',
          step2: '',
          step3: '',
          step4: '',
        }
        
      },
    ],
  },
  {
    name: 'Merit Scholarship',
    features: [
      {
        name: 'Natural wood options',
        description:
          'The Hoetzin Merit Scholarship is designed to recognize and reward students who demonstrate exceptional potential and outstanding achievements in their academic and professional endeavors. This scholarship provides financial support to high-performing students, enabling them to pursue their studies in technology and advance their careers with confidence.',
        imageSrc: 'https://images.unsplash.com/photo-1651002488675-0f34918ab1b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
        eligibilitycriteria: [
          'Applicants must demonstrate outstanding academic performance or professional achievements in their field.',
          'Must show a strong commitment to personal and professional growth in the tech industry.',
          'Applicants must have applied to or be enrolled in a Hoetzin Bootcamp program.',
          'A track record of excellence, such as top grades, relevant certifications, or notable contributions to previous projects, is highly desirable.',
        ],
        scholarshipbenefits: [
          'Up to 30% Tuition Credit: Receive a scholarship that provides a significant tuition credit of up to 30% towards any of the Hoetzin Bootcamp programs.',
          'Exclusive access to advanced mentorship opportunities with leading industry professionals.',
          'Priority consideration for career support services, including personalized career planning, resume building, and job placement assistance.',
        ],
      },
    ],
  },
  {
    name: '“Rising Together” Scholarship',
    features: [
      {
        name: 'Helpful around the home',
        description:
          "At Hoetzin Bootcamp, we recognize the extraordinary strength and resilience of single mothers striving to build a brighter future for themselves and their families. The Hoetzin “Rising Together” Scholarship is designed to support single mothers on their journey to a successful career in technology, providing financial assistance and flexible learning options to help them reach their full potential.",
        imageSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
        eligibilitycriteria: [
          'Applicants must be single mothers.',
          'Must demonstrate a strong interest in pursuing a career in technology.',
          'Must have applied to or be enrolled in a Hoetzin Bootcamp program.',
          'Applicants should show a commitment to balancing their educational goals with their responsibilities as a parent.',
        ],
        scholarshipbenefits: [
          'Up to 30% Tuition Credit: Receive a scholarship that provides up to 30% tuition coverage for any of the Hoetzin Bootcamp programs.',
          'Access to flexible learning schedules, including part-time and self-paced options, to accommodate the demands of parenting.',
          'Career support services tailored for single mothers, including resume building, job search assistance, and networking opportunities with professionals in the tech industry.',
        ],
      },
    ],
  },
  {
    name: 'Veterans Scholarship',
    features: [
      {
        name: "Everything you'll need",
        description:
          'At Hoetzin Bootcamp, we honor the service and sacrifice of our veterans by providing educational opportunities that help them transition into successful tech careers. The Hoetzin Veterans Scholarship is designed to support veterans as they develop the skills needed to thrive in the technology industry, offering financial assistance and access to valuable resources.',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1683140421621-1bfd2a850ce5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
        eligibilitycriteria: [
          'Applicants must be veterans of the U.S. Armed Forces.',
          'Must demonstrate a strong interest in pursuing a career in technology.',
          'Must have applied to or be enrolled in a Hoetzin Bootcamp program.',
          'Applicants should show a commitment to leveraging their military experience to succeed in the tech industry.',
        ],
        scholarshipbenefits: [
          'Up to 20% Tuition Credit: Receive a scholarship that provides up to 20% tuition coverage for any of the Hoetzin Bootcamp programs.',
          'Access to specialized career support services tailored for veterans, including resume building, job search assistance, and networking opportunities with tech professionals.',
          'Participation in veteran-focused mentorship programs that connect scholarship recipients with successful veterans in the tech industry.',
        ],
      },
    ],
  },
  {
    name: 'Women Empowerment Scholarship: Take Tech',
    features: [
      {
        name: "Everything you'll need",
        description:
          'At Hoetzin Bootcamp, we are deeply committed to empowering women in tech and dismantling the barriers that often stand in the way of a successful career in this field. The Hoetzin Women Empowerment Scholarship: Take Tech is designed to support and uplift women who aspire to excel in the technology sector by providing financial assistance and valuable resources.',
        imageSrc: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
        eligibilitycriteria: [
          'Applicants must identify as women.',
          'Must demonstrate a strong interest in pursuing a career in technology.',
          'Must have applied to or be enrolled in a Hoetzin Bootcamp program.',
          'Applicants should show a commitment to overcoming challenges and advancing in the tech industry.',
        ],
        scholarshipbenefits: [
          'Up to 30% Tuition Credit: Receive a scholarship covering up to 30% of the tuition for any of the Hoetzin Bootcamp programs.',
          'Access to exclusive mentorship opportunities with successful women in tech.',
          'Enhanced career support services, including networking opportunities, resume building, and interview preparation tailored to women.',
        ],
      },
    ],
  },
]

const timeline = [
  {
    name: 'Application Form',
    description:
      'Complete the Hoetzin Veterans Scholarship application form, providing details about your military service, tech career goals, and how this scholarship will help you transition into the tech industry.',
    date: 'Start now',
    dateTime: '2021-08',
  },
  {
    name: 'Personal Statement',
    description:
      'Submit a 500-word essay describing your military experience, your interest in technology, and your plans for using the skills gained from the Bootcamp in your new career.',
    date: 'Prepare',
    dateTime: '2021-12',
  },
  {
    name: 'References',
    description:
      'Provide two references, preferably from military or professional contacts, who can attest to your dedication, skills, and potential in the tech field.',
    date: 'Contact your',
    dateTime: '2022-02',
  },
  {
    name: 'Interview',
    description:
      'Selected applicants may be invited for an interview to discuss their application in more detail.',
    date: 'Let\'s have',
    dateTime: '2022-12',
  },
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

  export default function Scholarships() {
    return (
      <>
      {/* Here the hero section starts */}
      <div className="relative bg-secondary-darkCyan text-secondary-onyx">
      <div className="relative h-80 overflow-hidden bg-secondary-lightGreen md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          className="size-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF"/>
              <stop offset={1} stopColor="#FF4694"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="text-secondary-onyx relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base/7 font-semibold text-secondary-whiteSmoke">Award winning support</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">We’re here to help</p>
          <p className="mt-6 text-base/7 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <a
              href="#scholarships_section"
              className="inline-flex rounded-full bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore our scholarships
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Here the hero section ends */}

    {/* Here the Scholarship Cards Section starts */}
    <div className="bg-white text-secondary-onyx" id="scholarships_section">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-20 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            {/* <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-secondary-lightGreen sm:text-4xl">
              Hoetzin Scholarships
            </h2> */}
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight bg-gradient-to-r from-secondary-green via-secondary-lightGreen to-secondary-aquaMarine inline-block text-transparent bg-clip-text sm:text-4xl">
              Hoetzin Scholarships
            </h2>

            {/* <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. 
              Keep everything at reach and in its place, while dressing up your workspace.
            </p> */}
          </div>

          <TabGroup className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <TabList className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className="border-b-2 border-transparent py-6 text-sm font-medium whitespace-nowrap text-gray-500 hover:border-gray-300 hover:text-gray-700 data-selected:border-indigo-500 data-selected:text-indigo-600"
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>

            <TabPanels as={Fragment}>
              {tabs.map((tab) => (
                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-6 lg:mt-0">
                        <h3 className="text-lg font-medium text-secondary-green">{feature.name}</h3>
                        <p className="mt-2 mb-2 text-sm text-gray-500">{feature.description}</p>
                        {/* Eligibility Criteria */}
                        {feature.eligibilitycriteria && (
                          <>
                            <h3 className="mt-2 mb-2 text-lg font-medium ">Eligibility Criteria</h3>
                            <ul className="text-sm list-disc pl-6 text-gray-500 mb-8 space-y-3">
                              {feature.eligibilitycriteria.map((criteria, index) => (
                                <li key={index}>{criteria}</li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Scholarship Benefits */}
                        {feature.scholarshipbenefits && (
                          <>
                            <h3 className="mt-2 mb-2 text-lg font-medium ">Scholarship Benefits</h3>
                            <ul className="text-sm list-disc pl-6 text-gray-500 mb-8 space-y-3">
                              {feature.scholarshipbenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-6">
                        <img
                          alt={feature.imageAlt}
                          src={feature.imageSrc}
                          className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-5/2"
                        />
                      </div>
                      
                    </div>
                    
                  ))}
              {/* Here the Step-by-Step Application Process starts */}
              <UpcomingCohort />
              <div className="mx-auto max-w-7xl text-secondary-onyx">
                <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl mb-4">
                    How it works?
                </h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                      {timeline.map((item) => (
                        <div key={item.name}>
                          <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-secondary-lightGreen">
                            <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                              <circle r={2} cx={2} cy={2} fill="currentColor" />
                            </svg>
                            {item.date}
                            <div
                              aria-hidden="true"
                              className="absolute -ml-2 h-px w-screen -translate-x-full bg-secondary-onyx/20 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                            />
                          </time>
                          <p className="mt-6 text-lg/8 font-semibold tracking-tight text-secondary-onyx">{item.name}</p>
                          <p className="mt-1 text-base/7 text-secondary-onyx/80">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
              {/* Here the Step-by-Step Application Process starts */}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </div>
    {/* Here the Scholarship Cards Section ends */}

    <ContactProgramAdvisor />

    {/* Here the faq starts */}
    <div className="bg-secondary-green">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
                <h2 className="text-center">
                    <span className="mx-auto inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-secondary-lightGreen ring-inset">
                        FAQ
                    </span>
                </h2>
                <div className="mx-auto max-w-4xl divide-y divide-secondary-lightGreen">
                
                <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Your questions are answered
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-secondary-lightGreen">
                    {faqs.map((faq) => (
                    <Disclosure key={faq.question} as="div" className="pt-6">
                        <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                            <span className="text-base/7 font-semibold">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                            <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                            </span>
                        </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base/7 text-gray-300">{faq.answer}</p>
                        </DisclosurePanel>
                    </Disclosure>
                    ))}
                </dl>
                </div>
            </div>
            <div className="relative h-44 mb-40 sm:mb-44 bg-secondary-green">
              <Newsletter />
              
            </div>
            
      </div>

    
    
    
    </>
    );
  }
  