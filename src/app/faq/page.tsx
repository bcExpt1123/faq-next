import {Suspense} from "react";
import PageTitle from "@/app/faq/components/PageTitle";
import Container from "@/app/faq/components/Container";
import Search from "@/app/faq/components/form/Search";
import FAQList from "@/app/faq/components/FAQList";
import {SearchParams} from "@/types";
import FAQListSkeleton from "@/app/faq/components/FAQListSkeleton";
import ShowAnswers from "@/app/faq/components/ShowAnswers";

export default function FAQPage({searchParams}: { searchParams: SearchParams }) {
  return <Container>
    <PageTitle title="Frequently Asked Questions"/>
    <div className="flex justify-end mb-2">
      <Suspense>
        <ShowAnswers/>
      </Suspense>
    </div>
    <div className="mb-8">
      <Suspense>
        <Search id="faq" placeholder="Search FAQs..."/>
      </Suspense>
    </div>
    <Suspense fallback={<FAQListSkeleton/>}>
      <FAQList searchParams={searchParams}/>
    </Suspense>
  </Container>
}