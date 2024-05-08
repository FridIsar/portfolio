import Image from "next/image";
import WhoAmI from "@/components/WhoAmI";
import TextAboutMe from "@/components/TextAboutMe";
import UpwardsWave from "@/components/UpwardsWave";
import Experience from "@/components/Experience";
import DownwardsWave from "@/components/DownwardsWave";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex min-h-screen flex-col sm:flex-row items-center">
        <div className="flex-1 font-mono py-4">
          <WhoAmI></WhoAmI>
        </div>
        <div className="flex-1">
          <TextAboutMe></TextAboutMe>
        </div>
      </div>
{/*       <div className="w-full">
        <UpwardsWave></UpwardsWave>
        <div className="bg-blue-500">
          <Experience></Experience>
        </div>
        <DownwardsWave></DownwardsWave>
      </div>
      <Projects></Projects> */}
    </main>
  );
}
