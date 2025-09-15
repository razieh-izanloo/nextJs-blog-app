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
        {/* <aside>
          <SideBar />
        </aside> */}
        <div className="warpper">
          <Header />
          <main>{children}</main>
        </div>
      </div>
  );
};
export default DashboardLayout;
