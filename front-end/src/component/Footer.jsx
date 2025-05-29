import React from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="">
      <div className="container">

        <div className="footer">
          <div className="footercta">
            <a href="#!">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="img">
                    <img src="	http://gomoto.like-themes.com/wp-content/uploads/2019/06/footer-banner.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-content">
                    <span> Call us to make order now </span>
                    <span className="num">
                       90-500-28-999
                    </span>
                  </div>
                </div>
              </div>
              <div className="call">
                <MdCall />

              </div>
            </a>
          </div>
          <div className="footerlogo">
            <a href="#!">
              <img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/logo_1x.png" alt="" />
            </a>
          </div>
          <div className="fotpara text-center">
            <p className="">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
          </div>
          <div className="icon">
            <ul>
              <li><a href="#!"><FaXTwitter /></a></li>
              <li><a href="#!"><CiFacebook /></a></li>
              <li><a href="#!"><FaInstagram /></a></li>
              <li><a href="#!"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 pb-0 border-top border-dotted text-white">
          <p>© 2025 GOMOTO, Inc. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
