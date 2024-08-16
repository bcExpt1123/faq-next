'use client'
import Switch from "@/app/faq/components/form/Switch";
import React, {useEffect, useCallback} from "react";
import {useRouterWithSearchParams} from "@/lib";
import {FAQ_LIST} from "@/app/faq/constants";

const ShowAnswers = () => {
  const [visible, setVisible] = React.useState(false);
  const {updateSearchParam, searchParams} = useRouterWithSearchParams();
  const getVisibleItems = useCallback(() => {
    const visibleItemsStr = searchParams.get('visible');
    return (visibleItemsStr?.split(',') || []).map(i => `${i}`);
  }, [searchParams])
  const onToggle = () => {
    let visibleItems = getVisibleItems();
    if (visibleItems.length === FAQ_LIST.length) {
      visibleItems = []
    } else {
      visibleItems = FAQ_LIST.map(i => `${i.id}`);
    }
    updateSearchParam('visible', visibleItems.join(','))
  }
  useEffect(() => {
    setVisible(getVisibleItems().length === FAQ_LIST.length);
  }, [searchParams, getVisibleItems]);
  return <Switch label="Show Answers" checked={visible} onChange={onToggle}/>

}

export default ShowAnswers;