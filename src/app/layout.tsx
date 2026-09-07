import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Book, Shield, FileText } from "lucide-react";

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
      <body className={`${inter.className} flex h-full overflow-hidden`}>
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-gray-200 font-bold text-lg tracking-tight text-slate-900">
            Raz Docs
          </div>
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <Book className="w-4 h-4 text-slate-400" />
              Overview
            </Link>
            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Legal
            </div>
            <Link href="/privacy" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <Shield className="w-4 h-4 text-slate-400" />
              Privacy Policy
            </Link>
            <Link href="/terms" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <FileText className="w-4 h-4 text-slate-400" />
              Terms of Service
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 h-full overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto py-12 px-8 sm:px-12 lg:px-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
