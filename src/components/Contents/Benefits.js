import { DataStorageEN, DataStorageID } from "../Data/WholeDatas";


const Benefits = ({lang = "", setScrollTo}) => {
    const className = {
        container: "w-screen h-auto py-20 space-y-20 font-Poppins"
    }

    var Data = (lang === "EN" ? DataStorageEN : DataStorageID).BenefitsData;

    return (
      <div id="BenefitSect" className={className.container}>
        {Data.map((data, index) => (
          <div className="w-full grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10 px-10">
            <img
              src={data.img}
              key={index}
              className={`h-[400px] ${data.imgPos}`}
            />
            <div className={`space-y-4 ${data.titlePos}`}>
              <h1 className="text-3xl font-medium text-blue-800">
                {data.title}
              </h1>
              <p>{data.subtitle}</p>
              {data.buttonLink && data.buttonTitle !== "" ? (
                <a
                  className="block w-fit px-10 py-4 rounded-tr-2xl hover:rounded-bl-2xl transition-all duration-150 text-white font-medium hover:px-12 bg-blue-600"
                  href={`#${data.buttonLink}`}
                >
                  {data.buttonTitle}
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        ))}
      </div>
    );
}

export default Benefits;