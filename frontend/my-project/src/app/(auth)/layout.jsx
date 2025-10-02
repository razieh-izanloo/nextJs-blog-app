import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12  bg-secondary-0">
        <div className="hidden md:flex md:col-span-6 xl:col-span-8 justify-center items-center">
          <Image
            src="/images/img-auth-page.jpg"
            alt="login"
            width="300"
            height="300"
          />
        </div>
        <div className="flex col-span-12 justify-center md:col-span-6 flex-col xl:col-span-4 py-8 h-screen md:shadow ">
          <div className="flex justify-center ">
            <Image
              src="/images/logo.png"
              className="my-4"
              alt="blogApp logo"
              width="50"
              height="50"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
