import Image from "next/image";
import Link from "next/link";
import HeroHomepage from "@/app/components/HeroHomepage"
import Bentogridhomepage from "@/app/components/Bentogridhomepage"

export default function Home() {
  return (
    <>
      <HeroHomepage/>
      <Bentogridhomepage />
      <h1>Hello World!</h1>
      <p>This is the home page</p>

      <Link href="./apply">Apply</Link>

    </>
  );
}
