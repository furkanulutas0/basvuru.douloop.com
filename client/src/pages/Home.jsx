import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector(".base").classList.add("hidden");
  };
  return (
    <div className="h-screen flex justify-center items-center p-3 ">
      <div className="max-w-sm p-5 bg-gray-200 hidden rounded-3xl sm:max-w-6xl sm:p-12">
        <div className="flex justify-center items-center flex-col">
          <img src="./public/loopLogo.png" alt="loopLogo" className="w-48 my-2" />
          <p className="text-center font-bold my-2">Başvuru Sorgulama Ekranı</p>
          <div className="bg-gradient-to-r from-blue-900 to-purple-500 h-1 w-[75%] rounded-3xl mb-2 " />
          <div className="alertbox flex justify-center gap-2">
            <img src="./public/notification-bell.png" alt="" className="w-12" />
            <div className="max-w-sm h-full bg-zinc-300 rounded-full">
              <p className="text-xs text-center m-2 ">
                Çekirdek(Core) Takım başvurusu yaparken kullandığınız bilgileri kullanınız!
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col my-2 max-w-sm sm:max-w-6xl">
            <p className="text-sm font-bold mt-2">Mail Adresiniz:</p>
            <input
              type="text"
              onChange={handleChange}
              name="mail"
              id="mail"
              placeholder="xxxxxx@xxxxx.xxx"
              className="p-2 rounded-lg outline-slate-500 border border-slate-800  focus:transition-all"
            />
            <p className="text-sm font-bold mt-2">Telefon Numaranız:</p>

            <input
              type="text"
              onChange={handleChange}
              name="phone"
              id="phone"
              placeholder="05xxxxxxxxx"
              className="p-2 rounded-lg outline-slate-500 border border-slate-800  focus:transition-all"
            />
            <div className="mt-2">
              <ReCAPTCHA
                sitekey="6Lc-RyopAAAAAN7L9GnS_AKwv9oMeW5cL5jNRwTn"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="mx-20 w-1/2 p-2 bg-slate-100 hover:bg-slate-300 hover:shadow-lg transition-all ease-linear  rounded-2xl mt-4">
              <p className="font-medium  transition-all ease-linear ">Sorgula</p>
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-sm p-5 bg-gray-300 rounded-3xl sm:max-w-6xl sm:p-12 sm:min-w-[32rem] sm:min-h-[38rem]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src="./public/loopLogo.png" alt="loopLogo" className="w-36 sm:w-48 my-2 p-6 sm:p-2" />
          <p className="font-bold">Bilgileriniz kontrol ediliyor...</p>
          <img
            src="./public/loading.gif"
            alt="loading"
            className="w-16 max-w-sm sm:max-w-6xl rounded-full hover:w-14 transition-all ease-linear"
          />
        </div>
      </div>
    </div>
  );
}
