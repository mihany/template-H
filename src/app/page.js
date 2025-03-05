import Image from "next/image";
import Link from "next/link";
import HeroHomepage from "@/app/components/HeroHomepage";
import BentGridHomepage from "@/app/components/BentGridHomepage";
import HomepageEvents from "@/app/components/HomepageEvents";
import BenefitsHomepage from "@/app/components/BenefitsHomepage";
import ScholarshipsHomepageCTA from "@/app/components/ScholarshipsHomepageCTA";
import HomepageBlog from "@/app/components/HomepageBlog";
import BlogAndEvent from "@/app/components/BlogAndEvent";
import EventsHomepage from "@/app/components/EventsHomepage";

import CallToAction from "@/app/components/CallToAction";


export default function Home() {

  return (
    <>
      <HeroHomepage/>       {/* add here more content */}
      <BentGridHomepage />
      <HomepageEvents />
      <BenefitsHomepage />
      <ScholarshipsHomepageCTA />
      <HomepageBlog />
      {/* <EventsHomepage /> */}
      {/* <BlogAndEvent /> */}
      {/* <FAQhomepage faqs={faqs} /> */}
      {/* <h1>Subscribe now section</h1> */}
      <CallToAction />
    </>
  );
}
