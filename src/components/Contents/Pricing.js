import { DataStorageEN, DataStorageID } from "../Data/WholeDatas";


const Pricing = ({lang = "", setScrollTo}) => {

    const className = {
      container:
        "w-screen h-auto flex flex-col items-center justify-center gap-20 font-Poppins py-20 px-10",
      title: "font-semibold text-4xl",
      note: "text-gray-400 text-sm ",
      cardBox: "w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-14",
      card: "text-center space-y-8 p-10 rounded-xl shadow-md",
      cardTitle: "text-lg font-medium",
      crossedOutPrice: "text-gray-400 text-sm",
      price: "text-2xl",
      list: "list-disc text-gray-600 space-y-4 text-left px-3 xl:px-6",
    };

    var Data = (lang === "EN" ? DataStorageEN : DataStorageID).PricingData;

    return (
      <div id="PricingSect" className={className.container}>
        <h1 className={className.title}>{Data.title}</h1>
        <div className={className.cardBox}>
          {Data.cards.map((data, index) => (
            <div className={className.card} key={index}>
              <div className="space-y-4">
                <h1 className={className.cardTitle}>{data.title}</h1>
                <h2>
                  <s className={className.crossedOutPrice}>
                    {data.crossedOutPrice}
                  </s>
                  <p className={className.price}>{data.price}</p>
                </h2>
              </div>

              <ul className={className.list}>
                {data.benefits.map((data2, idx) => (
                  <li key={idx}>{data2.title}</li>
                ))}
              </ul>

              <p className={className.note}>{data.note}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col text-center items-center gap-4 w-full">
          <p className={className.note}>{Data.note}</p>
          <a href="#ContactSect" className="block w-fit px-16 py-4 rounded-tl-2xl hover:rounded-br-2xl transition-all duration-150 text-white font-medium hover:px-20 bg-blue-600">
              {Data.button}
          </a>
        </div>
      </div>
    );

}

export default Pricing;