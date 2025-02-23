"use client";

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ArrowPathIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline'

const schedule = [
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
];

const cohorts = [
    {
        schedule: "Full-Time",
        nextCohort: "January 31, 2025",
        deadlineApplication: "January 25, 2025",
        deadlineScholarship: "January 15, 2025",
        countdownApplication: "25 days, 2 hours",
        expectedTimeforCompletion: "3.5",
        daysWeek: "5",
        about: "Ready to jumpstart your tech career? Enroll in our immersive program, Monday to Friday, 9 AM to 6 PM.",
        perks: [
            { name: 'Graduate in 2 months', description: 'We’ll replace it with a new one', icon: CalendarIcon },
            { name: 'All day peer-to-peer learning', description: 'Send it back for free', icon: ArrowPathIcon },
            { name: '40 hours of study in total, per week', description: 'The shipping is on us', icon: TruckIcon },
        ],
    },
    {
        schedule: "Part-Time",
        nextCohort: "February 14, 2025",
        deadlineApplication: "February 5, 2025",
        deadlineScholarship: "February 1, 2025",
        countdownApplication: "35 days, 2 hours",
        expectedTimeforCompletion: "7",
        daysWeek: "4",
        about: "Balancing work or personal commitments? Join a structured schedule during your leisure time.",
        perks: [
            { name: 'Graduate in 7 months', description: 'We’ll replace it with a new one', icon: CalendarIcon },
            { name: 'Flexible peer-to-peer learning', description: 'Send it back for free', icon: ArrowPathIcon },
            { name: '16 hours of study in total, per week', description: 'The shipping is on us', icon: TruckIcon },
        ],
    },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function StartDate() {
    const [selectedSchedule, setSelectedSchedule] = useState("Full-Time");

    const selectedCohort = cohorts.find(
      (cohort) => cohort.schedule === selectedSchedule
    );

  return (
    <section className="bg-secondary-darkCyan">
        <div className="sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                {/* <h2 className="text-base/7 font-semibold bg-gradient-to-r from-secondary-robinEggBlue via-secondary-whiteSmoke to-secondary-robinEggBlue inline-block text-transparent bg-clip-text"> */}
                <h2 className="text-base/7 font-semibold text-secondary-whiteSmoke">
                    Start Now
                </h2>
                <h2 className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">Apply to the next bootcamp</h2>
                {/* <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Our Financing Plan Suits You
                </p> */}
                </div>
                <p className="mx-auto mt-4 max-w-4xl text-center text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
                    Our schedule fits your plans
                </p>
                <div className="mt-16 sm:mt-4 flex justify-center">
                <RadioGroup
                    value={selectedSchedule}
                    onChange={setSelectedSchedule}
                    className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-gray-200 ring-inset"
                >
                    {schedule.map((option) => (
                    <RadioGroup.Option
                        key={option.value}
                        value={option.value}
                        className={({ checked }) =>
                        classNames(
                            checked ? "bg-secondary-whiteSmoke text-secondary-onyx" : "text-white",
                            "cursor-pointer rounded-full px-2.5 py-1"
                        )
                        }
                    >
                        {option.label}
                    </RadioGroup.Option>
                    ))}
                </RadioGroup>
                </div>

                {/* Dynamic Content */}
                <div className="my-4 p-2 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-2 lg:gap-4 md:gap-4 sm:gap-2 gap-2">
                    <div className="text-white border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">The next cohort starts</h3>
                        <p className="text-base font-light">{selectedCohort.nextCohort}</p>
                    </div>
                    <div className="text-white border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">Deadline for applications</h3>
                        <p className="text-base font-light">{selectedCohort.deadlineApplication}</p>
                    </div>
                    <div className="text-white border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">Deadline for scholarships</h3>
                        <p className="text-base font-light">{selectedCohort.deadlineScholarship}</p>
                    </div>
                    <div className="text-white border-l-4 p-4 border-secondary-robinEggBlue">
                        <h3 className="text-xl font-semibold">Application deadline in</h3>
                        <p className="text-base font-light">{selectedCohort.countdownApplication}</p>
                    </div>
                </div>
                {/* <div className="text-white border-white/25 border-t-2"></div> */}
                {/* <div className="text-white">
                    <h2>Your day will be </h2>
                    <p className="text-base font-light">{selectedCohort.expectedTimeforCompletion}</p>
                </div> */}

                {/* Typical schedule */}
                
            </div>
        </div>
        
        {/* <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-8">
                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Choose the learning schedule that suits you
                </h2>
                <p className="mt-4 text-white">
                    Whether you prefer an intensive full-time option or a flexible part-time format, our courses are tailored to you.
                </p>
                <p className="mt-4 text-white">
                    {selectedCohort.about}
                </p>
            </div>

            <div className="col-span-4 flex flex-col-reverse gap-y-4 text-right">
                <dt className="text-base/7 text-white">days a week</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white ">
                    {selectedCohort.daysWeek}
                </dd>
            </div>
          </div>
        </div> */}

        <div className="container px-6 m-auto max-w-7xl">
            <div className="flex flex-wrap gap-6 items-center">
                {/* Left Section */}
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        Choose the learning schedule that suits you
                    </h2>
                </div>

                {/* Right Section */}
                <div className="flex flex-col-reverse gap-y-4 text-center">
                    <dt className="text-base/7 text-white">days a week</dt>
                    {/* <dd className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-secondary-lightGreen via-secondary-aquaMarine to-secondary-lightGreen inline-block text-transparent bg-clip-text"> */}
                    <dd className="text-5xl font-semibold text-secondary-whiteSmoke tracking-tight inline-block">
                        {selectedCohort.daysWeek}
                    </dd>
                </div>
            </div>
                
            <p className="mt-4 text-white">
                Whether you prefer an intensive full-time option or a flexible part-time format, our courses are tailored to you.
            </p>
            <p className="mt-4 text-white">
                {selectedCohort.about}
            </p>
        </div>

        <div className="mx-auto max-w-7xl sm:px-2 sm:py-5 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-5 gap-8 items-center">
    
    </div>
            {/* <div className="max-w-3xl">
                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Choose the learning schedule that suits you
                </h2>
                <p className="mt-4 text-white">
                    Whether you prefer an intensive full-time option or a flexible part-time format, our courses are tailored to you.
                </p>
            </div> */}
            {/* <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"> */}

            <h2 className="sr-only">Our perks</h2>
            <div className="mx-auto max-w-7xl divide-y divide-secondary-robinEggBlue lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8 text-white">
                {selectedCohort.perks.map((perk, perkIdx) => (
                <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
                    <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                    <perk.icon aria-hidden="true" className="size-8 shrink-0 text-secondary-robinEggBlue" />
                    <div className="ml-4 flex flex-auto flex-col-reverse">
                        <h3 className="font-medium ">{perk.name}</h3>
                        <p className="text-sm ">{perk.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>


            

                {/* {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:shrink-0 bg-blend-lighten">
                    <img alt="" src={incentive.imageSrc} className="size-16" />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-white">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-white">{incentive.description}</p>
                    </div>
                </div>
                ))} */}
            {/* </div> */}
            </div>
        </div>
            
        
    </section>
  );
}