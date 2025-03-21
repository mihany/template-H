import { EnvelopeIcon, PhoneIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Adam Smith',
    title: 'Program Advisor @Hoetzin',
    role: 'Admin',
    email: 'hello@hoetzin.com',
    telephone: '+1-555-234-5678',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function ContactCard() {
  return (
    <>
        <div className="max-w-96 mx-auto col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm">
            <div className="flex flex-1 flex-col p-8">
            <img 
                alt="" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" 
                className="mx-auto size-32 shrink-0 rounded-full" 
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">Adam Smith</h3>
            <dl className="mt-1 flex grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">Program Advisor <span className="text-secondary-darkCyan font-semibold">@Hoetzin</span></dd>
              <dt className="sr-only">Role</dt>
              {/* <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                  {person.role}
                </span>
              </dd> */}
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href="mailto:hello@hoetzin.com"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon aria-hidden="true" className="size-5 text-blue-400" />
                  Email
                </a>
              </div>
              {/* <div className="flex w-0 flex-1">
                <a
                  href="#"
                  target="_blank"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <ComputerDesktopIcon aria-hidden="true" className="size-5 text-orange-400" />
                  Meeting
                </a>
              </div> */}
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="tel:+1-555-234-5678"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon aria-hidden="true" className="size-5 text-green-600" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
        
    </>
    // <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {people.map((person) => (
    //     <li
    //       key={person.email}
    //       className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm"
    //     >
    //       <div className="flex flex-1 flex-col p-8">
    //         <img alt="" src={person.imageUrl} className="mx-auto size-32 shrink-0 rounded-full" />
    //         <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
    //         <dl className="mt-1 flex grow flex-col justify-between">
    //           <dt className="sr-only">Title</dt>
    //           <dd className="text-sm text-gray-500">{person.title}</dd>
    //           <dt className="sr-only">Role</dt>
    //           <dd className="mt-3">
    //             <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
    //               {person.role}
    //             </span>
    //           </dd>
    //         </dl>
    //       </div>
    //       <div>
    //         <div className="-mt-px flex divide-x divide-gray-200">
    //           <div className="flex w-0 flex-1">
    //             <a
    //               href={`mailto:${person.email}`}
    //               className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
    //             >
    //               <EnvelopeIcon aria-hidden="true" className="size-5 text-gray-400" />
    //               Email
    //             </a>
    //           </div>
    //           <div className="-ml-px flex w-0 flex-1">
    //             <a
    //               href={`tel:${person.telephone}`}
    //               className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
    //             >
    //               <PhoneIcon aria-hidden="true" className="size-5 text-gray-400" />
    //               Call
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  )
}
