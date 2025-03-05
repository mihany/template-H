import ContactProgramAdvisor from "@/app/components/ContactProgramAdvisor";
import Link from "next/link";
import Image from "next/image";

  
const events = [
{
    id: 1,
    title: "AI-Powered Web Design: Create a Stunning, Responsive Landing Page with ChatGPT",
    date: "March 20, 2025",
    time: "5:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    id: 2,
    title: "Create a Task Manager Managed with AI",
    date: "March 25, 2025",
    time: "3:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    id: 3,
    title: "Create Your First Game in JavaScript and Refine It Using ChatGPT",
    date: "March 30, 2025",
    time: "6:00 PM PST",
    location: "Online",
    imageUrl: "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
];

export default function HomepageEvents() {
    
    return (
        <>
        <div className="bg-secondary-robinEggBlue/10 py-8">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="font-bold text-3xl text-secondary-darkCyan mb-5 pl-2">
                Attend an event
                </h2>

                {/* Grid Layout for Responsive Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="w-full bg-white rounded-xl shadow-lg overflow-hidden border">
                        <div className="relative">
                            <span className="flex-col items-center justify-center absolute p-1 px-3 right-3 top-3 bg-white rounded-md text-center">
                                <h3 className="text-2xl font-bold">3</h3>
                                <h4 className="text-xl font-semibold">Feb</h4>
                            </span>
                            <img
                            className="w-full h-48 object-cover"
                            src={event.imageUrl}
                            alt={event.title}
                            />
                        </div>
                    
                    <div className="p-5">
                        <div className="flex text-sm text-secondary-onyx/70">
                        <span className="inline-flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                            />
                            </svg>
                            {event.date}
                        </span>
                        <span className="ml-3 inline-flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                            </svg>
                            {event.time}
                        </span>
                        </div>
                        <h3 className="mt-2 text-base sm:text-lg font-semibold line-clamp-2 min-h-[3rem]">
                        {event.title}
                        </h3>
                        <p className="text-sm text-secondary-onyx/70 mt-1">
                        <span className="inline-flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                            </svg>
                            {event.location}
                        </span>
                        </p>
                        <a
                        href="/events-at-hoetzin"
                        className="block mt-4 text-center w-full px-4 py-2 text-sm font-semibold text-white border-secondary-orangeCTA bg-secondary-orangeCTA hover:bg-secondary-orangeCTA/85 rounded-full shadow transition"
                        >
                        Register Now
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex items-center justify-center py-5">
                <Link
                // href={`${process.env.NEXT_PUBLIC_BASE_PATH}/courses`}
                href="/courses"
                className="rounded-3xl bg-secondary-orangeCTA px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-secondary-orangeCTA/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-orangeCTA/85"
                >
                    View more events
                </Link>
            </div>
            <div className="pt-5">
                <ContactProgramAdvisor />
            </div>
      </div>
    </>
    )
  }
  