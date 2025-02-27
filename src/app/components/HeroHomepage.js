import Flipper from "@/app/components/Flipper";
import TypingEffect from "@/app/components/TypingEffect";
import Link from "next/link";


export default function HeroHomepage() {
    return (
      <>
      <div className="relative isolate  
           bg-secondary-robinEggBlue/5
            bg-[length:100%_100%] 
            bg-[4rem_4rem] 
            bg-no-repeat 
            bg-[url('/images/bg-pattern2.png')]
              ">
            {/* <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg> */}
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#48CFCB] to-[#229799] opacity-30"
                style={{
                  clipPath:
                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-16 pt-18 sm:pt-16 lg:px-8 lg:pt-6">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-3xl text-secondary-onyx font-bold tracking-tight sm:text-6xl pt-5 lg:pt-20">
                      Transform Your <span className="text-secondary-darkCyan text-decoration">Future</span>.<br/>
                      Break Into Tech With Confidence.
                      {/* Unleash your <span className="text-secondary-darkCyan text-decoration">Ambition</span>.
                      <br/>
                      Step into the world of Tech */}
                    </h1>
                    {/* <p className="relative mt-6 text-2xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      Unlock Your Competitive Edge: One Word <br/>
                      Defines It All - 'Technology.'
                    </p> */}
                    <div className="py-8 ">
                      {/* <Flipper /> */}
                      <TypingEffect />
                      

                      <Link
                        // href={`${process.env.NEXT_PUBLIC_BASE_PATH}/courses`}
                        href="/courses"
                        className="rounded-3xl bg-secondary-orangeCTA px-4 py-3 text-base font-semibold text-white shadow-xs hover:bg-secondary-orangeCTA/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/85"
                      >
                        Our Courses
                      </Link>
                      
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-auto absolute inset-0 rounded-full ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-auto absolute inset-0 rounded-full ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-auto absolute inset-0 rounded-full ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-auto absolute inset-0 rounded-full ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-full bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-auto absolute inset-0 rounded-full ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                      
        </>
    );
  }
  