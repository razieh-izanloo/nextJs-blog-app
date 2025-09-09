import Image from "next/image";
import "./layout.scss";

export default async function AuthLayout({ children }) {

  return (
    <div className="container">
      <div className="w-100 d-flex col-md-4 col-lg-3 bg-white">
        <div className="d-none d-md-flex justify-content-center align-items-center col-md-8">
          <Image
            src="/images/img-auth-page.jpg"
            alt="login"
            width="300"
            height="300"
          />
        </div>
        <div className="section-auth px-4 col-md-4">
          <div className="d-flex justify-content-center ">
            <Image
              src="/images/logo.png"
              className="my-4"
              alt="blogApp logo"
              width="70"
              height="70"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
