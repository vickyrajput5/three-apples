import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../Buttons/PrimaryBtn";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutSection = ({ 
  image, 
  title, 
  subtitle,
  description, 
  buttonText, 

  bgColor, 
  // spacing,
  reverse = false ,
   order = "default"
}) => {
  return (
    <div className={`flex flex-wrap ${reverse ? "flex-row-reverse" : "flex-row"} ${bgColor} `}>
      <div className="w-full md:w-1/2">
        <img src={image} alt="Section Image" className=" m-auto h-auto object-cover pb-15 md:py-6 " />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-2 pb-2 md:pb-0 md:pl-8">
      {order === "subtitleFirst" ? (
          <>
            <h3 className="font-normal font-heading text-sub1Color lg-tab:leading-10 text-sm">{subtitle}</h3>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">{title}</h2>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl lg-tab:text-[28px] font-bold font-heading text-sub1Color lg-tab:leading-10">{title}</h2>
            <h3 className="text-lg font-body font-normal text-sub2Color py-4 text-sub2Color text-sm sm:text-[19px]">{subtitle}</h3>
          </>
        )}
        <p className="font-body font-normal text-headingColor text-sm lg-tab:text-base">{description}</p>
        <Link >
          <Button 
          text={buttonText}
          icon={<FaArrowRightLong />}
          className="mt-6 py-2 px-4 bg-btnColor border border-solid border-btnColor  text-headingColor rounded-lg hover:bg-secondary transition ease-in-out" />
            
        </Link>
      </div>
    </div>
  );
};

AboutSection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
   
    bgColor: PropTypes.string.isRequired,
    // spacing: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    order: PropTypes.oneOf(["default", "subtitleFirst"]),
  };
export default AboutSection;
