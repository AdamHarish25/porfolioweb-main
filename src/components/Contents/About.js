import Desk from "../../images/Desk2.jpg";
import { DataStorageEN, DataStorageID } from "../Data/WholeDatas";

const About = ({ lang = "", setScrollTo }) => {

  var Data = (lang === "EN" ? DataStorageEN : DataStorageID).AboutData;

  return (
    <section id="AboutSect">
      <div className="w-screen h-auto p-8 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          <div className="w-full h-fit p-1 mt-5">

            <h3 className="text-black font-Poppins text-2xl 2xl:text-3xl">
              {Data.title1}
            </h3>

            <p className="xs:text-sm md:text-base font-Roboto mt-5 2xl:text-xl">
              {Data.subtitle} <br />
            </p>

            <div className="w-full h-full bg-green-300 rounded-lg xs:text-base 2xl:text-xl xs:p-5 2xl:p-7 mt-5 hover:shadow-lg shadow-black hover:p-6 2xl:hover:p-8 transform duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <ul className="list-disc ml-5 font-Poppins font-normal select-none">
                  <li className="list-none">Front-end: </li>

                  {Data.myfrontWebSkills.map((data1, index) => (
                    <li key={index}>{data1.skill}</li>
                  ))}
                </ul>
                <ul className="list-disc ml-5 lg:ml-0 font-Poppins font-normal select-none">
                  <li className="list-none">Back-end: </li>

                  {Data.mybackWebSkills.map((data2, index) => (
                    <li key={index}>{data2.skill}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div className="w-full h-full flex items-end">
            <img src={Desk} className="object-contain rounded-xl" alt="" />
          </div>

          <div className="w-full h-full mt-5">

            <h4 className="text-center text-2xl font-Poppins">{Data.title2}</h4>
            <br />

            <div className="w-full h-fit md:px-10 space-y-5">
              {/*Progress Bars*/}
              {Data.mySkillsBar.map((data3, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">
                      {data3.title}
                    </span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">
                      {data3.value}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                    <div
                      className={`bg-blue-600 h-2.5 rounded-full ${data3.valueBar} md:group-hover:w-full transform duration-300`}
                    ></div>
                  </div>
                </div>
              ))}
              {/* End of progressbars */}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
