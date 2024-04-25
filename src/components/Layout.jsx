import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
