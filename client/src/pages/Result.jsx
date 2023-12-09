export default function Result() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 p-3 ">
      <img src="./public/loopLogo.png" alt="" className="w-36" />
      <div className="max-w-sm p-5 bg-gray-200 rounded-3xl sm:max-w-6xl sm:p-12">
        <div className="flex flex-col max-w-sm sm:max-w-6xl">
          <div className="flex items-center p-1 gap-8 justify-between">
            <p className="font-bold text-justify">Başvuru Durumu:</p>
            <section className="progressBar outProgress hidden">
              <div className="bg-gray-300 py-2 rounded-xl flex gap-2 px-4">
                <div className="rectangle py-1 px-3 border-red-800 border-2 bg-red-600 rounded-xl"></div>
                <p className="text-black text-sm font-normal">
                  Başvurunuz olumsuz sonuçlandırıldı.
                </p>
              </div>
            </section>
            <section className="progressBar inProgress">
              <div className="bg-gray-300 py-2 rounded-xl flex gap-2 px-4">
                <div className="rectangle py-1 px-3 border-yellow-600 border-2 bg-orange-400 rounded-xl"></div>
                <p className="text-black text-sm font-normal">
                  Başvurunuz değerlendirme sürecinde.
                </p>
              </div>
            </section>
            <section className="progressBar accepted hidden">
              <div className="bg-gray-300 py-2 rounded-xl flex gap-2 px-4">
                <div className="rectangle py-1 px-3 border-green-600 border-2 bg-green-400 rounded-xl"></div>
                <p className="text-black text-sm font-normal">
                  Başvurunuz değerlendirme sürecinde.
                </p>
              </div>
            </section>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-purple-500 h-1 rounded-3xl my-2 " />
          <div className="recordedDatas p-1">
            <p className="font-bold">Kayıtlı Bilgiler:</p>
            <div className="name flex gap-12 ">
              <p>Ad Soyad:</p>
              <p className="italic ml-14">Furkan Ulutaş</p>
            </div>
            <div className="name flex gap-12 ">
              <p>Telefon Numarası:</p>
              <p className="italic">05399225570</p>
            </div>
            <div className="name flex gap-12  ">
              <p>Mail Adresiniz:</p>
              <p className="italic ml-6">furkanulutas054@gmail.com</p>
            </div>
          </div>
          <div className="motivationLetter p-1">
            <p className="font-bold">Motivasyon Mektubunuz:</p>
            <div>
              <p className="italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit harum
                temporibus assumenda quae? Assumenda aut quidem similique quam placeat! Ab natus
                sint qui blanditiis temporibus molestias soluta vero quas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
