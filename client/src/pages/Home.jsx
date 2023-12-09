import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState();
  const [isVerified, setVerified] = useState(false);
  const [message, setMessage] = useState();
  const reCaptchaRef = useRef(null);

  const handleRecaptchaVerify = (response) => {
    if (response) {
      setVerified(true);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isVerified) {
      setVerified(false);
      reCaptchaRef.current.reset();
    }

    if (
      document.querySelector("#studentNumber").value.length == 0 ||
      document.querySelector("#phone").value.length == 0
    ) {
      setMessage("Okul numarası ya da telefon kısmı boş geçilemez!");
      return;
    }
    if (document.querySelector("#phone").value.length != 10) {
      setMessage("Telefon numaranınızı belirtilen formatta giriniz!");
      return;
    }
    if (document.querySelector("#studentNumber").value.length != 12) {
      setMessage("Okul numaranınızı belirtilen formatta giriniz!");
      return;
    }

    if (!isVerified) {
      setMessage("Lütfen doğrulamayı tamamlayınız!");
      return;
    }

    // document.querySelector(".searchForm").classList.toggle("hidden");
    // document.querySelector(".loadingData").classList.toggle("hidden");
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await fetch("/api/application/getApplication", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData).trim(),
        });
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);

          setMessage("Başvuru bulunamadı!");
          return;
        }
        setLoading(false);
        navigate("/result", {
          state: {
            fullname: data.data.fullname,
            phone: data.data.phone,
            email: data.data.email,
            selectedTeam: data.data.selectedTeam,
            status: data.data.status,
          },
        });
      } catch (err) {
        setMessage(err.message);
        setLoading(false);
        return;
      }
    }, Math.random() * 1200 + 1200);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3 ">
      <section className={loading ? "hidden" : "visible"}>
        <div className="max-w-sm p-5 bg-gray-200 rounded-3xl sm:max-w-6xl sm:p-12 ">
          <div className="flex justify-center items-center flex-col">
            <img src="./loopLogo.png" alt="loopLogo" className="w-48 my-2" />
            <p className="text-center font-bold my-2">Başvuru Sorgulama Ekranı</p>
            <div className="bg-gradient-to-r from-blue-900 to-purple-500 h-1 w-[75%] rounded-3xl mb-2 " />
            <div className="alertArea flex flex-col items-center gap-4">
              <div className={`alertbox flex justify-center items-center gap-2`}>
                <img src="./notification-bell.png" alt="" className="w-12" />
                <div className="max-w-sm h-full bg-zinc-300 rounded-full">
                  <p className="text-xs text-center m-2 ">
                    Çekirdek(Core) Takım başvurusu yaparken kullandığınız bilgileri kullanınız!
                  </p>
                </div>
              </div>
              <p className="text-red-500 font-bold italic">{message}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col my-2 max-w-sm sm:max-w-6xl">
              <p className="text-sm font-bold mt-2">Okul Numaranız:</p>
              <input
                type="text"
                onChange={handleChange}
                name="studentNumber"
                id="studentNumber"
                placeholder="202xxxxxxxxx"
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
                  ref={reCaptchaRef}
                  sitekey="6LcZ8ispAAAAANkODUVFf0jEXKjkkbpfFtlkgdr5"
                  onChange={handleRecaptchaVerify}
                />
              </div>
              <button
                type="submit"
                className="mx-20 w-1/2 p-2 bg-slate-100 hover:bg-slate-300 hover:shadow-lg transition-all ease-linear  rounded-2xl mt-4">
                <p className="font-medium  transition-all ease-linear ">Sorgula</p>
              </button>
            </form>
            <p className="text-sm italic mt-5">Tüm Hakları Saklıdır!</p>
          </div>
        </div>
      </section>

      <section className={loading ? "visible" : "hidden"}>
        <div className="flex flex-col justify-center max-w-sm p-5 bg-gray-200 rounded-3xl sm:max-w-6xl sm:p-14 sm:min-w-[32rem] sm:min-h-[38.5rem]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <img src="./loopLogo.png" alt="loopLogo" className="w-36 sm:w-48 my-2 p-6 sm:p-2" />
            <p className="font-bold">Bilgileriniz kontrol ediliyor...</p>
            <img
              src="./loading.gif"
              alt="loading"
              className="w-16 max-w-sm sm:max-w-6xl rounded-full hover:w-14 transition-all ease-linear"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
