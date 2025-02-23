import EventsSlider from "@/app/components/EventsSlider";
import ContactProgramAdvisor from "@/app/components/ContactProgramAdvisor";
import Link from "next/link";

const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Coding Bootcamps in 2025',
    href: '#',
    description:
      'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
  
  export default function BlogAndEvent() {
    return (
      <div className="bg-secondary-robinEggBlue/10 text-secondary-onyx py-16">
        <div className="mx-auto grid max-w-7xl mb-6 sm:mb-10 grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="font-bold text-3xl text-secondary-darkCyan mb-5">Ready To Build The Future?</h2>
            <time dateTime={featuredPost.datetime} className="block text-sm/6 text-secondary-onyx/70">
              {featuredPost.date}
            </time>
            <h3
              id="featured-post"
              className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl"
            >
              {featuredPost.title}
            </h3>
            <p className="mt-4 text-lg/8 text-secondary-onyx/80">{featuredPost.description}</p>
            <div className="flex flex-col justify-between gap-6 sm:flex-row-reverse sm:gap-8 lg:flex-col">
              <div className="flex items-end justify-end">
                <Link
                  href={featuredPost.href}
                  aria-describedby="featured-post"
                  className="text-sm/6 font-semibold text-secondary-orangeCTA"
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

          <div className="mx-auto w-full -mt-12 max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <h2 className="font-bold text-3xl text-secondary-darkCyan mb-5">Attend an event</h2>
            {/* divide-y divide-gray-900/10 */}
              <EventsSlider />
          </div>
        </div>

        <ContactProgramAdvisor />
        
      </div>
    )
  }
  