export const metadata = {
    title: "Events at Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
      title: "Events at Hoetzin",
      description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
      url: "https://www.hoetzin.com/about",
      images: [
        {
          url: "https://www.hoetzin.com/public/about-cover.jpg",
          width: 800,
          height: 600,
          alt: "Events at Hoetzin",
        },
      ],
    },
  };

import Newsletter from "../components/Newsletter"

import { IconCloud } from "../components/IconCloud";

import "animate.css";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/AdmissionTerminal";

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2025',
    time: '5:00 PM PST',
    datetime: '2025-01-10T17:00',
    name: 'AI-Powered Web Design: Create a Stunning, Responsive Landing Page with ChatGPT',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Online',
  },
  {
    id: 2,
    date: 'January 11th, 2025',
    time: '5:00 PM PST',
    datetime: '2025-01-11T17:00',
    name: 'Create a Task Manager Managed with AI',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Online',
  },
  {
    id: 3,
    date: 'January 12th, 2025',
    time: '5:00 PM PST',
    datetime: '2025-01-12T17:00',
    name: 'Create Your First Game in JavaScript and Refine It Using ChatGPT',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Online',
  },
  {
    id: 4,
    date: 'January 13th, 2025',
    time: '5:00 PM PST',
    datetime: '2025-01-13T17:00',
    name: 'Build a Personal Portfolio Website with a Responsive Design and Refine It Using ChatGPT',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Online',
  },
  {
    id: 5,
    date: 'January 14th, 2025',
    time: '5:00 PM PST',
    datetime: '2025-01-14T17:00',
    name: 'Build a Weather App Using APIs and Refine It Using ChatGPT',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Online',
  },
  {
    id: 6,
    date: 'January 15th, 2025',
    time: '5:00 PM PST',
    datetime: '2025-01-15T17:00',
    name: 'Build a Movie Recommendation App with AI',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Online',
  },
  // More meetings...
]
const days = [
  { date: '2024-12-27' },
  { date: '2024-12-28' },
  { date: '2024-12-29' },
  { date: '2024-12-30' },
  { date: '2024-12-31' },
  { date: '2025-01-01', isCurrentMonth: true },
  { date: '2025-01-02', isCurrentMonth: true },
  { date: '2025-01-03', isCurrentMonth: true },
  { date: '2025-01-04', isCurrentMonth: true },
  { date: '2025-01-05', isCurrentMonth: true },
  { date: '2025-01-06', isCurrentMonth: true },
  { date: '2025-01-07', isCurrentMonth: true },
  { date: '2025-01-08', isCurrentMonth: true },
  { date: '2025-01-09', isCurrentMonth: true },
  { date: '2025-01-10', isCurrentMonth: true },
  { date: '2025-01-11', isCurrentMonth: true },
  { date: '2025-01-12', isCurrentMonth: true, isToday: true },
  { date: '2025-01-13', isCurrentMonth: true },
  { date: '2025-01-14', isCurrentMonth: true },
  { date: '2025-01-15', isCurrentMonth: true },
  { date: '2025-01-16', isCurrentMonth: true },
  { date: '2025-01-17', isCurrentMonth: true },
  { date: '2025-01-18', isCurrentMonth: true },
  { date: '2025-01-19', isCurrentMonth: true },
  { date: '2025-01-20', isCurrentMonth: true },
  { date: '2025-01-21', isCurrentMonth: true },
  { date: '2025-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2025-01-23', isCurrentMonth: true },
  { date: '2025-01-24', isCurrentMonth: true },
  { date: '2025-01-25', isCurrentMonth: true },
  { date: '2025-01-26', isCurrentMonth: true },
  { date: '2025-01-27', isCurrentMonth: true },
  { date: '2025-01-28', isCurrentMonth: true },
  { date: '2025-01-29', isCurrentMonth: true },
  { date: '2025-01-30', isCurrentMonth: true },
  { date: '2025-01-31', isCurrentMonth: true },
  { date: '2025-02-01' },
  { date: '2025-02-02' },
  { date: '2025-02-03' },
  { date: '2025-02-04' },
  { date: '2025-02-05' },
  { date: '2025-02-06' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const items = [
  {
    name: "Sophia Martinez",
    title: "Lead designer, Avalon",
    image:
      "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
    body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
  },
  {
    name: "Caroline Lee",
    title: "Senior Graphic Designer, Echo",
    image:
      "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
  {
    name: "Tyler Otwell",
    title: "CTO, Apple",
    image:
      "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
    body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
  },
  {
    name: "Jake Harris",
    title: "Thompson Creative",
    image:
      "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
]

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function EventsAtHoetzin() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

    return (
      <>
        {/* <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Boost your productivity. Start using our app today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          </div>
        </div> */}

        {/* Events calendar starts here */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8"> 
          {/* py-24 sm:py-32 */}
          {/* <Logo fillColor="black" /> */}
          <div className="w-32 h-auto text-indigo-600">
            <img src="/logo-black.svg" alt="Company Logo" className="w-32 h-auto" />
          </div>
      <h1 className="text-3xl mt-5 font-semibold text-secondary-onyx animate__animated animate__fadeIn animate__delay-0.75s">Explore events @Hoetzin</h1>
      <h2 className="text-base font-semibold text-secondary-onyx">Upcoming workshops</h2>
      
      <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-secondary-onyx">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">January</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  'py-1.5 hover:bg-gray-100 focus:z-10',
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                  day.isToday && !day.isSelected && 'text-indigo-600',
                  dayIdx === 0 && 'rounded-tl-lg',
                  dayIdx === 6 && 'rounded-tr-lg',
                  dayIdx === days.length - 7 && 'rounded-bl-lg',
                  dayIdx === days.length - 1 && 'rounded-br-lg',
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    'mx-auto flex size-7 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-secondary-lightGreen',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-md bg-secondary-orangeCTA px-3 py-2 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Book my ticket
          </button>
        </div>
        <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="relative flex gap-x-6 py-6 xl:static">
              <img src={meeting.imageUrl} alt="" className="size-14 flex-none rounded-full" />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start gap-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon className="size-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                        {meeting.date} at {meeting.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start gap-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="size-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                  <div className="mt-2 flex items-start gap-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Certificate
                    </span>
                    </dt>
                  </div>
                </dl>
              </div>
              
            </li>
          ))}
        </ol>
      </div>

      </div>
      {/* <ModalExample /> */}
      <section className="bg-secondary-darkCyan">
        <div className="mx-auto max-w-7xl py-8 px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-secondary-whiteSmoke">What they said about workshops?</h1>
        <h2 className="text-base font-semibold text-secondary-whiteSmoke">Check out</h2>
        
          <div className="relative flex mx-auto max-w-7xl items-center">
              <div className="relative flex max-w-[100vw] overflow-hidden py-5">
                <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                  {[...items, ...items].map((item, index) => (
                    <div key={index} className="h-full px-2.5">
                      <div className="relative h-full w-[28rem] rounded-2xl border border-secondary-onyx/5 bg-secondary-whiteSmoke/85 px-8 py-6">
                        <div className="pb-4 font-light text-secondary-onyx">{item.body}</div>

                        <div className="mt-auto flex items-center gap-4">
                          <img src={item.image} className="h-9 w-9 rounded-full" />

                          <div className="flex flex-col text-sm">
                            <div className="text-secondary-onyx">{item.name}</div>

                            <div className="text-secondary-onyx/75">{item.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>

            <div className="relative h-52 sm:h-44 mb-40 sm:mb-44 bg-secondary-green">
              <Newsletter firstline="Don't miss an event" secondline="Subscribe now"/>
            </div>

        </section> 
    
        {/* Events calendar ends here */}
          
      </>
    );
  }
  