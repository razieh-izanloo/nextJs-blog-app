import Link from "next/link";

function NotFound() {
  return (
    <div className="container">
      <div className="d-flex justify-justify-center pt-4">
        <div>
          <p className="fs-4 font-bold text-secondary mb-4">
            هیچ پستی با این مشخصات یافت نشد
          </p>
          <Link href="/blogs" className="text-primary font-bold">
            رفتن به صفحه پست؟
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
