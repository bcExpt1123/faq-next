'use server'

import {FAQ_LIST} from "@/app/faq/constants";

export const fetchFaqs = async (query?: string | null) => {
  let faqList = FAQ_LIST;
  if (!query) return faqList;
  query = query.trim();
  faqList = faqList.filter(faq => {
    return faq.question.toLowerCase().includes(query.toLowerCase()) || faq.answer.toLowerCase().includes(query.toLowerCase());
  })
  return faqList;
}
