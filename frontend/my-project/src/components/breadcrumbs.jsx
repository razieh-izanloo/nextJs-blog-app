import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 block">
      <ol className="flex text-[15px] gap-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className="flex gap-2"
          >
            <Link
              className={`text-secondary-${
                breadcrumb.active ? "800" : "600"
              }`}
              href={breadcrumb.href}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="inline-block text-secondary-600">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
