import { FaAngleDoubleDown } from "react-icons/fa";
import Logo from "../../images/LogoBW2.png";
import { DataStorageEN, DataStorageID } from "../Data/WholeDatas";

const Home = ({lang = "", setScrollTo}) => {

  var Data = (lang === "EN" ? DataStorageEN : DataStorageID).HomeData;

  return (
    <section id="HomeSect">
      <div className="Bg-img xs:text-xl md:text-3xl lg:text-4xl 2xl:text-5xl bg-gray-400 w-screen h-screen text-white bg-cover relative">
        <img
          draggable="false"
          src={Logo}
          className="absolute xs:top-32 left-2/4 -translate-y-1/3 -translate-x-2/4 w-28"
          alt=""
        />

        <div className="absolute xs:top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-center w-full h-fit px-0 xl:px-5 space-y-4">
          <h1 className="font-bold font-Poppins px-0 xl:px-40">
            {Data.title}
          </h1>
          <p className="text-xs xl:text-sm px-10 font-medium">
            {Data.subtitle}
          </p>
        </div>
        <div className="w-full h-fit mt-14 absolute xs:top-3/4 left-2/4 -translate-y-1/4 -translate-x-2/4 flex justify-center">
          <a href="#BenefitSect" className="text-base animate-bounce">
            <FaAngleDoubleDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
