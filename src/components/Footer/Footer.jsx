import mail from "../../assets/images/Mail.png";
import Facebook2 from "../../assets/images/Facebook2.png";
import Twitter2 from "../../assets/images/Twitter2.png";
import Youtube2 from "../../assets/images/Youtube2.png";
import Linkedin2 from "../../assets/images/Linkedin2.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  const footerItems = [
    {
      title: "Company",
      links: ["About Us", "Portfolio", "Blogs", "Contact Us"],
    },
    {
      title: "Ed Tech",
      links: [
        "Students Information System",
        "K12 School App",
        "Day Care Montessori Software",
        "Students Online Portal",
      ],
    },
    {
      title: "Website",
      links: [
        "Website Development",
        "Website Revamp",
        "UI/UX Design",
        "E-Commerce Solutions",
        "Content Writing",
      ],
    },
    {
      title: "Bespoke Solutions",
      links: [
        "CRM",
        "Inventory Software",
        "Mobile Application",
        "Web Application",
        "Custom Solutions",
      ],
    },
    {
      title: "Digital Services",
      links: [
        "Students Enrolment Leads",
        "Graphic Designing",
        "Content Creation",
        "Social Media Management",
        "SEO",
      ],
    },
    {
      title: "Marketing Services",
      links: ["YouTube Ads", "PPC Ads", "Meta Ads", "E-mail Marketing"],
    },
  ];
  return (
    <div className="footer pb-15 md:pt-56 md:pb-36">
      <div className="container ">
        <div className="footer-top pb-15 sm:pb-36">
          <h1 className="font-heading font-bold text-[20px] md:text-[25px] text-sub1Color text-center">
            Subscribe to our newsletter
          </h1>
          <div className="subscribe md:w-[376px] m-auto relative">
            <img
              src={mail}
              alt="mail icon"
              className="absolute top-[13px] left-[9px]"
            />
            <input
              id="fullName"
              type="text"
              className="mt-1 block w-full m-auto bg-[#EAECF0]  py-2 pl-30 pr-[128px]  rounded-sm outline-none "
              placeholder="Input your email"
            />
            <button className="!cursor-pointer absolute top-0 right-0 py-[9px] px-[23px] font-body font-normal text-sm text-headingColor bg-btnColor border border-btnColor border-solid hover:bg-secondary hover:text-btnColor hover:border-btnColor transition duration-800 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mini:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 ">
          {footerItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-heading text-base font-bold leading-[30px] text-sub1Color">
                {item.title}
              </h3>
              <ul className=" sm:mt-4 space-y-2">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to="/path1"
                      className="font-body text-sm font-normal text-sub1Color leading-[22px]  hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" pt-15 md:pt-36 copyright flex items-center justify-between  flex-col sm:flex-row ">
          <div className="relative w-full sm:w-fit">
            
            <select
              id="services"
              className="mt-1 block w-full px-4 py-2   rounded-sm  bg-[#EAECF0]  focus:outline-none "
            >
              <option value="">English</option>
              <option value="webDesign">Urdu</option>
              <option value="seo">Arabic</option>
            </select>
           
          </div>
          <p className="font-body font-normal text-xs sm:text-sm text-copyColor p-3 sm:py-0">© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
          <ul className="social flex items-center justify-between">
          <li className="pl-4">
            <Link to="#">
            <img src={Twitter2} alt="" />
            </Link>
          </li>
          <li className="pl-4">
            <Link to="#">
            <img src={Facebook2} alt="" />
            </Link>
          </li>
          <li className="pl-4">
            <Link to="#">
            <img src={Linkedin2} alt="" />
            </Link>
          </li >
          <li className="pl-4">
            <Link to="#">
            <img src={Youtube2} alt="" />
            </Link>
          </li>
        </ul>
        </div>
       
      </div>
    </div>
  );
};
