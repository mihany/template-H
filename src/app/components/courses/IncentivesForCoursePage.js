const incentives = [
    {
      name: "Expert Insights",
      description:
        "Gain insights from IT industry veterans through expert lectures and guest speakers.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    },
    {
      name: "Hands-On Skills Development",
      description:
        "Apply skills with live labs and simulations for practical application.",
      imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
    },
    {
      name: "Career Success",
      description:
        "Access comprehensive career services during and after the bootcamp, including support for resume building, interview preparation, and job search strategies.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
    },
    {
      name: "Networking Excellence",
      description:
        "Establish Industry Connections for ongoing learning, alignment with new tech stacks, and continuous support through community.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    },
  ];

export default function IncentivesForCoursePage(){
    return(
    <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="bg-white hover:bg-black p-6 text-center min-h-"
              >
                <img
                  src={incentive.imageSrc}
                  alt=""
                  className="h-24 w-auto mx-auto"
                />
                <h3 className="mt-6 text-md font-medium text-gray-900 pb-2">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-md text-gray-500">
                  {incentive.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
  