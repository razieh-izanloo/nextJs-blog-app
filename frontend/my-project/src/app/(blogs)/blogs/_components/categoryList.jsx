import Link from "next/link";

export const CategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="section-category-list">
      <Link className="text-secondary-400 py-2" href="/blogs">
        همه
      </Link>
      {categories.map((category) => {
        return (
          <li key={category._id} className="py-2">
            <Link
              className="text-secondary-400"
              href={`/blogs/category/${category.slug}`}
            >
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
