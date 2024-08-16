const FAQSkeleton = () => {
  return <div className="faq-item bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
    <div className="faq-question px-6 py-4 cursor-pointer flex justify-between items-center bg-gray-100">
      <h3 className="text-lg font-medium text-gray-900 w-3/4 h-6 bg-gray-300 rounded"></h3>
      <div className="h-6 w-6 bg-gray-300 rounded"></div>
    </div>
    <div className="faq-answer px-6 py-4 text-gray-700 hidden">
      <p className="w-full h-4 bg-gray-300 rounded mb-2"></p>
      <p className="w-3/4 h-4 bg-gray-300 rounded"></p>
    </div>
  </div>
}

export default FAQSkeleton;