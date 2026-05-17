import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for LLM Pricing — what data we collect and how we use it.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: May 17, 2026
          </p>
        </header>

        <article className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Overview
            </h2>
            <p>
              LLM Pricing (&quot;we&quot;, &quot;our&quot;) respects your privacy. This page
              explains what data we collect, how we use it, and your rights
              regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Data we collect
            </h2>
            <p className="mb-3">
              We collect minimal data, limited to what is necessary to operate
              the site and improve user experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Anonymous usage data:</strong> Pages visited, browser
                type, device type, country (not city or address). Collected via
                privacy-friendly analytics.
              </li>
              <li>
                <strong>Cookies:</strong> We do not set cookies for tracking or
                advertising. Our analytics provider is cookieless.
              </li>
              <li>
                <strong>Affiliate tracking:</strong> When you click a link to a
                third-party service, that service may track your visit
                according to their own policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              What we do NOT collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not collect your name, email, or contact details unless you voluntarily provide them (e.g., by emailing us).</li>
              <li>We do not sell or share your data with third parties for advertising.</li>
              <li>We do not use behavioral tracking cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Third-party services
            </h2>
            <p className="mb-3">We rely on the following services to operate this site:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vercel:</strong> Hosting and content delivery. May log
                IP addresses for security purposes.
              </li>
              <li>
                <strong>Affiliate partners:</strong> When you click a link to an
                AI service, you are subject to their privacy policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Your rights
            </h2>
            <p>
              Under GDPR, CCPA, and similar regulations, you have the right to
              request access to, correction of, or deletion of any personal
              data we may hold about you. Since we collect minimal data, this
              typically does not apply, but you can contact us at any time at{" "}
              <a
                href="mailto:hello@llmpricing.io"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                hello@llmpricing.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected by updating the &quot;Last updated&quot; date at the top of
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Contact
            </h2>
            <p>
              Questions about this Privacy Policy? Email{" "}
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
