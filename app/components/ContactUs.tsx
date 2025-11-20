import Image from "next/image";
export default function ContactUs() {
  return (
    <div className="bg-white flex flex-col justify-evenly">
      <div className="flex justify-evenly">
        <div
          className="bg-white w-30 h-30 md:w-42 md:h-36 p-6 border border-[#dadfe7] hover:border-[#af47ff]
                      flex flex-col items-center justify-center rounded-2xl 
                      hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src={"/mail.png"} alt={""} width={32} height={32} />
          <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
            Email
          </span>
        </div>
        <div
          className="bg-white w-30 h-30 md:w-42 md:h-36 p-6 border border-[#dadfe7] hover:border-[#af47ff]
                      flex flex-col items-center justify-center rounded-2xl 
                      hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src={"/mail.png"} alt={""} width={32} height={32} />
          <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
            WhatsApp
          </span>
        </div>
        <div
          className="bg-white w-30 h-30 md:w-42 md:h-36 p-6 border border-[#dadfe7] hover:border-[#af47ff]
                      flex flex-col items-center justify-center rounded-2xl 
                      hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src={"/mail.png"} alt={""} width={32} height={32} />
          <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
            LinkedIn
          </span>
        </div>
        <div
          className="bg-white w-30 h-30 md:w-42 md:h-36 p-6 border border-[#dadfe7] hover:border-[#af47ff]
                      flex flex-col items-center justify-center rounded-2xl 
                      hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src={"/mail.png"} alt={""} width={32} height={32} />
          <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
            Location
          </span>
        </div>
      </div>
      <div
        className="bg-white  p-6 border border-[#dadfe7] hover:border-[#af47ff]
                      flex flex-col items-center justify-center rounded-2xl 
                      hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
      >
        <Image src={"/calendar.png"} alt={""} width={32} height={32} />
        <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
          Schedule a Meeting
        </span>
        <span>Book a time slot for a quick call or meeting</span>
        <button>Book Meeting</button>
      </div>
    </div>
  );
}
