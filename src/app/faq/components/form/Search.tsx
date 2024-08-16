'use client'

import Input from "@/app/faq/components/form/Input";
import SearchIcon from "@/app/faq/components/icons/SearchIcon";
import {debounce, useRouterWithSearchParams} from "@/lib";
import React, {ChangeEvent, useEffect} from "react";

export type SearchProps = {
  id: string;
  placeholder: string;
}

const Search = (props: SearchProps) => {
  const [value, setValue] = React.useState("");
  const {updateSearchParam, searchParams} = useRouterWithSearchParams();
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    updateSearchParam(`search-${props.id}`, value)
  }
  useEffect(() => {
    setValue(searchParams.get(`search-${props.id}`) || '')
  }, []);
  const debouncedSearch = debounce(search, 400);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedSearch(event);
  }
  return <Input
    id={`search-${props.id}`}
    name={`search-${props.id}`}
    placeholder={props.placeholder}
    type="text"
    value={value}
    icon={<SearchIcon/>}
    onChange={onChange}
  />
}

export default Search;