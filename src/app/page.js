import Image from "next/image";
import Link from "next/link";
import HeroHomepage from "../app/components/HeroHomepage";
import BentGridHomepage from "../app/components/BentGridHomepage";
import HomepageEvents from "../app/components/HomepageEvents";
import BenefitsHomepage from "../app/components/BenefitsHomepage";
import ScholarshipsHomepageCTA from "../app/components/ScholarshipsHomepageCTA";
import HomepageBlog from "../app/components/HomepageBlog";
import BlogAndEvent from "../app/components/BlogAndEvent";
import EventsHomepage from "../app/components/EventsHomepage";

import CallToAction from "../app/components/CallToAction";

// import CallToAction from "@/components/CallToAction";

export default function Home() {

  return (
    <>
      <HeroHomepage/> 
      <BentGridHomepage />
      <HomepageEvents />
      <BenefitsHomepage />
      <ScholarshipsHomepageCTA />
      <HomepageBlog />
      
      <CallToAction />
    </>
  );
}
