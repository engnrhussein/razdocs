import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raz Transportation LLC - Legal & Docs",
  description: "Legal documentation, privacy policies, and terms of service for Raz Transportation LLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased h-full bg-gray-50 text-slate-900">
      <body className={`${inter.className} flex h-[100dvh] overflow-hidden flex-col md:flex-row`}>
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shrink-0">
          <Link href="/" className="font-bold text-lg tracking-tight text-slate-900">
            Raz Docs
          </Link>
          <div className="flex gap-4 text-sm font-medium text-slate-700">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 flex-shrink-0 border-r border-gray-200 bg-white h-full flex-col">
          <Link href="/" className="h-16 flex items-center px-6 border-b border-gray-200 font-bold text-lg tracking-tight text-slate-900 hover:bg-slate-50 transition-colors">
            Raz Docs
          </Link>
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              Overview
            </Link>
            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Legal
            </div>
            <Link href="/privacy" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.89 0 4.78 1 6.94 1.89A1 1 0 0 1 20 6z"/></svg>
              Privacy Policy
            </Link>
            <Link href="/terms" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              Terms of Service
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 h-full overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto py-8 px-6 sm:py-12 sm:px-12 lg:px-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
