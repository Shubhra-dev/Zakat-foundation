import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-outfit min:h-screen w-full">
      <Header />
      <div className="w-full h-[88px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
