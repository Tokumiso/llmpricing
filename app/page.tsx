"use client";

  import { useState } from "react";

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
      {
        name: "Mistral Le Chat Pro",
        free: "Yes",
        pro: "$14.99/month",
        features: "Pixtral vision, web search, code interpreter",
        api: "Yes",
      },
      {
        name: "Grok Premium",
        free: "Limited",
        pro: "$8/month",
        features: "Grok 3, X integration, real-time data",
        api: "Yes",
      },
      {
        name: "Microsoft Copilot Pro",
        free: "Yes (basic)",
        pro: "$20/month",
        features: "GPT-4 in Office apps, image generation, priority access",
        api: "No",
      },
      {
        name: "GitHub Copilot",
        free: "Limited",
        pro: "$10/month",
        features: "Code completion, chat, multi-IDE support",
        api: "Yes",
      },
      {
        name: "Notion AI",
        free: "Trial only",
        pro: "$10/month",
        features: "AI writing, Q&A on workspace, summarization",
        api: "No",
      },
      {
        name: "Replit Core",
        free: "Limited",
        pro: "$20/month",
        features: "AI Agent, deployment, multi-language IDE",
        api: "Yes",
      },
      {
        name: "v0 by Vercel",
        free: "Trial only",
        pro: "$20/month",
        features: "AI-generated React/Next.js UIs from prompts",
        api: "No",
      },
      {
        name: "Windsurf Pro",
        free: "Limited",
        pro: "$15/month",
        features: "Cascade AI, multi-file editing, agentic flows",
        api: "No",
      },
    ];

    const [filterFree, setFilterFree] = useState(false);
    const [filterAPI, setFilterAPI] = useState(false);
    const [filterCheap, setFilterCheap] = useState(false);

    const getPrice = (proPriceString: string) => {
      const match = proPriceString.match(/\$([\d.]+)/);
      return match ? parseFloat(match[1]) : Infinity;
    };

    const hasFreeTier = (free: string) => {
      return free.toLowerCase().startsWith("yes");
    };

    const filteredServices = services.filter((service) => {
      if (filterFree && !hasFreeTier(service.free)) return false;
      if (filterAPI && service.api !== "Yes") return false;
      if (filterCheap && getPrice(service.pro) >= 15) return false;
      return true;
    });

    const resetFilters = () => {
      setFilterFree(false);
      setFilterAPI(false);
      setFilterCheap(false);
    };

    const anyFilterActive = filterFree || filterAPI || filterCheap;

    const activeButtonClass =
      "px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white transition-colors";
    const inactiveButtonClass =
      "px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors";

    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              LLM Pricing Comparison
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Compare subscription pricing for the top AI services. Find the right plan for your workflow.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Updated daily · No affiliate bias
            </p>
          </header>

          <section className="mb-6 flex flex-wrap items-center gap-3 justify-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">
              Filter:
            </span>
            <button
              onClick={() => setFilterFree(!filterFree)}
              className={filterFree ? activeButtonClass : inactiveButtonClass}
            >
              ✓ Has Free Tier
            </button>
            <button
              onClick={() => setFilterAPI(!filterAPI)}
              className={filterAPI ? activeButtonClass : inactiveButtonClass}
            >
              ⚡ Has API
            </button>
            <button
              onClick={() => setFilterCheap(!filterCheap)}
              className={filterCheap ? activeButtonClass : inactiveButtonClass}
            >
              💰 Under $15/mo
            </button>
            {anyFilterActive && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-full text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                ✕ Clear all
              </button>
            )}
          </section>

          <div className="text-center mb-6 text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredServices.length} of {services.length} services
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              {filteredServices.length === 0 ? (
                <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                  <p className="text-lg">No services match your filters.</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-6 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
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
                    {filteredServices.map((service) => (
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
              )}
            </div>
          </section>

          <section className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">More services coming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hugging Face Pro, Replicate, Anthropic Workbench, and more.
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