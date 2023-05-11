import { send } from "emailjs-com";
import { useState } from "react";
import { DataStorageEN, DataStorageID } from "../Data/WholeDatas";
import { FaWhatsapp } from "react-icons/fa";

const Contact = ({ lang = "", setScrollTo }) => {

  var Data  = (lang === "EN" ? DataStorageEN : DataStorageID).ContactData;

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "adamharits25@gmail.com",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ozlwvnd", "template_k9jqv5w", toSend, "N-l5OuqluInHPo6Rn")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        window.location.reload(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section id="ContactSect">
      <div className="w-screen h-auto p-10 lg:p-20 bg-blue-400 space-y-10">
        <div className="h-fit w-full text-center">
          <h1 className="text-2xl font-Poppins text-white font-bold">
            {Data.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
              <input
                className="rounded-md border-none w-full"
                type="text"
                name="from_name"
                placeholder={Data.form1}
                value={toSend.from_name}
                onChange={handleChange}
                required
              />
              <input
                className="rounded-md border-none w-full"
                type="text"
                name="to_name"
                placeholder={Data.form2}
                value={toSend.to_name}
                onChange={handleChange}
                required
                readOnly
              />
            </div>
            <br />
            <div className="grid grid-cols-1">
              <textarea
                className="rounded-md border-none h-24"
                type="text"
                name="message"
                placeholder={Data.form3}
                value={toSend.message}
                onChange={handleChange}
                required
              />
              <br />
              <input
                className="rounded-md border-none"
                type="email"
                name="reply_to"
                placeholder={Data.form4}
                value={toSend.reply_to}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <button
              className="py-2 w-full bg-blue-600 text-white rounded-md"
              type="submit"
            >
              {Data.button}
            </button>
          </form>
          <div className="w-full h-fit bg-white text-center p-7 rounded-md">
            <h4 className="font-Roboto text-lg font-bold">{Data.title2}:</h4>
            <br />
            <p className="text-left">
              {Data.content1} = Nathan@example.com
              <br />
              {Data.content2} = Julian@example.com
              <br />
              <br />
              <div className="w-fit h-fit py-5 px-10 border border-black">
                {Data.content3}
              </div>
              <br />
            </p>

            <p className="text-right text-sm font-bold">{Data.content4}</p>
          </div>
        </div>

        <p className="text-center font-bold text-xl text-white">
          {Data.addition1}
        </p>

        <div className="w-full flex items-center justify-center">
          <a
            href="https://wa.me/6281287647793"
            target="_blank"
            className="w-fit px-10 py-4 text-white font-semibold b flex items-center gap-4 bg-[#25D366]"
          >
            <FaWhatsapp className="text-3xl" /> {Data.addition2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
