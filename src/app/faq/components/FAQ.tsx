'use client'

import {useRouterWithSearchParams} from "@/lib";
import {IFAQ} from "@/app/faq/constants";
import React, {useEffect, useCallback} from "react";

export type FAQProps = {
  data: IFAQ;
}

const FAQ = (props: FAQProps) => {
  const [visible, setVisible] = React.useState(false);
  const {updateSearchParam, searchParams} = useRouterWithSearchParams();
  const getVisibleItems = useCallback(() => {
    const visibleItemsStr = searchParams.get('visible');
    return (visibleItemsStr?.split(',') || []).map(i => `${i}`);
  }, [searchParams])
  const onToggle = () => {
    let visibleItems = getVisibleItems();
    if(visibleItems.includes(props.data.id)) {
      visibleItems = visibleItems.filter(vi => vi !== props.data.id);
    } else {
      visibleItems.push(props.data.id);
    }
    updateSearchParam('visible', visibleItems.join(','))
  }
  useEffect(() => {
    setVisible(getVisibleItems().includes(props.data.id));
  }, [props.data.id, searchParams, getVisibleItems]);
  return <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="px-6 py-4 cursor-pointer flex justify-between items-center bg-gray-100" onClick={onToggle}>
      <h3 className="text-lg font-medium text-gray-900">
        {props.data.question}
      </h3>
      <svg className="h-6 w-6 text-gray-500 transition-transform duration-300" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
    <div className={`px-6 py-4 text-gray-700 ${visible ? '' : 'hidden'}`}>
      <p>
        {
          props.data.answer
        }
      </p>
    </div>
  </div>
}

export default FAQ;