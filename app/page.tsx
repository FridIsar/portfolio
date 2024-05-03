import Image from "next/image";
import WhoAmI from "@/components/WhoAmI";
import TextAboutMe from "@/components/TextAboutMe";
import UpwardsWave from "@/components/UpwardsWave";
import Experience from "@/components/Experience";
import DownwardsWave from "@/components/DownwardsWave";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <WhoAmI></WhoAmI>
      <TextAboutMe></TextAboutMe>
      <div className="w-full">
        <UpwardsWave></UpwardsWave>
        <div className="bg-blue-500">
          <Experience></Experience>
        </div>
        <DownwardsWave></DownwardsWave>
      </div>
      <Projects></Projects>
    </main>
  );
}
