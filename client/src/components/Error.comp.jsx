
export default function Error({ visible = true, message }) {
  return (
    <div className={`alertbox ${visible ? "visible" : "hidden"}  flex justify-center items-center gap-2`}>
    <img src="./public/notification-bell.png" alt="" className="w-12" />
    <div className="max-w-sm h-full bg-zinc-300 rounded-full">
      <p className="text-xs text-center m-2 ">
        {message}
      </p>
    </div>
  </div>
  );
}
