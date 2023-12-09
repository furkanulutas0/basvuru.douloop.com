import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  let message = "";
  let color = "";
  const status = location.state.status;
  if (status === "pending") {
    message = "Başvurunuz değerlendirme sürecinde.";
    color = "border-yellow-600 border-2 bg-orange-400";
  } else if (status === "accepted") {
    message = "Başvurunuz olumlu sonuçlandırıldı.";
    color = "border-green-600 border-2 bg-green-400";
  } else {
    message = "Başvurunuz olumsuz sonuçlandırıldı.";
    color = "border-red-800 border-2 bg-red-600";
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 p-3 ">
      <img src="./public/loopLogo.png" alt="" className="w-36" />
      <div className="max-w-sm p-5 bg-gray-200 sm:min-w-[36rem] rounded-3xl sm:max-w-6xl sm:p-12">
        <div className="flex flex-col max-w-sm sm:max-w-6xl">
          <div className="flex items-center p-1 gap-8 justify-between">
            <p className="font-bold text-justify ">Başvuru Durumu:</p>
            <section className="statusBar">
              <div className="bg-gray-300 py-2 px-4 rounded-xl flex gap-2 ">
                <div
                  className={`rectangle max-h-4 sm:max-h-full py-1 px-3 ${color} rounded-xl`}></div>
                <p className="text-black text-sm font-normal">{message}</p>
              </div>
            </section>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-purple-500 h-1 rounded-3xl my-2 " />
          <div className="recordedDatas p-1 flex flex-col">
            <p className="font-bold">Kayıtlı Bilgiler:</p>
            <div className="name text-slate-600 flex justify-between  gap-12 ">
              <p className="">Ad Soyad:</p>
              <p className="text-black italic">{location.state.fullname}</p>
            </div>
            <div className="phone text-slate-900 flex justify-between gap-12 ">
              <p>Telefon Numarası:</p>
              <p className="text-black italic ">{location.state.phone}</p>
            </div>
            <div className="email text-slate-600 flex justify-between gap-12  ">
              <p>Mail Adresiniz:</p>
              <p className="text-black italic">{location.state.email}</p>
            </div>
            <div className="team text-slate-900 flex justify-between gap-12  ">
              <p>Başvurulan Takım:</p>
              <p className="text-black italic ">{location.state.selectedTeam}</p>
            </div>
          </div>
          <div className="motivationLetter p-1">
            <p className="font-bold">Motivasyon Mektubunuz:</p>
            <div>
              <p className="italic">{location.state.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
