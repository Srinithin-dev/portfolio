import Image from "next/image";
import Footer from "./Footer";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="bg-white flex flex-col gap-16 items-center justify-center  pt-20 px-4">
      <div className="flex flex-col gap-2 text-black items-center">
        <div className="text-4xl font-bold">Get In Touch</div>
        <div className="text-lg text-[#627084] text-center">
          I&apos;m always open to discussing new projects and opportunities
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
        <Link
          href="mailto:nithinsri53@gmail.com"
          className="bg-white p-6 border border-[#dadfe7] hover:border-[#af47ff]
                     flex flex-col items-center justify-center rounded-2xl 
                     hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src="/gmail.png" alt="mail" width={32} height={32} />
          <span className="text-md font-semibold text-black mt-2">Email</span>
          <span className="text-sm text-[#627084]">nithinsri53@gmail.com</span>
        </Link>

        <Link
          href="https://wa.me/919488957785"
          target="_blank"
          className="bg-white p-6 border border-[#dadfe7] hover:border-[#af47ff]
                     flex flex-col items-center justify-center rounded-2xl 
                     hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} />
          <span className="text-md font-semibold text-black mt-2">
            WhatsApp
          </span>
          <span className="text-sm text-[#627084]">Click to chat</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/"
          target="_blank"
          className="bg-white p-6 border border-[#dadfe7] hover:border-[#af47ff]
                     flex flex-col items-center justify-center rounded-2xl 
                     hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src="/linkdn.png" alt="LinkedIn" width={32} height={32} />
          <span className="text-md font-semibold text-black mt-2">
            LinkedIn
          </span>
          <span className="text-sm text-[#627084]">Connect with me</span>
        </Link>

        <Link
          href="https://maps.app.goo.gl/gcsCo4mXR64AKsHE8"
          target="_blank"
          className="bg-white p-6 border border-[#dadfe7] hover:border-[#af47ff]
                     flex flex-col items-center justify-center rounded-2xl 
                     hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
        >
          <Image src="/loc.png" alt="location" width={32} height={32} />
          <span className="text-md font-semibold text-black mt-2">
            Location
          </span>
          <span className="text-sm text-[#627084]">Coimbatore</span>
        </Link>
      </div>

      <div
        className="flex flex-col gap-2 justify-center items-center bg-white p-8 border border-[#dadfe7] hover:border-[#af47ff] max-w-4xl
                   rounded-2xl hover:scale-105 transition-all duration-300 shadow-sm  w-full"
      >
        <Image src="/calendar.gif" alt="calendar" width={26} height={26} />
        <div className="text-xl font-semibold text-black text-center">
          Schedule a Meeting
        </div>
        <div className="text-sm text-[#627084] text-center">
          Book a time slot for a quick call or meeting
        </div>
        <button className="px-6 py-2 bg-[#af47ff] text-white rounded-md w-fit">
          Book a meeting
        </button>
      </div>

      <div
        className="flex flex-col gap-4 bg-white p-8 border border-[#dadfe7] hover:border-[#af47ff]
                   rounded-2xl hover:scale-105 transition-all duration-300 shadow-sm max-w-4xl w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-black font-semibold">Name</label>
            <input
              type="text"
              className="rounded-xl border border-gray-300 px-3 py-2 bg-[#f9fafb]"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black font-semibold">Email</label>
            <input
              type="email"
              className="rounded-xl bg-[#f9fafb] border border-gray-300 px-3 py-2"
              placeholder="abc@gmail.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black font-semibold">Message</label>
          <textarea
            className="rounded-xl border border-gray-300 px-3 py-2 h-28 resize-none bg-[#f9fafb]"
            placeholder="Type something here..."
          />
        </div>

        <button className="px-6 py-2 bg-[#af47ff] text-white rounded-md w-fit">
          Send Message
        </button>
      </div>
      <Footer />
    </div>
  );
}
