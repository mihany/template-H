
export default function UpcomingCohort() {
  
  return (
    <>
        {/* Dynamic Content */}
        <div className="flex flex-wrap gap-6 items-center">

        <h2 className="flex-1 text-secondary-onyx text-4xl font-semibold tracking-tight text-balance sm:text-4xl">Apply to the next bootcamp</h2>
        <a
            href="/apply"
            className="inline-block rounded-full max-h-11 bg-secondary-orangeCTA px-6 py-3 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-secondary-orangeCTA"
        >
            Apply now
        </a>
        </div>
        
        <div className="text-secondary-onyx p-2 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-2 lg:gap-4 md:gap-4 sm:gap-2 gap-2">
                    <div className="border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">The next cohort starts</h3>
                        <p className="text-base font-light">January 31, 2025</p>
                    </div>
                    <div className="border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">Deadline for applications</h3>
                        <p className="text-base font-light">January 25, 2025</p>
                    </div>
                    <div className="border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">Deadline for scholarships</h3>
                        <p className="text-base font-light">January 15, 2025</p>
                    </div>
                    <div className="border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">Application deadline in</h3>
                        <p className="text-base font-light">25 days, 2 hours</p>
                    </div>
                </div>
    </>
  );
}