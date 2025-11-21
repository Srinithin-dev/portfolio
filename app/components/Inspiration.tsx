import Growth from "../../public/icons/growth";
import Image from "next/image";

export default function Inspirations() {
  const content = [
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      name: "Steve Jobs",
      company: "Co-Founder of Apple",
      industryType: "Technology",
      image: "/steveJobs.png",
    },
    {
      quote: "Success is not final, failure is not fatal.",
      name: "Winston Churchill",
      company: "Former Prime Minister",
      industryType: "Leadership",
      image: "/churchill.png",
    },
    {
      quote: "It always seems impossible until it's done.",
      name: "Nelson Mandela",
      company: "Former President of South Africa",
      industryType: "Human Rights",
      image: "/nelson.png",
    },
  ];

  return (
    <div className="bg-white text-black p-6 flex flex-col justify-center items-center gap-4 w-full">
      <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 w-fit rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff]">
        <Growth />
        <span>Inspiration</span>
      </div>

      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent">
        Words of Wisdom
      </div>

      <div className="text-lg text-center px-6 text-[#627084]">
        Inspiring quotes from leaders across different industries
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button className="p-2 rounded-full border border-[#dadfe7] hover:border-[#af47ff] hover:bg-[#af47ff1a] transition">
          <Image src="/left.png" alt="left" width={18} height={18} />
        </button>

        <div className="flex gap-6">
          {content.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-[#dadfe7] hover:border-[#af47ff]
                     flex flex-col rounded-2xl w-64
                     hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-black">{item.name}</span>
                  <span className="text-xs text-[#627084]">{item.company}</span>
                </div>
              </div>

              <div className="mt-4 text-sm text-[#1d2530] italic">
                "{item.quote}"
              </div>

              <div className="mt-4 text-xs px-2 py-1 bg-[#e7eaef] rounded-md text-black w-fit">
                #{item.industryType}
              </div>
            </div>
          ))}
        </div>

        <button className="p-2 rounded-full border border-[#dadfe7] hover:border-[#af47ff] hover:bg-[#af47ff1a] transition">
          <Image src="/right.png" alt="right" width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
