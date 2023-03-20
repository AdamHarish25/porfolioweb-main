import Desk from "../../images/Desk2.jpg";

const About = () => {
  return (
    <section id="AboutSect">
      <div className="w-screen h-auto p-8 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          <div className="w-full h-fit p-1 mt-5">
            <h3 className="text-black font-Poppins text-2xl 2xl:text-3xl">
              About me
            </h3>
            <p className="xs:text-sm md:text-base font-Roboto mt-5 2xl:text-xl">
              Hello! I'm <strong>Adam Harits Abdurrahman</strong>, I'm still a student to a vocational highschool and I've been learning things from an IT basics to Multimedia basics, And this is what I can do for the basic of ITs : <br />
            </p>
            <div className="w-full h-full bg-green-300 rounded-lg xs:text-base 2xl:text-xl xs:p-5 2xl:p-7 mt-5 hover:shadow-lg shadow-black hover:p-6 2xl:hover:p-8 transform duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <ul className="list-disc ml-5 font-Poppins font-normal select-none">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Tailwind</li>
                  <li className="list-none">&</li>
                  <li>React JS</li>
                </ul>
                <ul className="list-disc ml-5 lg:ml-0 font-Poppins font-normal select-none">
                  <li className="list-none">And for Mobile apps :</li>
                  <li>Dart</li>
                  <li className="list-none">&</li>
                  <li>Flutter</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-end">
            <img src={Desk} className="object-contain rounded-xl" alt="" />
          </div>
          <div className="w-full h-full mt-5">
            <h4 className="text-center text-2xl font-Poppins">
              My expertise and skills <br />
              in progressbar
            </h4>
            <br />

            <div className="w-full h-fit md:px-10">
              {/*Progress Bars*/}
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Writing
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  65%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                <div className="bg-blue-600 h-2.5 rounded-full w-[65%] md:group-hover:w-full transform duration-300"></div>
              </div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  HTML & CSS
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  68%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                <div className="bg-blue-600 h-2.5 rounded-full w-[68%] md:group-hover:w-full transform duration-300"></div>
              </div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Javascript & React JS
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  80%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                <div className="bg-blue-600 h-2.5 rounded-full w-[80%] md:group-hover:w-full transform duration-300"></div>
              </div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Tailwind
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                <div className="bg-blue-600 h-2.5 rounded-full w-[75%] md:group-hover:w-full transform duration-300"></div>
              </div>
              <div className="flex justify-between mb-1 mt-5">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Dart & Flutter
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  70%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group">
                <div
                  className="bg-blue-600 h-2.5 rounded-full md:group-hover:w-full transform duration-300 w-[70%]"
                  contentEditable="false"
                ></div>
              </div>
              {/* End of progressbars */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
