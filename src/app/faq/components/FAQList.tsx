import {fetchFaqs} from "@/app/faq/actions";
import FAQ from "@/app/faq/components/FAQ";
import {SearchParams} from "@/types";

export type FAQListProps = {
  searchParams: SearchParams;
}

const FAQList = async (props: FAQListProps) => {
  const faqs = await fetchFaqs(props.searchParams['search-faq']);
  return <div className="space-y-6">
    {
      faqs.map(faq => <FAQ
        key={faq.id}
        data={faq}
      />)
    }
  </div>
}

export default FAQList;