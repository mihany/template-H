import Image from "next/image";
import Link from "next/link";
import HeroHomepage from "@/app/components/HeroHomepage";
import BentGridHomepage from "@/app/components/BentGridHomepage";
import BenefitsHomepage from "@/app/components/BenefitsHomepage";
import ScholarshipsHomepageCTA from "@/app/components/ScholarshipsHomepageCTA";

import BlogAndEvent from "@/app/components/BlogAndEvent";
import EventsHomepage from "@/app/components/EventsHomepage";

import CallToAction from "@/app/components/CallToAction";


export default function Home() {

  return (
    <>
      <HeroHomepage/>       {/* add here more content */}
      <BentGridHomepage />

      
      <BenefitsHomepage />
      <ScholarshipsHomepageCTA />
      {/* <EventsHomepage /> */}
      <BlogAndEvent />
      {/* <FAQhomepage faqs={faqs} /> */}
      {/* <h1>Subscribe now section</h1> */}
      <CallToAction />
    </>
  );
}
