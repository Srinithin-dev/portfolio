"use client";
import Image from "next/image";
import Footer from "./Footer";
import Link from "next/link";
import FormSubmission from "./FormSubmission";

export default function ContactUs() {
  const contactLinks = [
    {
      label: "Email",
      subLabel: "nithinsri53@gmail.com",
      href: "mailto:nithinsri53@gmail.com",
      icon: "/gmail.png",
    },
    {
      label: "WhatsApp",
      subLabel: "Click to chat",
      href: "https://wa.me/919488957785",
      icon: "/whatsapp.png",
      external: true,
    },
    {
      label: "LinkedIn",
      subLabel: "Connect with me",
      href: "https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/",
      icon: "/linkdn.png",
      external: true,
    },
    {
      label: "Location",
      subLabel: "Coimbatore",
      href: "https://maps.app.goo.gl/gcsCo4mXR64AKsHE8",
      icon: "/loc.png",
      external: true,
    },
  ];
  return (
    <div className="bg-white flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col gap-2 text-black items-center">
        <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
          Get In Touch
        </div>
        <div className="text-lg text-[#627084] text-center">
          I&apos;m always open to discussing new projects and opportunities
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:px-20 px-4">
        {contactLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            className="bg-white p-6 border border-[#dadfe7] hover:border-[#af47ff]
                 flex flex-col items-center justify-center rounded-2xl 
                 hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <Image src={item.icon} alt={item.label} width={32} height={32} />
            <span className="text-md font-semibold text-black mt-2">
              {item.label}
            </span>
            <span className="text-sm text-[#627084]">{item.subLabel}</span>
          </Link>
        ))}
      </div>
      {/* <div
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
        <button
          className="px-6 py-2 bg-[#af47ff] text-white rounded-md w-fit cursor-pointer"
          onClick={() => setRenderCalendar(true)}
        >
          Book a meeting
        </button>
      </div> 
      {renderCalendar && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div
            className="
        relative bg-white w-full h-full 
        sm:w-[90%] sm:max-w-4xl sm:h-[90vh] 
        sm:rounded-2xl
      "
          >
            <button
              onClick={() => setRenderCalendar(false)}
              className="
          absolute top-4 right-4 z-10 
          bg-white rounded-full p-2 shadow-md
          hover:scale-110 transition
        "
            >
              <Image src="/cancel.png" alt="Close" width={20} height={20} />
            </button>

            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CxGaHfVqRjfEdklvBsYk_ksVqDUc0TWLFvO-FS0LRQtOZBRhFGkgK0t3wXS5rBpU7DquixOE6?gv=true"
              className="w-full h-full sm:rounded-2xl"
              title="Google Calendar"
              loading="lazy"
            />
          </div>
        </div>
      )}
      */}
      <FormSubmission />
      <Footer />
    </div>
  );
}
