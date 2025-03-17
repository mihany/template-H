import Link from "next/link";

export default function Banner() {
  return (
    // rounded-lg
    <div className="relative isolate flex items-center px-6 py-4 sm:px-3.5 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 shadow-lg  animate-shimmer">
      {/* Shine Effect */}
      <div className="absolute -z-20  inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-glow"></div>
      </div>

      {/* Banner Content - Left on Mobile, Centered on Desktop */}
      <div className="z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-x-6 gap-y-2 w-full">
        <p className="text-sm text-yellow-900 font-semibold">
          <strong className="font-bold">Golden Bootcamp</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join our Golden Bootcamp and get <span className="font-bold">50% OFF!</span>
        </p>
        <Link
          href="/apply"
          className="rounded-full bg-yellow-800 px-3.5 py-1 text-sm font-semibold text-white shadow-md hover:bg-yellow-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700 transition duration-300"
        >
          Apply Now <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Dismiss Button - Always Right */}
      {/* <div className="flex-1 flex justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-yellow-900" />
        </button>
      </div> */}
    </div>
  );
}