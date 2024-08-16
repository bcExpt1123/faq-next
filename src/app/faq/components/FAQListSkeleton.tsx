import FAQSkeleton from "@/app/faq/components/FAQSkeleton";

const FAQListSkeleton = () => {
  return <div className="space-y-6">
    <FAQSkeleton/>
    <FAQSkeleton/>
    <FAQSkeleton/>
  </div>
}

export default FAQListSkeleton;