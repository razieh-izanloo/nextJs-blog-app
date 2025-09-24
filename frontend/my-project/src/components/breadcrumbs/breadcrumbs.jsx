import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 d-block">
      <ol className="d-flex fs-6 gap-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className="d-flex gap-2"
          >
            <Link
              className={`text-secondary${
                breadcrumb.active ? "-emphasis" : ""
              }`}
              href={breadcrumb.href}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="d-inline-block text-secondary">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
