import EventsSlider from "@/app/components/EventsSlider";
import ContactProgramAdvisor from "@/app/components/ContactProgramAdvisor";
import Link from "next/link";
import Image from "next/image";

const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Coding Bootcamps in 2025',
    href: '/blog/article',
    description:
      'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: 'Michael Foster',
      href: '#',
      authorImageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
  
  export default function BlogAndEvent() {
    return (
      <div className="bg-secondary-robinEggBlue/10 text-white">
        <div className="mx-auto grid max-w-7xl w-[calc(100%-1rem)] py-8 mb-6 sm:mb-10 grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8 bg-secondary-darkCyan rounded-2xl">
          <div className="flex justify-center items-center">
            <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="font-bold text-2xl text-white mb-3">Check our blogs</h2>
              <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs bg-secondary-whiteSmoke px-2.5 py-1 text-secondary-onyx">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
               Top read this month
              </span>
              {/* <Image className="w-full h-44 aspect-video object-cover rounded-2xl py-1" height={100} width={100} src={featuredPost.imageUrl} alt={featuredPost.title} /> */}
              <img className="w-full h-44 object-cover rounded-2xl py-1" src={featuredPost.imageUrl} alt={featuredPost.title} />

              <h3
                id="featured-post"
                className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl"
              >
                {featuredPost.title}
              </h3>
              <time dateTime={featuredPost.datetime} className="block text-sm/6 text-white">
                {featuredPost.date}
              </time>
              <p className="mt-4 text-lg/8 text-white line-clamp-3 min-h-[3rem]">{featuredPost.description}</p>

              <div className="flex flex-col pt-4 justify-between gap-6 sm:flex-row-reverse sm:gap-8 lg:flex-col">
                <div className="flex items-end justify-end">
                  <Link
                    href={featuredPost.href}
                    aria-describedby="featured-post"
                    className="text-xs/4 sm:text-sm/6 font-semibold text-secondary-whiteSmoke"
                  >
                    Continue reading <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                {/* <div className="flex lg:border-t lg:border-secondary-onyx/10 lg:pt-8">
                  <a href={featuredPost.author.href} className="flex gap-x-2.5 text-sm/6 font-semibold">
                    <img alt="" src={featuredPost.author.imageUrl} className="size-6 flex-none rounded-full bg-gray-50" />
                    {featuredPost.author.name}
                  </a>
                </div> */}
              </div>
            </article>
          </div>

          <div className="mx-auto w-full max-w-2xl border-t border-secondary-whiteSmoke pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <h2 className="font-bold text-2xl text-white mb-5 pl-2">Attend an event</h2>
            {/* divide-y divide-gray-900/10 */}
              <EventsSlider />
          </div>
          
        </div>

        <div className="py-3">
          <ContactProgramAdvisor />
        </div>

      </div>
    )
  }
  