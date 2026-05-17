import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for LLM Pricing — disclaimer, accuracy, and affiliate disclosure.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: May 17, 2026
          </p>
        </header>

        <article className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Acceptance of terms
            </h2>
            <p>
              By accessing or using LLM Pricing (&quot;the Site&quot;), you agree to
              these Terms of Service. If you do not agree, please do not use
              the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Use of the site
            </h2>
            <p>
              LLM Pricing provides comparison information about AI subscription
              services for informational purposes only. The Site is provided
              free of charge for personal, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Accuracy of information
            </h2>
            <p>
              We work hard to keep pricing and feature information accurate and
              up to date, but we make no warranties about the completeness,
              reliability, or accuracy of any information on the Site. AI
              services change their pricing and features frequently. Always
              verify details on the official website of the service before
              making a purchasing decision.
            </p>
            <p className="mt-3">
              LLM Pricing is not responsible for any loss or damage that may
              arise from reliance on information provided on this Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Affiliate disclosure
            </h2>
            <p>
              LLM Pricing participates in affiliate programs. When you click a
              link to a third-party service from this Site and complete a
              purchase or signup, we may receive a commission at no additional
              cost to you. This does not influence the content of our reviews,
              comparisons, or rankings.
            </p>
            <p className="mt-3">
              Not all services listed on the Site have affiliate programs;
              those without are listed on equal footing with those that do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Third-party links
            </h2>
            <p>
              The Site contains links to third-party websites that are not
              owned or controlled by us. We have no control over and assume no
              responsibility for the content, privacy policies, or practices of
              any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Intellectual property
            </h2>
            <p>
              All product names, logos, and brands referenced on this Site are
              property of their respective owners. Their use on this Site does
              not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, LLM Pricing and its
              operators shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of your
              use of, or inability to use, the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Changes to terms
            </h2>
            <p>
              We may revise these Terms at any time. Continued use of the Site
              after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Contact
            </h2>
            <p>
              Questions about these Terms? Email{" "}
              <a
                href="mailto:hello@llmpricing.io"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                hello@llmpricing.io
              </a>
              .
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
