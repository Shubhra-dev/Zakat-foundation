import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className="font-outfit min:h-screen large:m-auto">
      <Header />
      {/* <div className="w-full h-[88px]"></div> */}
      <div className="w-full large:w-5/6 large:m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
