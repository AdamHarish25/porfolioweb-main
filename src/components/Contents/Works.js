import ClientsDataProjects from "../Data/ClientsProjectList";
import '../AppIn.css'
import { DataStorageEN, DataStorageID } from "../Data/WholeDatas";
import { useEffect, useRef, useState } from "react";
import "./Work.css";




const Works = ({ lang = "", setScrollTo }) => {

  const [showScrollbar, setShowScrollbar] = useState(false);
  const containerRef = useRef(null);
  let timeoutId;

  var Data = (lang === "EN" ? DataStorageEN : DataStorageID).WorksData;

  var WorkData = ClientsDataProjects;

  
 const handleScroll = () => {
   setShowScrollbar(true);
   clearTimeout(timeoutId);

   timeoutId = setTimeout(() => {
     setShowScrollbar(false);
   }, 1500);

 };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);



  console.log(showScrollbar)

  return (
    <section id="WorksSect">
      <div className="w-screen max-h-screen bg-works py-20 bg-gray-100">
        <div className="w-full h-fit text-center">
          <h1 className="font-Poppins font-bold text-3xl">{Data.title}</h1>
          <p className="mt-3 font-Roboto">{Data.subtitle}</p>
        </div>
        <div
          ref={containerRef}
          style={{ overflowX: "auto", overflowY: "hidden" }}
          className={`flex flex-1 whitespace-nowrap my-20 h-auto w-full relative gap-10 py-10 px-7 ${
            showScrollbar ? "" : "showscrollbar"
          }`}
        >
          {WorkData.map(({ className, image, link, progress, size }, index) => (
            <a target="_blank" href={link} key={index} className="group">
              <div
                className={`p-10 flex h-full ${size} ${className} border-y-4 shadow-xl relative rounded-xl`}
              >
                <img src={image} alt={progress} className="object-contain" />
                <p className="font-Poppins font-bold text-lg absolute right-3 top-3 opacity-0 transition-all duration-200 group-hover:opacity-100">
                  {index + 1}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
