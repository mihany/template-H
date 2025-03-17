import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Newsletter from "../../components/Newsletter";

export default function FAQ(props){
    return(
        <>
        <div className="bg-secondary-darkCyan
            bg-[length:21rem_11rem] sm:bg-[length:26rem_14rem] md:bg-[length:26rem_11rem]
            bg-[calc(100%-12rem)_3rem] sm:bg-[-10rem_1rem] md:sm:bg-[calc(100%+5rem)_1rem]
            bg-no-repeat 
            bg-[url('/images/questionsinmind.svg')]
            ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-20">
                <h2 className="text-center">
                    <span className="mx-auto inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-secondary-lightGreen ring-inset">
                        FAQ
                    </span>
                </h2>
                <div className="mx-auto max-w-4xl divide-y divide-secondary-lightGreen">
                
                <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Your questions are answered
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-secondary-robinEggBlue">
                    {props.faqs.map((faq) => (
                    <Disclosure key={faq.question} as="div" className="pt-6">
                        <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                            <span className="text-base/7 font-semibold">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                            <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                            </span>
                        </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base/7 text-white/90">{faq.answer}</p>
                        </DisclosurePanel>
                    </Disclosure>
                    ))}
                </dl>
                </div>
            </div>
        </div>

        <div className="relative h-64 sm:h-56 md:h-72 mb-40 sm:mb-44 bg-secondary-darkCyan">
            <Newsletter firstline="Ready to accelerate your career?" secondline="Apply now"/>
        </div>
        </>
    );
}