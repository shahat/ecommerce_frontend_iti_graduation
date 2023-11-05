import React from "react";

export default function SecondNav() {
  return (
    <div className="bg-dark ">
      <div className="container-lg">
        <div className="row ">
          <div className="col-lg-3 d-none d-lg-block ">
            <a
              className="btn d-flex align-items-center justify-content-between text-dark w-100 px-1 bg-warning fs-2   rounded-0 dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ height: 45, padding: "0 30px" }}
            >
              <h6 className=" m-0">Categories</h6>
            </a>
            <ul
              className="dropdown-menu bg-dark  rounded-0   col-lg-3"
              style={{ width: "" }}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item text-white active" href="#">
                  Action
                </a>
              </li>
              <div className="dropdown-divider"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <div className="dropdown-divider"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 d-flex align-items-center ">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>

              <div
                className=" navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="shop.html" className="nav-item nav-link">
                    Shop
                  </a>
                  <a href="checkout.html" className="nav-item nav-link">
                    Checkout
                  </a>
                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
