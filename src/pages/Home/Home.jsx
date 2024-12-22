import Button from "../../components/Buttons/PrimaryBtn";
import { Header } from "../../components/Headers/Header";
import HeroImage from "../../assets/images/hero.png";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import about1 from "../../assets/images/about1.png";
import education from "../../assets/images/education.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import info from "../../assets/images/info.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import whatsapp from "../../assets/images/whatsapp.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import pro from "../../assets/images/pro6.png";
import profile1 from "../../assets/images/pro1.png";
import profile2 from "../../assets/images/pro2.png";
import profile3 from "../../assets/images/pro3.png";
import mail from "../../assets/images/Mail 1.png";
import laptop from "../../assets/images/laptop.png";
import headphone from "../../assets/images/head2.png";
import shadow from "../../assets/images/shadow.png";
import phone1 from "../../assets/images/Phone1.png";
import email1 from "../../assets/images/email1.png";
import location from "../../assets/images/location1.png";
import facebook1 from "../../assets/images/facebook1.png";
import twitter1 from "../../assets/images/twitter1.png";
import insta1 from "../../assets/images/insta1.png";
import image24 from "../../assets/images/Image 24.png";
import image25 from "../../assets/images/Image 25.png";
import image26 from "../../assets/images/Image 26.png";
import linedin1 from "../../assets/images/linkedin.png";
import { Link } from "react-router-dom";
import AboutSection from "../../components/AboutSection/AboutSection";
import { FaArrowRightLong } from "react-icons/fa6";
import Profile from "../../components/Profile/Profile";
import { IoVideocam } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import ParticleBackground from "../../components/ParticalAnimation/ParticleBackground";
export const Home = () => {
  return (
    <div>
      {/*Hero Section start*/}
      <div className="bg-primary relative" id="hero">
        <Header />
        <div className="hero relative z-10">
          <div className="container m-auto ">
            <div className="hero-body px-0 lg:px-[73px] ">
              <div className="sub-heading">
                <h4 className="text-center  font-body font-bold text-[#CFD2DA] text-lg md:text-3xl">
                  Leading the Charge In EdTech Transformation
                </h4>
              </div>
              <div className="heading">
                <h1 className="text-center text-secondary font-heading font-bold text-white text-2xl md:text-4xl lgg:text-5xl py-4">
                  {" "}
                  Empowering Educators, Inspiring Students{" "}
                </h1>
              </div>
              <div className="description">
                <p className="text-center text-[#CFD2DA] text-base font-normal text-body md:px-[67px]">
                  We build transformative EdTech solutions to simplify your
                  education management needs, so you can focus on what really
                  matters. Whether it’s enrollments, tuition, financial or daily
                  operations, Three Apples puts control at your fingertips!
                </p>
              </div>
              <div className="hero-btn">
                <div className="book-btn flex items-center flex-col sm:flex-row justify-center mt-4">
                  <Button
                    text="Book a Demo"
                    className="py-[9px] px-[10px] bg-btnColor border border-btnColor border-solid hover:bg-primary hover:text-btnColor hover:border-btnColor transition duration-800 ease-in-out"
                    icon={<IoVideocam />}
                  />
                  <Button
                    text="Get a Quote"
                    className="font-body font-normal ml-4 py-[9px] px-[27px] text-base text-secondary border border-primary border-solid hover:bg-primary hover:text-btnColor hover:border-btnColor transition duration-800 ease-in-out"
                  />
                </div>
              </div>

              <div className="hero-img">
                <img src={HeroImage} className="m-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
        <ParticleBackground />
      </div>
      {/*Hero Section end*/}
      {/* Brand start*/}
      <div
        className="brand-section bg-secondary pb-15 pt-15 md:pt-64 md:pb-56"
        id="about"
      >
        <div className="container m-auto">
          <div className="brand-top">
            <div className="brand-heading">
              <h1 className="text-center font-heading font-headingColor font-bold text-[25px] md:text-[34px]">
                Endorsed Across Canada
              </h1>
            </div>
            <div className="brand-description md:w-[550px] m-auto text-center text-headingColor font-normal text-base font-body py-2 md:py-4">
              <p>
                We are a trusted partner for many of Canadas top educational
                institutions, delivering premium services across a range of
                domains.
              </p>
            </div>
            <div className="brand-logo grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:px-[88px]">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={logo1} alt="Logo 1" className=" object-contain" />
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={logo2} alt="Logo 2" className=" object-contain" />
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={logo3} alt="Logo 3" className=" object-contain" />
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={logo4} alt="Logo 4" className=" object-contain" />
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={logo5} alt="Logo 5" className=" object-contain" />
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={logo6} alt="Logo 6" className=" object-contain" />
              </Link>
            </div>
          </div>
          <div className="about">
            <AboutSection
              image={about1}
              title="We Help You Succeed Through Personalized EdTech Solutions that Everyone Loves! "
              subtitle="An Education Ecosystem Where Everyone Thrives"
              description="Leading the forefront of EdTech innovation, Three Apples empowers educators to navigate productivity challenges, dismantle data silos, and enhance management efficiency. Our systems are all experience-engineered with a special focus on user-friendliness, cross-compatibility, and scalability, so you always stay on top of your business without compromising on time or budget."
              buttonText="Learn More"
              buttonLink="#"
              bgColor="pt-15 md:pt-56 md:px-3"
            />
          </div>
        </div>
      </div>
      {/* Brand end*/}
      {/* Education Section start */}
      <div className="education-section">
        <div className="container m-auto">
          <div className="educatio-top md:w-[650px] m-auto pt-15 pb-15 md:pt-24 md:pb-40">
            <div className="sub-heading">
              <h5 className="font-body text-center font-normal text-base">
                Partners in Education Success
              </h5>
            </div>
            <div className="heading">
              <h1 className="font-heading font-bold text-headingColor text-center text-[25px] md:text-[34px] py-[8px]">
                Transforming Education Through Digital Transformation
              </h1>
            </div>
            <div className="description font-body text-base font-normal text-headingColor text-center">
              <p>
                Our solutions are designed to end your stress, so you focus on
                things that matter.
              </p>
            </div>
          </div>
          <div className="education-main">
            <AboutSection
              image={education}
              title="K12 School App"
              subtitle="Streamline and Enhance Management With"
              description="Three Apples K-12 Education Software is an all-in-one solution designed for school administrators, students, teachers, and parents that transforms school operations into a single-point access system."
              buttonText="Learn More"
              bgColor="bg-edubgColor rounded-md"
              reverse={true}
              order="subtitleFirst"
            />
            <div className="w-full information">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 py-4 md:pr-4">
                  <div
                    className="bg-edubgColor px-2 py-3 md:px-32 md:py-40 rounded-md"
                    style={{ boxShadow: "0px 0px 1px 0px #171A1F12" }}
                  >
                    <div className="information pb-6">
                      <div className="sub-heading font-body font-normal text-sub1Color text-[14px] ">
                        <h5>Boost Administrative Efficiency With </h5>
                      </div>
                      <div className="info-heading font-heading font-bold text-xl lg-tab:text-[34px] text-headingColor ">
                        <h1>Student Information System</h1>
                      </div>
                      <div className="info-description font-body font-normal text-[14px] text-headingColor pt-2 pb-4">
                        <p>
                          Three Apples Student Information System (SIS) software
                          is a cloud backed, LMS-integrated platform equipped
                          with a comprehensive toolkit of features.
                        </p>
                      </div>
                      <Button
                        text="Learn More"
                        icon={<FaArrowRightLong />}
                        className=" bg-btnColor border border-solid border-btnColor  text-headingColor rounded-lg hover:bg-secondary transition ease-in-out"
                      />
                    </div>
                    <div className="info-img">
                      <img src={info} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 py-4">
                  <div
                    className="bg-edubgColor px-2 py-3 md:px-32 md:py-40 rounded-md"
                    style={{ boxShadow: "0px 0px 1px 0px #171A1F12" }}
                  >
                    <div className="information pb-6">
                      <div className="sub-heading font-body font-normal text-sub1Color text-[14px] ">
                        <h5>Advance Communication and Accessibility With</h5>
                      </div>
                      <div className="info-heading font-heading font-bold text-xl lg-tab:text-[34px] text-headingColor pr-64">
                        <h1>Students Online Portal</h1>
                      </div>
                      <div className="info-description font-body font-normal text-[14px] text-headingColor pt-2 pb-4">
                        <p>
                          Three Apples Students Portal offers a centralized hub
                          for students to effortlessly access various services
                          and educational information related to your institute.
                        </p>
                      </div>
                      <Button
                        text="Learn More"
                        icon={<FaArrowRightLong />}
                        className=" bg-btnColor border border-solid border-btnColor  text-headingColor rounded-lg hover:bg-secondary transition ease-in-out"
                      />
                    </div>
                    <div className="info-img">
                      <img src={info} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Education Section end */}
      {/* business challenge start */}
      <div className="business ">
        <div className="container relative m-auto">
          <div className="business-top md:w-[650px] m-auto pb-3 md:pt-24 md:pb-40">
            <div className="sub-heading">
              <h5 className="font-body text-center font-normal text-base">
                Solve Complex Business Challenges With
              </h5>
            </div>
            <div className="heading">
              <h1 className="font-heading font-bold text-headingColor text-center text-[25px] md:text-[34px] py-[8px]">
                Bespoke Software and App Solutions
              </h1>
            </div>
            <div className="description font-body text-base font-normal text-headingColor text-center">
              <p>
                As an EdTech specialty organization, we offer deep-domain
                expertise in education software development. We understand the
                unique challenges educators face and tailor our software
                development services based on their requirements and evolving
                needs.
              </p>
            </div>
            <div className="explore-btn">
              <Button
                text="Explore More"
                icon={<FaArrowRightLong />}
                className=" bg-expBtn border border-solid border-expBtn  text-secondary rounded-md hover:bg-secondary hover:text-headingColor transition ease-in-out m-auto mt-4"
              />
            </div>
          </div>
          <Profile />
          <div className="flex flex-wrap w-[70%] m-auto lg-desk:hidden">
            <div className="w-full md:w-1/2 py-4 pr-4">
              <div className="left-box relative     md:w-[278px]  ">
                <div className="left-img relative w-fit">
                  <img src={left} alt="left " />
                  <div className="whatsapp absolute top-56 right-[-20px] animate-hithere">
                    <img src={whatsapp} alt="" />
                  </div>
                  <button className="font-body font-normal text-xs leading-5 p-2 rounded-[30px] bg-btnBgColor text-secondary absolute bottom-[110px] right-[-56px] right-0">
                    Marco U.
                  </button>
                </div>
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="absolute bottom-[85px] right-0 animate-gelatine"
                />
                <div className="w-fit absolute right-0 bottom-[-15px] bg-secondary  pro-card flex items-center justify-between border border-borderColor border-solid rounded-lg shadow-custom-shadow p-1">
                  <img src={pro} alt="Profile img" />
                  <div className="detial pl-3">
                    <h3 className="font-body text-[14px] text-headingColor font-normal">
                      Michael Taylor
                    </h3>
                    <p className="font-body text-[10px] text-headingColor font-normal">
                      Aute incididunt anim mi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 py-4 pr-4 m-auto">
              <div className="right-box  relative  md:w-[278px]  ">
                <div className="left-img relative w-fit">
                  <img src={right} alt="left " />
                  <div className="whatsapp absolute top-[-30px] left-30 animate-pulse">
                    <img src={youtube} alt="" />
                  </div>
                  <button className="font-body font-normal text-xs leading-3 p-2 rounded-[30px] bg-proPlus text-secondary absolute bottom-[-50px] right-[80px] right-0">
                    Tom B.
                  </button>
                </div>
                <img
                  src={mail}
                  alt="email icon"
                  className="absolute bottom-[-40px] right-30 animate-bounce"
                />
                <img
                  src={twitter}
                  alt="facebook icon"
                  className="absolute bottom-[-40px] left-[-20px] animate-flip"
                />
                <div className="grid grid-cols-5 absolute bottom-[-15px] left-30 gap-0 max-w-sm mx-auto">
                  <img
                    src={profile1}
                    className="w-30 h-30 sm:w-40 sm:h-40 rounded-full object-cover bg-pro1 border border-proPlus border-solid"
                    alt="Profile img"
                  />
                  <img
                    src={profile2}
                    className="w-30 h-30 sm:w-40 sm:h-40 rounded-full object-cover ml-[-6px] bg-pro2 border border-btnColor border-solid"
                    alt="Profile img"
                  />
                  <img
                    src={profile3}
                    className="w-30 h-30 sm:w-40 sm:h-40 rounded-full object-cover ml-[-11px] bg-pro3 border border-avatarColor border-solid"
                    alt="Profile img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="business-bottom pt-[72px] pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className=" relative flex items-center justify-between">
                <div className="icon absolute">
                  <img src={icon1} alt="" />
                  <div className="bar h-[102px] w-[2px] bg-[#BDC1CA] ml-3 mt-1"></div>
                </div>
                <div className="social-info px-24 py-30">
                  <h4 className="font-body font-bold text-base text-headingColor pb-2">
                    PPC & Youtube Ads
                  </h4>
                  <p className="font-body font-normal text-[14px] text-headingColor">
                    Targeted, cost-efficient advertising for instant reach.
                  </p>
                </div>
              </div>
              <div className=" relative flex items-center justify-between">
                <div className="icon absolute">
                  <img src={icon2} alt="" />
                  <div className="bar h-[102px] w-[2px] bg-[#BDC1CA] ml-3 mt-1"></div>
                </div>
                <div className="social-info px-24 py-30">
                  <h4 className="font-body font-bold text-base text-headingColor pb-2">
                    Social Media
                  </h4>
                  <p className="font-body font-normal text-[14px] text-headingColor">
                    Strategic and highly engaging content for social audiences.
                  </p>
                </div>
              </div>
              <div className=" relative flex items-center justify-between">
                <div className="icon absolute">
                  <img src={icon3} alt="" />
                  <div className="bar h-[102px] w-[2px] bg-[#BDC1CA] ml-3 mt-1"></div>
                </div>
                <div className="social-info px-24 py-30">
                  <h4 className="font-body font-bold text-base text-headingColor pb-2">
                    Search Engine Optimization
                  </h4>
                  <p className="font-body font-normal text-[14px] text-headingColor">
                    Organically optimized, long-terms visibility for business.
                  </p>
                </div>
              </div>
              <div className=" relative flex items-center justify-between">
                <div className="icon absolute">
                  <img src={icon4} alt="" />
                  <div className="bar h-[102px] w-[2px] bg-[#BDC1CA] ml-3 mt-1"></div>
                </div>
                <div className="social-info px-24 py-30">
                  <h4 className="font-body font-bold text-base text-headingColor pb-2">
                    E-mail Marketing
                  </h4>
                  <p className="font-body font-normal text-[14px] text-headingColor">
                    Result-driven communication to nurture and drive
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-box absolute hidden  lg-desk:flex   w-[278px] xl:top-[190px] xl:right-[-30px] right-[10px] top-[230px] ">
            <div className="left-img relative w-fit">
              <img src={right} alt="left " />
              <div className="whatsapp absolute top-[-30px] left-30 animate-pulse">
                <Link to="#">
                  <img src={youtube} alt="" />
                </Link>
              </div>
              <button className="font-body font-normal text-xs leading-3 p-2 rounded-[30px] bg-proPlus text-secondary absolute bottom-[-50px] right-[80px] right-0">
                Tom B.
              </button>
              <img src="" alt="" />
            </div>
            <Link to="#">
              <img
                src={mail}
                alt="email icon"
                className="absolute bottom-[-40px] right-30 animate-bounce"
              />
            </Link>
            <Link to="#">
              <img
                src={twitter}
                alt="facebook icon"
                className="absolute bottom-[-40px] left-[-20px] animate-flip"
              />
            </Link>

            <div className="grid grid-cols-5 absolute bottom-[-15px] left-30 gap-0 max-w-sm mx-auto">
              <Link to="#">
                <img
                  src={profile1}
                  className="w-40 h-40 rounded-full object-cover bg-pro1 border border-proPlus border-solid"
                  alt="Profile img"
                />
              </Link>
              <Link to="">
                <img
                  src={profile2}
                  className="w-40 h-40 rounded-full object-cover ml-[-6px] bg-pro2 border border-btnColor border-solid"
                  alt="Profile img"
                />
              </Link>
              <Link to="">
                <img
                  src={profile3}
                  className="w-40 h-40 rounded-full object-cover ml-[-11px] bg-pro3 border border-avatarColor border-solid"
                  alt="Profile img"
                />
              </Link>
            </div>
          </div>
          <div className="left-box absolute hidden  lg-desk:flex  w-[278px] top-56 left-[-45px] lgg:left-[-30px] ">
            <div className="left-img relative w-fit">
              <img src={left} alt="left " />
              <div className="whatsapp absolute top-56 right-[-20px] animate-hithere">
                <Link to="">
                  {" "}
                  <img src={whatsapp} alt="whatsapp icon" />
                </Link>
              </div>
              <button className="font-body font-normal text-xs leading-5 p-2 rounded-[30px] bg-btnBgColor text-secondary absolute bottom-[110px] right-[-56px] right-0">
                Marco U.
              </button>
            </div>
            <Link to="">
              <img
                src={facebook}
                alt="facebook icon"
                className="absolute bottom-[85px] right-0 animate-gelatine"
              />
            </Link>
            <div className="w-fit absolute right-0 bottom-[-15px] bg-secondary  pro-card flex items-center justify-between border border-borderColor border-solid rounded-lg shadow-custom-shadow p-1">
              <img src={pro} alt="Profile img" />
              <div className="detial pl-3">
                <h3 className="font-body text-[14px] text-headingColor font-normal">
                  Michael Taylor
                </h3>
                <p className="font-body text-[10px] text-headingColor font-normal">
                  Aute incididunt anim mi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* business challenge end */}
      {/* Edtech section start */}
      <div className="edtech py-15 md:py-56">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 bg-primary relative rounded-md">
            <div className="col-span-12 lg:col-span-6 p-4  py-15 pl-15 md:py-56 md:pl-100 order-2 lg:order-1">
              <h1 className="font-heading font-bold text-[25px] md:text-[34px] text-secondary">
                Take A Bite Into Smarter EdTech Solutions.
              </h1>
              <h5 className="font-body font-normal text-lg text-borderColor py-4">
                Book a Demo Now!
              </h5>
              <div className="flex items-center flex-col mini:flex-row">
                <Button
                  text="Book a Demo"
                  icon={<IoVideocam />}
                  className="py-[9px] px-[10px] bg-btnColor border border-btnColor border-solid hover:bg-primary hover:text-btnColor hover:border-btnColor transition duration-800 ease-in-out mb-3 mini:mb-0 mini:mr-4"
                />
                <Link
                  to="#"
                  className="font-body font-normal text-sm text-secondary underline"
                >
                  Download E-Brochure
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6  p-4 z-20 order-1 lg:order-2">
              <div className="laptop-img relative ml-32">
                <img
                  src={headphone}
                  alt="headphone vector"
                  className="absolute top-[-50px] left-40 w-[70px] z-10 animate-flip"
                />
                <img
                  src={laptop}
                  alt="Laptop image"
                  className="p-3  rotate-[4deg] hover:rotate-[0deg] transition duration-1000 ease-in-out"
                />
              </div>
            </div>
            <img
              src={shadow}
              alt="gradient"
              className="absolute bottom-0 right-0 z-0"
            />
          </div>
        </div>
      </div>
      {/* Edtech section end */}
      <div className="contact bg-edubgColor">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 md:pt-72 md:pb-78">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <div className="contact-info md:w-[358px] ">
                <h5 className="font-body font-normal text-base text-sub1Color">
                  Interested In Our Products?
                </h5>
                <h1 className="font-heading font-bold text-[34px] py-4 text-headingColor leading-10">
                  Get A Quote
                </h1>
                <p className="font-body font-normal text-base text-headingColor pb-25">
                  Get in touch with our sales team for a detailed breakdown of
                  the product.
                </p>
                <div className="phone flex items-center">
                  <div className="icon">
                    <img src={phone1} alt="" />
                  </div>
                  <p className="pl-3 font-body font-normal text-headingColor text-sm">
                    (817) 810-3785
                  </p>
                </div>
                <div className="phone flex items-center py-25">
                  <div className="icon">
                    <img src={email1} alt="" />
                  </div>
                  <p className="pl-3 font-body font-normal text-headingColor text-sm ">
                    htaylor@hotmail.com
                  </p>
                </div>
                <div className="phone flex items-center pb-[47px]">
                  <div className="icon">
                    <img src={location} alt="" />
                  </div>
                  <p className="pl-3 font-body font-normal text-headingColor text-sm ">
                    htaylor@hotmail.com
                  </p>
                </div>
                <div className="socail-icon">
                  <ul className="flex gap-2">
                    <li className="w-44 h-44 flex items-center justify-center">
                      <Link to="#">
                        <img src={facebook1} alt="facebook" />
                      </Link>
                    </li>
                    <li className="w-44 h-44 flex items-center justify-center">
                      <Link to="#">
                        <img src={twitter1} alt="twitter icon" />
                      </Link>
                    </li>
                    <li className="w-44 h-44 flex items-center justify-center">
                      <Link to="#">
                        <img src={insta1} alt="instagram" />
                      </Link>
                    </li>
                    <li className="w-44 h-44 flex items-center justify-center">
                      <Link to="#">
                        <img src={linedin1} alt="linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <form className="bg-primary p-15 md:px-40 md:py-32 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="font-body font-bold text-base text-secondary"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="mt-1 block w-full px-4 py-2 border border-inputBorder rounded-sm outline-none "
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="font-body font-bold text-base text-secondary"
                    >
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      className="mt-1 block w-full px-4 py-2 border border-inputBorder rounded-sm outline-none "
                      placeholder="Business Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="font-body font-bold text-base text-secondary"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1 block w-full px-4 py-2 border border-inputBorder rounded-sm outline-none"
                      placeholder="yourmail@emaily.com"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="services"
                      className="font-body font-bold text-base text-secondary"
                    >
                      Services
                    </label>
                    <select
                      id="services"
                      className="mt-1 block w-full px-4 py-2 border border-inputBorder  rounded-sm appearance-none bg-white  focus:outline-none "
                    >
                      <option value="">Select a Service</option>
                      <option value="webDesign">Web Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <div className="absolute top-24 right-0 mt-4 mr-4 text-xl text-gray-700 pointer-events-none">
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="help"
                    className="font-body font-bold text-base text-secondary"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="help"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-inputBorder rounded-sm outline-none "
                    placeholder="Describe how we can assist you"
                  ></textarea>
                </div>

                <div>
                  <Button
                    text=" Send My Message"
                    className="w-full py-[9px] px-[10px] bg-btnColor rounded-sm mt-4 text-center justify-center border border-btnColor border-solid hover:bg-primary hover:text-btnColor hover:border-btnColor transition duration-800 ease-in-out"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="belog">
        <div className="container my-15 md:my-12 mx-auto">
          <div className="belog-top md:w-[590px] m-auto pb-4">
            <h1 className="font-heading font-bold text-[25px] md:text-[34px] text-headingColor text-center">
              Stay Informed
            </h1>
            <p className="font-body font-normal text-[#9095A1] text-sm md:text-lg text-center ">
              Stay updated on the latest education industry news, trends, and
              evolving landscape.
            </p>
          </div>
          <div className="flex flex-wrap mx-1 lg:-mx-4 md:mb-0 mb-2">
            <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-md shadow-custom-shadow">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full hover:scale-110 transition duration-1000  ease-in-out"
                  src={image24}
                />

                <header className=" leading-tight px-6 pt-4">
                  <h5 className="font-body font-normal text-sm lgg:text-base text-btnColor">
                    Do consectetur
                  </h5>
                  <h2 className="font-heading font-bold text-base lgg:text-2xl text-headingColor py-2">
                    Aliqua Irure Tempor Lorem Occaecat Volup
                  </h2>
                </header>
                <footer className="flex items-center justify-between leading-none px-6 pb-[27px]">
                  <p className="font-body font-normal text-[#9095A1] text-sm">
                    Dec 24, 2022
                  </p>
                  <p className="fomt-body font-normal text-sub1Color text-xs leading-5 bg-[#F3F4F6] p-2 rounded-full">
                    5 mins read
                  </p>
                </footer>
              </article>
            </div>

            <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-md shadow-custom-shadow">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full hover:scale-110 transition duration-1000  ease-in-out"
                  src={image25}
                />

                <header className=" leading-tight px-6 pt-4">
                  <h5 className="font-body font-normal text-sm lgg:text-base text-btnColor">
                    Do consectetur
                  </h5>
                  <h2 className="font-heading font-bold text-base lgg:text-2xl text-headingColor py-2">
                    Aliqua Irure Tempor Lorem Occaecat Volup
                  </h2>
                </header>
                <footer className="flex items-center justify-between leading-none px-6 pb-[27px]">
                  <p className="font-body font-normal text-[#9095A1] text-sm">
                    Dec 24, 2022
                  </p>
                  <p className="fomt-body font-normal text-sub1Color text-xs leading-5 bg-[#F3F4F6] p-2 rounded-full">
                    5 mins read
                  </p>
                </footer>
              </article>
            </div>

            <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-md shadow-custom-shadow">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full hover:scale-110 transition duration-1000  ease-in-out"
                  src={image26}
                />

                <header className=" leading-tight px-6 pt-4">
                  <h5 className="font-body font-normal text-sm lgg:text-base text-btnColor">
                    Do consectetur
                  </h5>
                  <h2 className="font-heading font-bold text-base lgg:text-2xl text-headingColor py-2">
                    Aliqua Irure Tempor Lorem Occaecat Volup
                  </h2>
                </header>
                <footer className="flex items-center justify-between leading-none px-6 pb-[27px]">
                  <p className="font-body font-normal text-[#9095A1] text-sm">
                    Dec 24, 2022
                  </p>
                  <p className="fomt-body font-normal text-sub1Color text-xs leading-5 bg-[#F3F4F6] p-2 rounded-full">
                    5 mins read
                  </p>
                </footer>
              </article>
            </div>
          </div>
          <Button
            text="Read More Articles "
            icon={<FaArrowRightLong />}
            className="py-[9px] px-[10px] bg-btnColor border border-btnColor  border-solid hover:bg-secondary hover:text-btnColor hover:border-btnColor transition duration-800 ease-in-out m-auto"
          />
        </div>
      </div>

      <div className="management bg-[url('../../../src/assets/images/Group.png')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="md:w-[553px] m-auto pt-[27px] pb-[95px]">
            <h1 className="font-heading font-bold text-[25px] md:text-[34px] text-secondary text-center">
              Ready to transform your school management?
            </h1>
            <div className="flex items-center justify-center pt-4">
              <Button
                text="Contact Sales"
                className="py-[9px] px-[10px] bg-btnColor border border-btnColor border-solid hover:bg-transparent cursor-pointer hover:border-btnColor transition duration-800 ease-in-out mr-4"
              />
              <Link
                to="#"
                className="font-body font-normal text-base text-secondary underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
