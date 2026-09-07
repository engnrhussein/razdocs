export default function Home() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">Documentation Hub</h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        Welcome to the official documentation portal for Raz Transportation LLC. Here you will find our public compliance policies, legal agreements, and terms of service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <a href="/privacy" className="group block border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all">
          <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Privacy Policy &rarr;</h2>
          <p className="text-sm text-slate-500">
            Learn how we collect, use, and protect your data across our platforms and services.
          </p>
        </a>

        <a href="/terms" className="group block border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all">
          <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Terms of Service &rarr;</h2>
          <p className="text-sm text-slate-500">
            Read the terms and conditions governing the use of our websites and freight services.
          </p>
        </a>
      </div>
    </div>
  );
}
