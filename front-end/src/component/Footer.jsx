import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="">
       

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 pb-0 border-top">
          <p>© 2025 Gofood, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#" aria-label="Instagram">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram" />
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#" aria-label="Facebook">
                <svg className="bi" width="24" height="24" aria-hidden="true">
                  <use xlinkHref="#facebook" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
