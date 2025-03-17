export const metadata = {
    title: "Hoetzin Career Center",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
      title: "Hoetzin Career Center",
      description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
      url: "https://www.hoetzin.com/about",
      images: [
        {
          url: "https://www.hoetzin.com/public/about-cover.jpg",
          width: 800,
          height: 600,
          alt: "Hoetzin Career Center",
        },
      ],
    },
  };

import Newsletter from "../components/Newsletter"

const incentives = [
  {
    name: 'Free shipping',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function CareerCenter() {
    return (
      <>
        {/* The start of hero section */}
        <div className="bg-secondary-robinEggBlue/5 py-6 sm:py-6 text-secondary-onyx
          bg-[length:23rem_17rem] sm:bg-[length:25rem_17rem] md:bg-[length:27rem_17rem]
          bg-[calc(100%+8rem)_calc(100%+1rem)] sm:bg-[calc(100%+7rem)_calc(100%+1rem)] md:bg-[calc(100%+6rem)_calc(100%+1rem)] lg:bg-[calc(100%-9rem)_calc(100%+1rem)] xl:bg-[calc(100%-12rem)_calc(100%+1rem)]
          bg-no-repeat 
          bg-[url('/images/career-mentor.png')]
          ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-base/7 font-semibold text-secondary-darkCyan">Get the help you need</p>
              <h2 className="mt-2 text-5xl font-semibold tracking-tight sm:text-7xl">Career Center</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-secondary-onyx/80 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat.
              </p>
            </div>
          </div>
        </div>

        {/* The end of hero section */}

        {/* The start of feature section */}

        <div className="overflow-hidden bg-secondary-robinEggBlue/5 py-8 sm:py-8 text-secondary-onyx">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-4xl">
              <p className="text-base/7 font-semibold text-secondary-darkCyan">About us</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                On a mission to empower remote teams
              </h1>
              <p className="mt-6 text-xl/8 text-balance text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                aliquam. Quisque id at vitae feugiat egestas.
              </p>
            </div>
            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className="lg:pr-8">
                <h2 className="text-2xl font-semibold tracking-tight text-pretty">Our mission</h2>
                <p className="mt-6 text-base/7 text-gray-600">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                  sed amet vitae sed turpis id.
                </p>
                <p className="mt-8 text-base/7 text-gray-600">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
              <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="max-lg:mt-16 lg:col-span-1">
                <p className="text-base/7 font-semibold text-gray-500">The numbers</p>
                <hr className="mt-6 border-t border-gray-200" />
                <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                    <dt className="text-sm/6 text-gray-600">Raised</dt>
                    <dd className="order-first text-6xl font-semibold tracking-tight">
                      $<span>150</span>M
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                    <dt className="text-sm/6 text-gray-600">Companies</dt>
                    <dd className="order-first text-6xl font-semibold tracking-tight">
                      <span>30</span>K
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                    <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
                    <dd className="order-first text-6xl font-semibold tracking-tight">
                      <span>1.5</span>M
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
                    <dd className="order-first text-6xl font-semibold tracking-tight">
                      <span>200</span>M
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>
        </div>

      {/* The start of feature section */}

      {/* The start of Career advisor section */}
      <div className="bg-secondary-robinEggBlue/10 text-secondary-onyx">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight">
                  Career Advising
                </h2>
                <p className="mt-4 text-secondary-onyx/80">
                  At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                  caring about that. Our new strategy is to write a bunch of things that look really good in the
                  headlines, then clarify in the small print but hope people don't actually read it.
                </p>
                <p className="mt-4 text-secondary-onyx/80">
                  At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                  caring about that. Our new strategy is to write a bunch of things that look really good in the
                  headlines, then clarify in the small print but hope people don't actually read it.
                </p>
                <p className="mt-4 text-secondary-onyx/80">
                  At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                  caring about that. Our new strategy is to write a bunch of things that look really good in the
                  headlines, then clarify in the small print but hope people don't actually read it.
                </p>
              </div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:shrink-0">
                    <img alt="" src={incentive.imageSrc} className="size-16" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-secondary-onyx/80">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-secondary-onyx/60">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-center py-4">Add to call to action (should add a button here)</h2>
        </div>
      </div>
      {/* The end of Career advisor section */}

      {/* The start of Career mentor section */}
      <div className="bg-secondary-robinEggBlue/5 text-secondary-onyx py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-pretty sm:text-6xl sm:text-balance">
              Career Mentorship
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-secondary-onyx/70 sm:text-xl/8">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
              in. Explicabo id ut laborum.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-3xl font-semibold tracking-tight">Lifetime membership</h3>
              <p className="mt-6 text-base/7 text-secondary-onyx/70">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                repellendus etur quidem assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm/6 font-semibold text-secondary-robinEggBlue">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-secondary-orangeCTA" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-semibold tracking-tight">$0</span>
                    <span className="text-sm/6 font-semibold tracking-wide text-secondary-onyx/70">USD</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-secondary-orangeCTA px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-secondary-orangeCTA/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs/5 text-secondary-onyx/70">
                    Invoices and receipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The end of Career mentor section */}

      {/* The start of Career mentor section */}
          <div className="bg-secondary-darkCyan text-secondary-whiteSmoke">
            <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:flex lg:items-center lg:justify-between lg:px-8">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to dive in? <br />
                Check career workshop events
              </h2>
              <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
                {/* <a
                  href="/events-at-hoetzin"
                  className="rounded-md bg-secondary-orangeCTA px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-orangeCTA focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline--secondary-orangeCTA"
                >
                  Get started
                </a> */}
                <a href="/events-at-hoetzin" className="text-sm/6 font-semibold">
                  Apply to a bootcamp <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
      {/* The end of Career mentor section */}

      {/* The start of newsletter section */}
      <div className="relative h-64 sm:h-56 md:h-72 mb-40 sm:mb-44 bg-secondary-green">
          <Newsletter firstline="Ready to accelerate your career?" secondline="Apply now"/>
      </div>
      {/* The end of newsletter section */}
      </>
    );
  }
  