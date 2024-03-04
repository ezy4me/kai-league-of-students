import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
