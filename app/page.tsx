export default function Home() {
  const services = [
    {
      name: "ChatGPT Plus",
      free: "Limited",
      pro: "$20/month",
      features: "GPT-5, image generation, file uploads, custom GPTs",
      api: "Yes",
    },
    {
      name: "Claude Pro",
      free: "Limited",
      pro: "$20/month",
      features: "Claude 4.7, 200k context, Projects, file analysis",
      api: "Yes",
    },
    {
      name: "Gemini Advanced",
      free: "Yes (basic)",
      pro: "$20/month",
      features: "Gemini 2.5 Pro, Deep Research, 2TB storage",
      api: "Yes",
    },
    {
      name: "Perplexity Pro",
      free: "Yes (limited)",
      pro: "$20/month",
      features: "Unlimited Pro searches, multiple LLMs, file uploads",
      api: "Yes",
    },
    {
      name: "Cursor Pro",
      free: "Limited",
      pro: "$20/month",
      features: "Premium models, unlimited completions, Agent mode",
      api: "No",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            LLM Pricing Comparison
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Compare subscription pricing for the top AI services.
            Find the right plan for your workflow.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Updated daily · No affiliate bias
          </p>
        </header>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">Free Tier</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">Pro Price</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">Key Features</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">API Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {services.map((service) => (
                  <tr
                    key={service.name}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-5 font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </td>
                    <td className="px-6 py-5 text-gray-700 dark:text-gray-300">
                      {service.free}
                    </td>
                    <td className="px-6 py-5 font-medium text-blue-600 dark:text-blue-400">
                      {service.pro}
                    </td>
                    <td className="px-6 py-5 text-gray-700 dark:text-gray-300 text-sm">
                      {service.features}
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={
                          service.api === "Yes"
                            ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }
                      >
                        {service.api}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">More services soon</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mistral, Grok, Copilot, Notion AI, and 10+ more coming.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Diagnostic quiz</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Find the AI that fits your needs in under 60 seconds.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Price change alerts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Weekly newsletter on pricing changes across all AI services.
            </p>
          </div>
        </section>

        <footer className="mt-20 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">© 2026 LLM Pricing · Built with Next.js</p>
        </footer>
      </div>
    </main>
  );
}