import React from "react";
import {
  BsHeadset,
  BsPersonExclamation,
  BsEnvelopeExclamation,
  BsTelephone,
} from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

import { FaGooglePlus } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import { Link } from "react-router-dom";

import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="contact-us py-3 my-4 border-bottom">
          <div className="container justify-content-center ">
            <div className="row justify-content-center justify-content-lg-between align-items-center  w-100">
              <div className="col-lg-4  d-flex align-items-center mb-3 mb-lg-0 ">
                <p className="my-0 py-0   ">
                  <BsHeadset className="icon fs-3"></BsHeadset>
                </p>
                <p className="my-0 py-0 px-4">
                  {t("We_are_Always_Here_To_Help_Reach_out_to_us")}
                </p>
              </div>
              <div className="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
                <p className="my-0 py-0">
                  {""}
                  <BsPersonExclamation className="icon fs-3"></BsPersonExclamation>
                </p>
                <p className="my-0 py-0  contact-us  px-4">
                  {t("Help_Center")} help.noon.com
                </p>
              </div>
              <div className="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
                <p className="my-0 py-0  ">
                  <BsEnvelopeExclamation className="icon fs-3" />
                </p>
                <p className="my-0 py-0  contact-us px-4">
                  {t("email_support")} egypt@Emarket.com{" "}
                </p>
              </div>
              <div className="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
                <div className="circle-container">
                  <div className="contact-icon">
                    <BsTelephone className="icon fs-3"></BsTelephone>
                  </div>
                </div>
                <p className="my-0 py-0  contact-us px-4">
                  {" "}
                  {t("phone_support")} 16358{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ================================== End  contact-us ==================================  */}
        {/* ================================== Start Footer ==================================  */}
        <footer className="nb-footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">Electornics</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" title="">
                        {" "}
                        Mobile
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Tablets
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Labtops
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Camera
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Televisions
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        HeadPhones
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Home Appliances
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">Fashion</h2>
                  <ul className="list-unstyled ">
                    <li>
                      <a href="#" title="">
                        Women's Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        men's Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        Girl's Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        {" "}
                        men's watches{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Women's watches
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Eyewear{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 ">
                <div className="footer-info-single">
                  <h2 className="title">Home And Kitchen </h2>
                  <ul className="list-unstyled  w-100 ">
                    <li>
                      <a className="" href="#" title="">
                        Kitchen &amp; Dining{" "}
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Bedding{" "}
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Bath
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Home Decor
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        Home Applicances
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Home improvement
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 ">
                <div className="footer-info-single">
                  <h2 className="title">Beaut </h2>
                  <ul className="list-unstyled  w-100 ">
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Women's Fragrance
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Men's Fragrance{" "}
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Make-Up
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Skincare
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        Personal Care
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Tools &amp; Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">Security &amp; privacy</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Women's Fragrance
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Men's Fragrance{" "}
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Make-Up
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Skincare
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        Personal Care
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Tools &amp; Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-info-single">
                  <h2 className="title">Security &amp; privacy</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Strollers &amp; Accessories
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Car Seats{" "}
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Baby Clothing
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Feeding
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        Bathing &amp; Skincare
                      </a>
                    </li>
                    <li>
                      <a className="" href="#" title="">
                        {" "}
                        Baby &amp; Toddler Toys
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="socialMedia">
            <div className="container d-flex justify-content-between">
              <div className="row w-100 justify-content-md-between justify-content-center  align-items-center my-3">
                <div className="col-10 col-md-6 contact-us px-sm-3 text-center my-3">
                  <h3 className="fs-5"> Contact Us </h3>
                  <ul className="list-inline d-flex m-1 justify-content-center">
                    <li>
                      <a
                        className="text-decoration-none"
                        href="#"
                        title="FaFacebook"
                      >
                        <FaFacebook className="fs-1 px-2 text-warning" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="FaXTwitter">
                        <FaXTwitter className=" fs-1 px-2 text-warning ">
                          {" "}
                        </FaXTwitter>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="FaGooglePlus">
                        <FaGooglePlus className=" fs-1 px-2 text-warning "></FaGooglePlus>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="ImLinkedin">
                        <ImLinkedin className=" fs-1 px-2 text-warning "></ImLinkedin>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" col-10 col-md-6 Payments px-sm-3 text-center my-3">
                  <h3 className="fs-5"> Payment options </h3>
                  <div>
                    <img src="../../assets/images/paymentOption/card-amex.svg" />
                    <img src="../../assets/images/paymentOption/card-mastercard.svg" />
                    <img src="../../assets/images/paymentOption/card-visa.svg" />
                    <img src="../../assets/images/paymentOption/cod-en.svg" />
                    <img src="../../assets/images/paymentOption/valu.svg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="copyright py-1 mt-2">
            <div className="container">
              <div className="row">
                <div className="col-sx-12  text-center">
                  <p className="p-0 m-0">Copyright © 2017 E-market </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Footer;
