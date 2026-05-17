import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About LLM Pricing — an independent comparison site for AI subscription plans.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <nav className="mb-12">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Back to comparison
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            About LLM Pricing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The honest comparison site for AI subscription plans.
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              What is LLM Pricing?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              LLM Pricing is an independent comparison site for AI subscription
              services. We track the pricing, features, and capabilities of
              tools like ChatGPT, Claude, Gemini, Perplexity, Cursor, and more.
              Our goal is simple: help you find the right AI plan without
              wading through marketing copy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Why we built this
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              AI pricing changes frequently — sometimes weekly. New tools
              launch constantly. We got tired of opening 10 browser tabs every
              time we needed to evaluate which AI service to subscribe to. So
              we built the comparison we wanted to use ourselves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Who we are
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              LLM Pricing is run by an independent indie developer. We are not
              affiliated with any of the AI companies listed on this site. We
              update pricing data manually and verify changes against official
              sources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              How we&apos;re funded
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When you click a link to an AI service from our site and sign up,
              we may receive a small affiliate commission at no extra cost to
              you. This is how we keep the site free and continue to maintain
              it. Our editorial decisions — which services to include, how we
              describe them, where they appear in the table — are not influenced
              by these commissions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              We list services without affiliate programs on equal footing with
              those that have them. If you find inaccurate information or have
              feedback, please reach out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Contact
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              For corrections, partnership inquiries, or general feedback:{" "}
              <a
                href="mailto:hello@llmpricing.io"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                hello@llmpricing.io
              </a>
            </p>
          </section>
        </article>

        <footer className="mt-20 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2026 LLM Pricing</p>
        </footer>
      </div>
    </main>
  );
}
