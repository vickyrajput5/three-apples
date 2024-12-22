import { FaCirclePlus } from "react-icons/fa6";
import profile1 from "../../assets/images/pro1.png";
import profile2 from "../../assets/images/pro2.png";
import profile3 from "../../assets/images/pro3.png";
import profile4 from "../../assets/images/pro4.png";
import profile5 from "../../assets/images/pro5.png";
import { Link } from "react-router-dom";
const images = [
  { src: profile1, name: "You", bgColor: "bg-pro1" },
  { src: profile2, name: "Adam", bgColor: "bg-pro2" },
  { src: profile3, name: "William", bgColor: "bg-pro3" },
  { src: profile4, name: "Peter", bgColor: "bg-pro4" },
  { src: profile5, name: "Julia", bgColor: "bg-pro5" },
];

const Profile = () => {
  return (
    <div className="grid grid-cols-5 gap-0 max-w-sm mx-auto">
      {images.map((profile, index) => (
        <div key={index} className="relative flex flex-col items-center">
          <div className="relative">
            <div
              className={` rounded-full overflow-hiddencursor-pointer  ${profile.bgColor}`}
            >
              <Link to="">
                <img
                  src={profile.src}
                  alt={profile.name}
                  className="w-50 h-50 sm:w-64 sm:h-64 rounded-full  transition-transform duration-300 hover:scale-2 "
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#1DD75B] rounded-full"></span>
              </Link>

              {index === 0 && (
                <span className="absolute bottom-0 right-0 w-4 h-4 ">
                  <FaCirclePlus className="text-proPlus" />
                </span>
              )}
            </div>
          </div>

          <span className=" font-body text-headingColor mt-2 text-xs font-bold">
            {profile.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Profile;
