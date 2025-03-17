export default function ScholarshipsHomepageCTA() {
    return (
      // w-[calc(100%-1rem)]
      <div className="bg-secondary-robinEggBlue/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:justify-between lg:px-8
          bg-[length:12rem_12rem] sm:bg-[length:11rem_11rem]
          bg-[calc(100%+1rem)_calc(100%-6rem)] sm:bg-[-2.6rem_calc(100%-9rem)] md:bg-[-0.5rem_calc(100%-8rem)] 
          bg-no-repeat 
          bg-[url('/images/handholdsbook.svg')]
        ">
          <h2 className="sm:ml-24 max-w-2xl text-4xl font-semibold tracking-tight text-secondary-onyx sm:text-4xl">
            More than 5 scholarships are availble <br />
            Start your bootcamp today.
          </h2>
          
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            {/* <a
              href="/apply"
              className="rounded-full bg-secondary-darkCyan px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-darkCyan/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-darkCyan/85"
            >
              Apply Now
            </a> */}
            <a href="/scholarships" className="text-base/6 font-semibold text-secondary-orangeCTA">
              Check Scholarships <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  