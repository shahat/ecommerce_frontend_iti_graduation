import React from "react";
import styles from "./AppLayout.module.css";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Navigation/Nav";

export default function AppLayout() {
  return (
    <>
      <div className="postion-relative">
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        <div className={`${styles.bottomNavContainer}`}>
          <div className={`${styles.bottom_nav}`}> this is hamde </div>{" "}
        </div>
      </div>
    </>
  );
  }