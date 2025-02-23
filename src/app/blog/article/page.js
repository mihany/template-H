export const metadata = {
    title: "Article",
    description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    openGraph: {
        title: "Article",
        description:
        "Learn more about Hoetzin and our mission to provide quality education for everyone.",
        url: "https://www.hoetzin.com/privacy-policy",
        images: [
        {
            url: "https://www.hoetzin.com/public/about-cover.jpg",
            width: 800,
            height: 600,
            alt: "Article",
        },
        ],
    },
};

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

  
  export default function Article() {
    return (
      <>
        <div className="bg-white text-secondary-onyx px-6 py-10 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                
                <p className="text-base/7 font-semibold text-secondary-lightGreen">Introducing</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                JavaScript for beginners
                </h1>

                <div className="flex items-center my-4 space-x-4">
        <Image
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with the actual image URL
          alt="Author"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-800">C. L. Beard</span>
            <button className="text-secondary-orangeCTA text-sm font-medium hover:underline">
              Follow
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            Published in{' '}
            <span className="font-medium text-gray-800">OpenSourceScribes</span> · 7 min read · 23 hours ago
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center border-y-2 py-2 text-gray-600">
  {/* Left-aligned Category */}
  <div className="flex items-center">
    <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
      Career development
    </span>
    <a
      href="#"
      className="rounded-full text-xs bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    >
      Career development
    </a>
  </div>

  {/* Right-aligned Icons and Metadata */}
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 5V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path>
      </svg>
      <span className="text-sm font-medium">1</span>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>
  </div>
</div>
                
                <p className="mt-6 text-xl/8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                egestas fringilla sapien.
                </p>
                <div className="mt-10 max-w-2xl">
                <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                    sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                    sed turpis id.
                </p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-secondary-orangeCTA" />
                    <span>
                        <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                        blanditiis ratione.
                    </span>
                    </li>
                    <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-secondary-orangeCTA" />
                    <span>
                        <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                        deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                    </li>
                    <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-secondary-orangeCTA" />
                    <span>
                        <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                        auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                    </li>
                </ul>
                <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    From beginner to expert in 3 hours
                </h2>
                <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                    mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                    ipsum eu a sed convallis diam.
                </p>
                <figure className="mt-10 border-l border-secondary-lightGreen pl-9">
                    <blockquote className="font-semibold text-gray-900">
                    <p>
                        “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                        dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                        tristique.”
                    </p>
                    </blockquote>
                    <figcaption className="mt-6 flex gap-x-4">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-6 flex-none rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                        <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
                    </div>
                    </figcaption>
                </figure>
                <p className="mt-10">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                    sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
                </div>
                <figure className="mt-16">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    className="aspect-video rounded-xl bg-gray-50 object-cover"
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                    <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
                    Faucibus commodo massa rhoncus, volutpat.
                </figcaption>
                </figure>
                <div className="mt-16 max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Everything you need to get up and running
                </h2>
                <p className="mt-6">
                    Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
                    amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
                    Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
                    ac. Cras fermentum convallis quam.
                </p>
                <p className="mt-8">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                    sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
                </div>
            </div>
            </div>
      </>
    );
  }