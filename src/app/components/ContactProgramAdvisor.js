
export default function ContactProgramAdvisor() {
    return (
      <>
      {/* bg-[calc(100%+9rem)_calc(100%-3rem)] */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-secondary-onyx
          bg-[length:30rem_15rem] 
          bg-[calc(100%+4rem)_calc(100%+2.3rem)] sm:bg-[calc(100%-7.5rem)_calc(100%+2.3rem)]
          bg-no-repeat 
          bg-[url('/images/airplane-lineup.png')]
      ">
        <h2 className="text-base/7 font-semibold text-secondary-robinEggBlue">Still have questions?</h2>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
          Contact an Advisor
        </p>
        <div className="flex flex-col items-center justify-center gap-10 py-12 sm:flex-row">
            <img alt="" 
            src= 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
            className="aspect-4/5 w-52 flex-none rounded-2xl object-cover" />
            <div className="max-w-96 flex-auto">
              <h3 className="text-lg/8 font-semibold tracking-tight text-secondary-onyx/80">Adam Alex</h3>
              <p className="text-base/7 text-secondary-onyx/70">Program Advisor <span className="text-secondary-darkCyan font-semibold">@Hoetzin</span></p>
              <p className="mt-6 text-base/7 text-secondary-onyx/70">I am willing to help students to find their passion and change their own career</p>
              <ul role="list" className="mt-6 flex justify-end sm:justify-start gap-x-6">
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li> */}
                <li>
                  <a
                    href="/contact"
                    className="inline-flex rounded-full bg-secondary-orangeCTA px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-orangeCTA/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/85"
                  >
                    Get a call
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      </>
    );
}
  