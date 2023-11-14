// import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import style from "./contact.module.css";
function Contact() {
  return (
    <div>
      {" "}
      {/* contact page */}
      <div className="contact d-flex justify-content-center align-items-center my-5">
        <div className="container">
          <div className="row">
            {/* contact info  */}
            <div className="contact-info col-lg-3 col-md-12  col-sm-12  mt-4 m-auto shadow p-3 mb-5 bg-body rounded">
              <div className="call border-bottom mb-3">
                <div className="mb-2">
                  <span className={style.contactinfospan}>
                    <AiOutlinePhone className={style.contactinfoi} />
                  </span>{" "}
                  Call To Us{" "}
                </div>
                <div className="mb-2 ps-4"> We are available 24/7</div>
                <div className="mb-2 ps-4"> 7 days a week.</div>
                <div className="mb-3 ps-4"> Phone: +8801611112222 </div>
              </div>
              <div className="email">
                <div className="mb-2">
                  <span className={style.contactinfospan}>
                    <FaRegEnvelope className={style.contactinfoi} />
                  </span>{" "}
                  Write To US
                </div>
                <div className="mb-2 ps-4">
                  {" "}
                  Fill out our form and we will contact you within 24 hours.{" "}
                </div>
                <div className="mb-2 ps-4">
                  {" "}
                  Emails: customer@exclusive.com{" "}
                </div>
                <div className="ps-4"> Emails: support@exclusive.com </div>
              </div>
            </div>
            {/*input form  */}
            <div className="input col-lg-8 col-md-12 col-sm-12  mt-4 m-auto shadow p-3 mb-5 bg-body rounded">
              <form>
                <div className="row mt-4">
                  <div className="col-lg-4 mb-2">
                    <input
                      className={style.input}
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-4 mb-2">
                    <input
                      className={style.input}
                      type="email"
                      id="exampleFormControlInput1"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-lg-4 mb-2">
                    <input
                      className={style.input}
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div className="mb-3 mt-4">
                  <textarea
                    className="form-control p-2"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Please enter your message "
                    defaultValue={""}
                  />
                </div>
                <div
                  className={`button d-flex justify-content-end mt-4 ${style.formbutton2}`}
                >
                  <button
                    className={`btn me-md-2 ${style.formbutton}`}
                    type="button"
                  >
                    Send Massage
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
