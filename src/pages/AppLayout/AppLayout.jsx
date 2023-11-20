import styles from "./AppLayout.module.css";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Navigation/Nav";
import MobileNav from "../../components/MobileNav/MobileNav";

export default function AppLayout() {
  return (
    <>
      <div className={`postion-relative ${styles.appLayout}`}>
        <div className={`${styles.fixed_nav} w-100`}>
          <Nav></Nav>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
        <div className={`${styles.bottomNavContainer}`}>
          <MobileNav></MobileNav>
        </div>
      </div>
    </>
  );
}
