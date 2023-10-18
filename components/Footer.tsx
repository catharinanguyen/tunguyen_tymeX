import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer-container bg-nav-bg">
      <div className="footer-content">
        <div className="footer-nav w-[25%]">
          <h2 className="footer__content-name">Navigation</h2>
          <nav className="flex items-center justify-start gap-3 flex-wrap">
            <Link className="w-[100px]" href="/">
              Home
            </Link>
            <Link className="w-[100px]" href="/">
              About us
            </Link>
            <Link className="w-[100px]" href="/">
              Our Teams
            </Link>
            <Link className="w-[100px]" href="/">
              WhitePaper
            </Link>
            <Link className="w-[100px]" href="/">
              MarketPlace
            </Link>
            <Link className="w-[100px]" href="/">
              Road Map
            </Link>
            <Link className="w-[100px]" href="/">
              FAQs
            </Link>
            <Link className="w-[100px]" href="/">
              News
            </Link>
            <Link className="w-[100px]" href="/">
              Community
            </Link>
          </nav>
        </div>
        <div className="footer-contact w-[25%]">
          <h2 className="footer__content-name">Contact Us</h2>
          <ul className="gap-5">
            <li className="mb-4">
              <Link
                className="footer-contact__link number"
                href="tel:01234568910"
              >
                01234568910
              </Link>
            </li>
            <li>
              <Link
                className="footer-contact__link email"
                href="mailto:tymex-talent@tyme.com"
              >
                tymex-talent@tyme.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-subcribe">
          <h2 className="footer__content-name">
            Subcribe to receive our latest update
          </h2>
          <form className="flex justify-center items-center gap-3">
            <input
              type="text"
              className="w-[426px] h-[44px] rounded-[4px] border-white py-3 px-5 text-[12px] outline-none"
              value=""
              placeholder="Your email address"
            />
            <Button
              type="submit"
              className="common-button subcribe-button"
              title="Subcribe"
            />
          </form>
        </div>
      </div>
      <hr className="bg-[#3A3841] h-[1px]"></hr>
      <div className="footer-policy">
        <p className="">©2023 Tyme - Edit. All Rights reserved.</p>
        <ul className="flex items-center justify-between gap-8">
          <li>
            <Link href="/">Security</Link>
          </li>
          <li>
            <Link href="/">Legal</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
