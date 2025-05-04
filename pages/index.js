import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Rakshith | Product Manager Portfolio</title>
      </Head>

      <header className="p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Rakshith – Product Manager</h1>
        <p className="text-sm text-gray-500">B2B SaaS | Security | Continuity | Platform Thinking</p>
      </header>

      <main className="p-8 max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p>
            I’m Rakshith, a product strategist transitioning into AI-native Product Management.
            Explore my work, playbooks, and case studies below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Portfolio Projects</h2>
          <ul className="list-disc pl-6">
            <li><Link href="/projects/cybernow" className="text-blue-600 hover:underline">CyberNow – Risk & Continuity Platform</Link></li>
            <li><Link href="/projects/rca-genai" className="text-blue-600 hover:underline">GenAI Root Cause Assistant</Link></li>
            <li><Link href="/projects/onboarding-teardown" className="text-blue-600 hover:underline">OneTrust Onboarding Flow – UX Teardown</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:rakshith@rakshithproduct.pro" className="text-blue-600 hover:underline">rakshith@rakshithproduct.pro</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-blue-600 hover:underline">linkedin.com/in/your-profile</a></p>
        </section>
      </main>

      <footer className="p-4 text-center text-xs text-gray-500">© 2025 Rakshith. Built with Next.js & Tailwind CSS. Hosted on Vercel.</footer>
    </div>
  )
}
