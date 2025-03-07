import Image from "next/image";

export const metadata = {
  title: "Contact Us - Hoetzin",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "Contact Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
        alt: "Contact Hoetzin",
      },
    ],
  },
};

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>Keep in touch</p>
//       {/* Here should be a div for student advisor name and image. This div should be on the left.
//       The contact us form should be on the right.
//       In mobile view, student adivsor should be above and the contact form should be below */}
//     </div>
//   );
// }

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="relative isolate bg-white text-secondary-onyx">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-5 sm:pb-20 pt-6 sm:pt-8 lg:py-20 lg:static lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
              Get in touch
            </h2>
            <div className="flex items-center gap-x-6 mt-6">
              <Image
                width="100"
                height="100" /* to be edited later */
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-16 rounded-full"
              />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight">
                  Adam Smith
                </h3>
                <p className="text-sm/6 font-normal">
                  Program Advisor <span className="text-secondary-darkCyan font-semibold">@Hoetzin</span>
                </p>
              </div>
            </div>
            {/* <p className="mt-6 text-lg/8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p> */}
            <dl className="mt-8 sm:mt-6 space-y-4 text-base/7 text-secondary-onyx/70">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-secondary-onyx/50"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div> */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-secondary-onyx/50"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (555) 234-5678"
                    className="hover:text-secondary-onyx/90"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-secondary-onyx/50"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@hoetzin.com"
                    className="hover:text-secondary-onyx/90"
                  >
                    hello@hoetzin.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-secondary-onyx/50"></div>
            <span className="flex-shrink mx-4 text-sm text-secondary-onyx/50">or</span>
            <div className="flex-grow border-t border-secondary-onyx/50"></div>
          </div>
          <div className="pt-3 sm:pt-4 flex items-center justify-center">
            {/* <h1>Book a 30-minutes meeting with </h1> 
            <h2>Booking for 30-min meeting</h2> */}
            <a
            href="#"
            className="text-center w-[calc(100%-6rem)] rounded-full bg-secondary-orangeCTA px-3 py-2 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/60"
            >
            Book 30-minutes meeting
            </a>

          </div>
        </div>
        <div className="px-6 pb-24 pt-6 sm:pt-8 lg:py-20 sm:pb-32 lg:px-8">
          
          <form
            action="#"
            method="POST"
          >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <h1 className="font-semibold text-2xl mb-2">Send your inquiry here</h1>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-secondary-orangeCTA px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        </div>

      </div>
    </div>
  );
}
