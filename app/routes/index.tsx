import { Link } from "@remix-run/react";
import { SignedIn, SignedOut, useUser } from "@clerk/remix";

export default function Index() {
  const user = useUser();
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

          <div className="mx-auto mb-10 mt-10 flex w-1/4 flex-row justify-around text-2xl">
            <SignedOut>
              <Link
                to="/sign-in"
                className="inline-block rounded bg-white px-7 py-3 text-center text-lg font-medium leading-snug text-blue-600 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              >
                Sign in
              </Link>
              <Link
                to="/sign-up"
                className="inline-block rounded bg-blue-600 px-7 py-3 text-center text-lg font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              >
                Sign up
              </Link>
            </SignedOut>
            <SignedIn>
              <SignedIn>
                <h2 className="text-shadow-lg text-5xl font-bold text-slate-100">
                  I dig it.
                </h2>
              </SignedIn>
            </SignedIn>
          </div>
          <p className="text-shadow-lg mt-6 text-center text-lg font-bold text-slate-100">
            Built with Remix, Clerk, Tailwind, and TypeScript. Deployed on
            Vercel.
          </p>
        </div>
      </div>
    </main>
  );
}
