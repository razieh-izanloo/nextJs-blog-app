import { SideBar } from "./profile/_components/sideBar";
import { Header } from "./profile/_components/header";
import "./layout.scss";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default DashboardLayout;
