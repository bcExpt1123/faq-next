export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
        <p className="text-lg text-gray-500 mb-8">
          Please click below button to open the FAQ page.
        </p>
        <a href="/faq"
           className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          View FAQ
        </a>
      </div>
    </main>
  );
}
