"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Data Analytics Bootcamp",
    description: "Get a better understanding where your traffic is coming from",
    href: "/courses/data-analytics-career-track",
    icon: ChartPieIcon,
    status: ``,
  },
  {
    name: "Software Engineering Bootcamp",
    description: "Speak directly to your customers with our engagement tool",
    href: "/courses/software-engineering-career-track",
    icon: CursorArrowRaysIcon,
    status: {
      
    },
  },
  {
    name: "Cyber Security Bootcamp",
    description: "Your customers’ data will be safe and secure",
    href: "/courses/cyber-security-career-track",
    icon: FingerPrintIcon,
    status: ``,
  },
  {
    name: "Data Science Bootcamp",
    description: "Your customers’ data will be safe and secure",
    href: "/courses/data-science-career-track",
    icon: SquaresPlusIcon,
    status: ``,
  },
];
const callsToAction = [
  { name: "Join a Workshop", href: "/events-at-hoetzin", icon: PlayCircleIcon, color: "text-gray-400" },
  { name: "Get a call", href: "/contact", icon: PhoneIcon, color: "text-gray-400" },
  { name: "View all courses", href: "/courses", icon: RectangleGroupIcon, color: "text-gray-400" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="relative isolate z-30 bg-white text-secondary-onyx !outline-none !ring-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hoetzin</span>
            <Image
              src="/images/logo-darkCyan.svg"
              alt="Hoetzin logo"
              width={170}
              height={40}
              priority={true} // Preloads the image for better performance
            />
            {/* <Image
              className="fill-secondary-robinEggBlue"
              src="/images/logo2.svg"
              alt="Hoetzin logo"
              width={150}
              height={40}
              priority={true} // Preloads the image for better performance
            /> */}
            {/* <Image
              // className="dark:invert"
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hoetzin Logo"
              width={100}
              height={20}
              priority
            /> */}
            {/* <img
              alt="Hoetzin Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 !outline-none !ring-0">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-base/6 font-semibold text-secondary-onyx">
              Courses
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-secondary-onyx/70"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-secondary-onyx/60 group-hover:text-secondary-darkCyan"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block font-semibold text-secondary-onyx"
                    >
                      <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs px-2.5 py-1 text-orange-400 bg-orange-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                        Coming soon...
                      </span>
                      <br/>
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-secondary-onyx/70">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-secondary-onyx hover:bg-gray-100"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400"
                        />
                        {item.name}
                      </a>
                      // <Link
                      //   key={item.name}
                      //   href={item.href}
                      //   className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      // >
                      //   <item.icon
                      //     aria-hidden="true"
                      //     className="size-5 flex-none text-gray-400"
                      //   />
                      //   {item.name}
                      // </Link>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-secondary-onyx">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-secondary-onyx">
            Marketplace
          </a>
          <a href="/blog" className="text-sm/6 font-semibold text-secondary-onyx">
            Blog
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-secondary-onyx">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hoetzin</span>
              <Image
                className="fill-secondary-robinEggBlue"
                src="/images/hoetzin-logo1.png"
                alt="Hoetzin logo"
                width={150}
                height={40}
                priority={true} // Preloads the image for better performance
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Courses
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-1">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-4 pr-3 text-sm/7 font-semibold text-secondary-onyx hover:bg-gray-50"
                      >
                        {item.name}
                        <span className="inline-flex items-center gap-1 font-semibold rounded-full text-xs px-2.5 py-1 text-orange-400 bg-orange-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                          Coming soon...
                        </span>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary-onyx hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary-onyx hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary-onyx hover:bg-gray-50"
                >
                  Blog
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-secondary-onyx hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
                    
      <Banner />
    </>
  );
}
