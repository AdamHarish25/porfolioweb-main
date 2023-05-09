import { DataStorageID } from "../Data/WholeDatas";
import { DataStorageEN } from "../Data/WholeDatas";

const Services = ({ lang = "", setScrollTo }) => {

  var Data = (lang === "EN" ? DataStorageEN : DataStorageID).ServicesData;

  return (
    <section id="ServicesSect">
      <div className="w-screen h-auto bg-blue-400 p-16">
        <div className="w-full h-fit text-center">
          <h1 className="text-3xl text-white font-Poppins">
            {Data.title}
            <hr className="border-gray-200 mt-5 md:mx-60 xl:mx-100" />
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
          {Data.services.map((data, idx) => (
            <div key={idx} className="w-full h-full bg-white p-5 text-2xl text-center rounded-lg hover:shadow-lg duration-200">
              <div className="w-full h-fit flex justify-center pb-4">
                {data.icon}
              </div>
              <h1 className="text-xl text-center font-Poppins">
                {data.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
