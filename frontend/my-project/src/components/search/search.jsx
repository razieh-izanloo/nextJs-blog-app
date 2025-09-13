"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import "./search.scss";

export const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search;
    const searchValue = search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form className="position-relative form-search" onSubmit={formSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
      />
      <button type="submit">
        <MagnifyingGlassIcon className="icon-search" />
      </button>
    </form>
  );
};
