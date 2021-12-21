import React from "react";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto text-black">
      <footer className="text-sm sm:text-lg py-10 px-5 xl:px-0">
        <div className="text-gray-600 grid grid-cols-2 md:grid-cols-4 gap-9 border-b-2 pb-14">
          <div className="">
            <h3 className="mb-10 font-medium text-xl text-black">About Us</h3>
            <ul className="space-y-7">
              <li>Our Company</li>
              <li>Our Coffee</li>
              <li>Stories and News</li>
              <li>Starbucks Archive</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-10 font-medium text-xl text-black">Careers</h3>
            <ul className="space-y-7">
              <li className="">Culture and Values</li>
              <li>Inclusion, Diversity, and Equity</li>
              <li>College Achievement</li>
              <li>Alumni Community</li>
              <li>U.S. Careers</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-10 font-medium text-xl text-black">
              Social Impact
            </h3>
            <ul className="space-y-7">
              <li className="">People</li>
              <li>Planet</li>
              <li>environmental and Social Impact Reporting</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-10 font-medium text-xl text-black">
              For Business Partners
            </h3>
            <ul className="space-y-7">
              <li className="">Landlord Support Center</li>
              <li>Suppliers</li>
              <li>Corporate Gift Card Sales</li>
              <li>Office and Foodservice Coffee</li>
            </ul>
          </div>
        </div>
        <div className="space-y-7 pt-10">
          <div className="flex space-x-5">
            <a className="" href="#">
              <img
                className="h-7 sm:h-9"
                src="/img/social-spotify.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-7 sm:h-9"
                src="/img/social-facebook.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-7 sm:h-9"
                src="/img/social-pinterest.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-7 sm:h-9"
                src="/img/social-instagram.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-7 sm:h-9"
                src="/img/social-youtube.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-7 sm:h-9"
                src="/img/social-twitter.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col md:flex-row text-sm md:text-lg">
            <div className="space-y-4 sm:flex sm:space-x-5 sm:space-y-0">
              <span>Privacy Policy</span>
              <div className="border-l-2 border-black" />
              <span>Terms of Use</span>
              <div className="border-l-2 border-black" />
              <span>CA Supply Chain Act</span>
              <div className="border-l-2 border-black" />
              <span>Cookie Preferences</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">
              © 2022 Starbucks landing page.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
