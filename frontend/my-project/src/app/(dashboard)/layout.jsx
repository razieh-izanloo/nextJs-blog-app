import { Header } from "./profile/_components/header";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-secondary-0">
      <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
        <Header />
        <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
          <div className="xl:max-w-screen-xl md:pr-[250px]">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
