
export default function Newsletter(props) {
return (
    <>
    {/* md:w-full */}
    
    <div className="max-[640px]:py-12 sm:py-12 md:py-20 lg:py-24 absolute z-10 inset-x-0 -bottom-24 mx-auto max-w-7xl  
    w-[calc(100%-1rem)] grid grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8
     bg-secondary-robinEggBlue text-secondary-whiteSmoke rounded-2xl shadow-lg
     bg-[length:18rem_9rem] sm:bg-[length:35rem_15rem] md:bg-[length:35rem_15rem]
     bg-[4rem_4rem] sm:bg-[10rem_-1rem] md:bg-[10rem_3rem]
     bg-no-repeat 
     bg-[url('/images/paperplane.svg')]
     ">
            
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:col-span-7">
            {props.firstline}
            <br /> 
            {props.secondline}
            </h2>
            <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                Email address
                </label>
                <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-full bg-secondary-whiteSmoke px-3.5 py-2 text-base text-secondary-onyx outline-1 -outline-offset-1 outline-white/10 placeholder:text-secondary-onyx/70 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-orangeCTA sm:text-sm/6"
                />
                <button
                type="submit"
                className="flex-none rounded-full bg-secondary-orangeCTA px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary-orangeCTA/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                Subscribe
                </button>
            </div>
            <p className="mt-4 text-sm/6 text-secondary-onyx">
                We care about your data. Read our{' '}
                <a href="/privacy-policy" className="font-semibold text-secondary-onyx">
                privacy&nbsp;policy
                </a>
                .
            </p>
            </form>

            
        </div>
        
    </>
)
}
  