import { platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="relative bg-red-700">
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 800">
          <path
            fill="#b20000"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,224C672,256,768,256,864,245.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto py-4 px-8 xl:px-0">
        <div className="grid sm:grid-cols-2 gap-4 border-b border-neutral-100 py-10 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-left text-3xl text-white font-bold">
              J-Monk Devops
            </h1>
            <p className=" text-left text-neutral-200 text-base font-extralight leading-6">
              J-Monk Devops enhances everyday lives by providing software that
              digitalizes to improve business growth with latest tools and
              technologies.
            </p>
            <ul className="flex justify-evenly md:justify-normal gap-4 mt-6">
              {platformLinks.map((link, index) => (
                <li key={index} className="flex">
                  <a
                    className="text-neutral-200 border border-white rounded-full p-2 transition duration-1000 ease-in-out hover:bg-neutral-200 hover:text-red-600"
                    href={link.href}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-200 text-base hover:text-white font-extralight"
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Contact Info
              </h3>
              <p className="text-neutral-200 text-base font-extralight">
                Door No.5-69, Pedaparimi Village, Thullur Mandal, Guntur
                District, 522236, Andhra Pradesh
              </p>
              <p className="text-neutral-200 text-base font-extralight">
                +91 7330300203
              </p>
              <p className="text-neutral-200 text-base font-extralight">
                jmonkdevops@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h6 className="text-neutral-200 text-sm font-normal text-center">
            Copyright © 2024 J-Monk Devops. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
