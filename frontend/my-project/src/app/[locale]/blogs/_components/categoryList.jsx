import Link from "next/link";
import "./categoryList.scss";

export const CategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="section-category-list">
      <Link href="/blogs" className="py-2">همه</Link>
      {categories.map((category) => {
        return (
          <li key={category._id} className="py-2">
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
