"use client";
import Link from "next/link";
import { generatePagination } from "@/utils/generatePagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "./pagination.scss";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", itemsPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="section-pagination">
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="d-flex">
        {allPages.map((page, index) => {
          let position;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({ page, href, isActive, position }) {
  const className = `pagination-number ${isActive ? "isActive-page" : ""}`;

  return (
    <Link
      href={position === "middle" || isActive ? "#" : href}
      className={`${className} ${position}`}
    >
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = `pagination-arrow mx-2 ${
    isDisabled ? "isDisabled-arrow" : ""
  }`;

  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className="icon-arrow" />
    ) : (
      <ArrowRightIcon className="icon-arrow" />
    );

  return (
    <Link className={className} href={isDisabled ? "#" : href}>
      {icon}
    </Link>
  );
}
