import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


export default function IncentivesForCoursePage(props){
    return(
        <div className="bg-secondary-green">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
                <h2 className="text-center">
                    <span className="mx-auto inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-secondary-lightGreen ring-inset">
                        FAQ
                    </span>
                </h2>
                <div className="mx-auto max-w-4xl divide-y divide-secondary-lightGreen">
                
                <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Your questions are answered
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-secondary-lightGreen">
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
                        <p className="text-base/7 text-gray-300">{faq.answer}</p>
                        </DisclosurePanel>
                    </Disclosure>
                    ))}
                </dl>
                </div>
            </div>
        </div>
    );
}