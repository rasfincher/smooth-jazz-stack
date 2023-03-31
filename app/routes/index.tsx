import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[url('/images/jazz.jpg')] bg-cover">
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">
        <div className="pb-10">
          <h1 className="text-shadow-lg text-center text-8xl font-bold uppercase text-slate-50">
            Smooth Jazz Stack
          </h1>
          <p className="text-shadow-lg mt-6 text-center text-xl font-bold text-slate-100">
            Minor friction, major performance, diminished complexity, augmented
            productivity
          </p>
          <p>Built with Remix, Tailwind, and TypeScript. Deployed on Vercel.</p>
        </div>
      </div>
    </main>
  );
}
