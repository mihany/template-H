import Link from 'next/link';

export default function CourseCards() {
    const courses = [
      { title: "Software Engineering ", description: "Make products users love. Learn the product design process." },
      { title: "Software Engineering", description: "Build scalable apps with full-stack development skills." },
      { title: "Data Science", description: "Unlock insights with machine learning & AI techniques." },
      { title: "Cyber Security", description: "Protect systems with ethical hacking and security strategies." }
    ];
  
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6">
            {/* course 1: Software Engineering */}
          <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
            <figure className="p-6 pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto stroke-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                role="graphics-symbol"
                aria-labelledby="title-01 desc-01"
              >
                <title id="title-01">Icon title</title>
                <desc id="desc-01">A more detailed description of the icon</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </figure>

            {/* Course Title */}
            <h3 className="text-lg font-semibold text-secondary-onyx">Software Engineering</h3>
            
            {/* Top Badges */}
            <div className="space-y-1">
            <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs bg-gray-200 px-2.5 py-1 text-secondary-onyx">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
              Accepting Applications
            </span>
            <span className="inline-flex items-center gap-1 font-semibold rounded-full px-2.5 py-1 bg-green-100 text-xs text-green-700">
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
            </div>
            
  
            {/* Course Description */}
            <p className="text-sm text-secondary-onyx/70 line-clamp-3 min-h-[3.5rem] sm:min-h-[4rem]">Front-end, back-end, full-stack — write the code that will shape the future</p>
  
            {/* CTA Button */}
            <div className="flex">
            <Link 
            href="/courses/software-engineering-career-track"
            className="mx-auto text-center w-full rounded-full bg-secondary-orangeCTA py-2 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/60"
            >
              View program
            </Link>
            </div>

          </div>

            {/* course 2: Data Analytics */}

          <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
            <figure className="p-6 pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto stroke-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                role="graphics-symbol"
                aria-labelledby="title-01 desc-01"
              >
                <title id="title-01">Icon title</title>
                <desc id="desc-01">A more detailed description of the icon</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </figure>

            {/* Course Title */}
            <h3 className="text-lg font-semibold text-secondary-onyx">Data Analytics</h3>
            
            {/* Top Badges */}
            <div className="space-y-1">
            <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs px-2.5 py-1 text-orange-400 bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Coming soon...
            </span>
            <br/>
            <span className="inline-flex items-center gap-1 font-semibold rounded-full px-2.5 py-1 bg-green-100 text-xs text-green-700">
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
            </div>
            
  
            {/* Course Description */}
            <p className="text-sm text-secondary-onyx/70 line-clamp-3 min-h-[3.5rem] sm:min-h-[4rem]">Master big data to solve big business problems</p>
  
            {/* CTA Button */}
            <div className="flex">
            <Link 
            href="/courses/data-analytics-career-track"
            className="mx-auto text-center w-full rounded-full bg-secondary-orangeCTA py-2 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/60"
            >
              View program
            </Link>
            </div>

          </div>

          {/* course 3: Cyber Security */}

          <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
            <figure className="p-6 pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto stroke-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                role="graphics-symbol"
                aria-labelledby="title-01 desc-01"
              >
                <title id="title-01">Icon title</title>
                <desc id="desc-01">A more detailed description of the icon</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </figure>

            {/* Course Title */}
            <h3 className="text-lg font-semibold text-secondary-onyx">Cyber Security</h3>
            
            {/* Top Badges */}
            <div className="space-y-1">
            <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs px-2.5 py-1 text-orange-400 bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Coming soon...
            </span>
            <br/>
            <span className="inline-flex items-center gap-1 font-semibold rounded-full px-2.5 py-1 bg-green-100 text-xs text-green-700">
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
            </div>
            
  
            {/* Course Description */}
            <p className="text-sm text-secondary-onyx/70 line-clamp-3 min-h-[3.5rem] sm:min-h-[4rem]">Master big data to solve big business problems</p>
  
            {/* CTA Button */}
            <div className="flex">
            <Link 
            href="/courses/cyber-security-career-track"
            className="mx-auto text-center w-full rounded-full bg-secondary-orangeCTA py-2 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/60"
            >
              View program
            </Link>
            </div>

          </div>

          {/* course 4: Data Science */}

          <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
            <figure className="p-6 pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto stroke-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                role="graphics-symbol"
                aria-labelledby="title-01 desc-01"
              >
                <title id="title-01">Icon title</title>
                <desc id="desc-01">A more detailed description of the icon</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </figure>

            {/* Course Title */}
            <h3 className="text-lg font-semibold text-secondary-onyx">Data Science</h3>
            
            {/* Top Badges */}
            <div className="space-y-1">
            <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs px-2.5 py-1 text-orange-400 bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Coming soon...
            </span>
            <br/>
            <span className="inline-flex items-center gap-1 font-semibold rounded-full px-2.5 py-1 bg-green-100 text-xs text-green-700">
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
            </div>
            
  
            {/* Course Description */}
            <p className="text-sm text-secondary-onyx/70 line-clamp-3 min-h-[3.5rem] sm:min-h-[4rem]">Master big data to solve big business problems</p>
  
            {/* CTA Button */}
            <div className="flex">
            <Link 
            href="/courses/data-science-career-track"
            className="mx-auto text-center w-full rounded-full bg-secondary-orangeCTA py-2 text-sm font-semibold text-white shadow hover:bg-secondary-orangeCTA/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/60"
            >
              View program
            </Link>
            </div>

          </div>

      </div>
    );
  }