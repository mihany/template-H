import Image from "next/image";
import Newsletter from "@/app/components/Newsletter";

export const metadata = {
  title: "About Us - Hoetzin",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "About Us - Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/about",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "About Us - Hoetzin",
      },
    ],
  },
};

const stats = [
  { label: "Graduates", value: "25,000+" },
  { label: "Instructors and Mentors", value: "250+" },
  { label: "Teaching Hours", value: "100,000+" },
];
const values = [
  {
    name: "Expert Insights",
    description:
      "Gain insights from IT industry veterans through expert lectures and guest speakers.",
  },
  {
    name: "Hands-On Skills Development",
    description:
      "Apply skills with live labs and simulations for practical application.",
  },
  {
    name: "Networking Excellence",
    description:
      "Establish Industry Connections for ongoing learning, alignment with new tech stacks, and continuous support through community groups.",
  },
  {
    name: "Career Success",
    description:
      "Access comprehensive career services during and after the bootcamp, including support for resume building, interview preparation, and job search strategies.",
  },
  {
    name: "Take responsibility ***",
    description:
      "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
  },
  {
    name: "Enjoy downtime ***",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-secondary-robinEggBlue/5 text-secondary-onyx">
      {/* Content section */}
      <div className="mx-auto max-w-7xl p-6 lg:p-24">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="text-xl leading-8 text-secondary-onyx/70">
              The story of Hoetzin began in Cairo, Egypt in 2024.
            </p>
            <h2 className="mt-10 text-3xl font-bold tracking-tight sm:text-4xl">
              WHY Hoetzin?
            </h2>
            <div className="mt-10 max-w-xl text-base leading-7 text-secondary-onyx/85">
              <p>
                Where a team of professionals in the tech industry saw the value
                of Tech education in influencing their careers and lives, and
                sought to build the first bootcamp in the city of Cairo with the
                dream to provide quality education that would change
                people&lsquo;s lives regardless of their background or social
                status, they believed in fair education for all.
              </p>
              <p className="mt-10">
                Over the years, our company has grown from eight to over 400
                people, expanded its geography, and brought quality Tech
                education services closer to our clients worldwide.
              </p>
              <p className="mt-10">
                Today, Hoetzin is the biggest and highest rated technology
                education company in the EMEA region with offices and
                headquarters in the US alongside partnerships with Businesses
                and educational institutions all over the world.
              </p>
              <h2 className="mt-10 text-3xl font-bold tracking-tight text-secondary-onyx sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-10 text-secondary-onyx/70">
                We are on a mission to change people&lsquo;s lives, how are we
                doing that?, by introducing and educating people about tech and
                how it can change their lives by changing their careers.
              </p>
            </div>
          </div>
          <div className="pt-4 sm:pt-0 lg:col-span-1 lg:sticky lg:top-24 lg:self-start text-secondary-onyx">
            <div className="space-y-8">
              <dl className="w-full space-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-secondary-onyx/70">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-Prussian-Blue">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      {/* <div className="mx-auto -mt-12 max-w-7xl p-24 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                The story of Hoetzin began in Cairo, Egypt in 2011. 
              </p>
              <h2 className="mt-10 text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
                WHY Hoetzin?
              </h2>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                Where a team of professionals in the tech industry saw the value of Tech education in influencing their careers and lives, and sought to build the first bootcamp in the city of Cairo with the dream to provide quality education that would change peoples lives regardless of their background or social status, they believed in fair education for all. 
                </p>
                <p className="mt-10">
                Over the years, our company has grown from eight to over 400 people, expanded its geography, and brought quality Tech education services closer to our clients worldwide.
                </p>
                <p className="mt-10">
                Today, AMIT Group is the biggest and highest rated technology education company in the EMEA region with offices and headquarters in the US alongside partnerships with Businesses and educational institutions all over the world. 
                </p>
                <h2 className="mt-10 text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-10">
                  We are on a mission to change peoples lives, how are we doing that?, by introducing and educating people about tech and how it can change their lives by changing their careers. 
                </p>
              </div>
              
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center" id="sidebar-statistics">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-Prussian-Blue">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div> */}

      {/* Image section */}
      <div className="mt-2 sm:mt-2 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="Image"
          width={100}
          height={100}
        />
        {/* <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        /> */}
      </div>

      {/* Values section */}
      <section className="bg-secondary-darkCyan text-secondary-whiteSmoke
          bg-[length:15rem_9rem] md:bg-[length:19rem_12rem] lg:md:bg-[length:23rem_14rem]
          bg-[calc(100%+3rem)_-1rem] md:bg-[calc(100%+3rem)_0rem] lg:md:bg-[calc(100%-3rem)_3rem] xl:md:bg-[calc(100%-6rem)_3rem]
          bg-no-repeat 
          bg-[url('/images/values.svg')]
      ">
        <div className="mx-auto mt-8 max-w-7xl pt-20 pb-6 sm:pt-15 px-6 sm:mt-16 lg:px-8
          
          ">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 ">
              Hoetzin&lsquo;s vision is to be a world leader in tech education, by
              making tech education more affordable and accessible for people from
              across the world, our vision is a world where work and life advances
              to make progress a constant in everyone&lsquo;s life, technology is
              advancing fast so should our environments, lives and work.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold ">{value.name}</dt>
                <dd className="mt-1">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        {/* <div className="relative isolate -z-9 mt-32 mb-32 sm:mt-48 sm:mb-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              />
            </svg>
          </div>
          
        </div> */}
      {/* Newsletter  */}
        <div className="relative h-64 sm:h-56 md:h-72 mb-40 sm:mb-44 bg-secondary-green">
          <Newsletter />
        </div>
      </section>
      
    </div>
  );
}
