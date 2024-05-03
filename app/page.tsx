import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hi there 👋 I'm&nbsp;
          <code className="font-mono font-bold">Isar</code>
        </p>
      </div>

      

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left w-full grid md:grid-cols-3 grid-cols-2 gap-4">
      <div className="bg-green-200 p-4">Under</div>
        <div className="bg-yellow-200 p-4">Construction</div>
        <div className="bg-purple-200 p-4">🚧</div>
        <div className="bg-pink-200 p-4">⚠️</div>
        <div className="bg-red-200">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M40.5,-17.4C46.7,5.8,41.8,28.3,28.3,37.9C14.7,47.5,-7.5,44.2,-26.7,31.4C-45.9,18.7,-62.2,-3.4,-57.3,-24.9C-52.3,-46.4,-26.2,-67.2,-4.5,-65.8C17.2,-64.3,34.4,-40.5,40.5,-17.4Z" transform="translate(100 100)" />
        </svg>
        </div>
        <div className="bg-blue-200 p-4">Software engineer</div>
      </div>

      <div className="w-full fixed bottom-0  animate-move-forever-fast">
        <svg className="block origin-bottom animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,128C672,139,768,181,864,181.3C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </main>
  );
}
