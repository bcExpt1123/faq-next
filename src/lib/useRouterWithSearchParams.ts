import {usePathname, useRouter, useSearchParams} from "next/navigation";

const useRouterWithSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const updateSearchParam = (key: string, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value) {
      current.set(key, value);
    } else {
      current.delete(key);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }
  return {
    updateSearchParam,
    searchParams,
    router,
    pathname
  }
}

export default useRouterWithSearchParams;