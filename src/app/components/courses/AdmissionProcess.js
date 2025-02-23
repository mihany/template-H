export default function AdmissionProcess() {
    const steps = [
      {
        number: "1",
        title: "No prerequisites",
        description:
          "The web development course is beginner-friendly, with no prerequisites required. What counts for us is that you’re motivated to start your new tech journey.",
      },
      {
        number: "2",
        title: "Book an interview with our enrolment advisor",
        description:
          "When you apply, we will get back to you to schedule a 30-minute video interview. We'll talk about your professional background and your motivation.",
      },
      {
        number: "3",
        title: "Pass our technical quiz or Attend a workshop",
        description:
          "You will take a technical quiz to assess your coding knowledge and your ability to learn.",
      },
      {
        number: "4",
        title: "Payment options & prepwork",
        description:
          "The last step will consist of finding the most suitable financing option for you. Then, you'll jump into the prepwork which consists of 40h of training.",
      },
    ];
  
    return (
      <div className="bg-secondary-robinEggBlue/10 text-secondary-onyx py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary-onyx">
              Admission
            </h3>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How to apply to our Web Development bootcamp
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-onyx/80">
              Our admission process is beginner-friendly and will give you a taste of our course. Start now!
            </p>
          </div>
  
          {/* Steps */}
          <div className="mt-16 flex items-center justify-center">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 relative">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center relative"
                >
                  {/* Step Number */}
                  <div className="bg-secondary-robinEggBlue text-secondary-whiteSmoke font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-secondary-onyx">
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="mt-2 text-sm text-secondary-onyx/75">{step.description}</p>
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 right-[-1.5rem] hidden lg:block transform -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary-onyx"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          {/* Button */}
          <div className="mt-10 text-center">
            <a
              href="/apply"
              className="inline-block rounded-md bg-secondary-orangeCTA px-6 py-3 text-sm font-semibold text-white shadow hover:bg-secondary-lightGreen/70 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-secondary-lightGreen"
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    );
  }