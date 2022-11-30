import Link from "next/link";
import { Callout } from "nextra-theme-docs";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <div className="text-center py-32 px-4">
        <h1 className="text-6xl mx-auto max-w-4xl font-bold mb-8">
          The next generation framework for building Discord bots.
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-400 mb-8 mx-auto max-w-3xl">
          Octocord is a simple, modern framework for building Discord bots
          powered by <Link href="https://discord.js.org/">Discord.js</Link>.
        </p>

        <Link
          href="/docs"
          className="px-7 rounded-md py-3 font-semibold inline-block bg-black hover:bg-gray-900 text-white dark:hover:bg-gray-400 dark:bg-white dark:text-black"
        >
          Get Started
        </Link>
      </div>

      <div className="mx-auto max-w-max px-5 py-4 bg-orange-500/20 border border-orange-600 rounded-md">
        Octocord is currently under development!
      </div>
    </main>
  );
}
