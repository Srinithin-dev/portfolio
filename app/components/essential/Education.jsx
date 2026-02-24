import Image from "next/image";
export default function Education() {
  const educationDetails = [
    {
      name: "Sri Krishna Arts and Science College",
      course: "M.Sc Software Systems",
      period: "2018 – 2023",
      description:
        "Graduated with 8.0 CGPA, specializing in software development and system design.",
      image: "/education.png",
      alt: "education",
    },
    {
      name: "PSG Sarvajana Higher Secondary School",
      course: "Higher Secondary – Bio Maths",
      period: "2016 – 2018",
      description:
        "Completed schooling with a focus on Biology and Mathematics.",
      image: "/school.png",
      alt: "school",
    },
  ];

  return (
    <div className="bg-white text-black p-6 flex flex-col items-center gap-6 w-full lg:px-20 px-4">
      <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff]">
        <span>Education</span>
      </div>

      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
        Academic Background
      </div>
      <div className="flex gap-6 max-md:flex-col">
        {educationDetails.map((education) => (
          <div
            key={education.name}
            className="bg-white border border-[#dadfe780]/50 hover:border-[#af47ff]/30 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all flex gap-2 w-full"
          >
            <div className="bg-[#af47ff1a] h-fit p-1.5 rounded-lg">
              <Image
                src={education.image}
                alt={education.alt}
                width={35}
                height={35}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold">{education.name}</div>
              <div className="text-xs text-[#af47ff] font-medium">
                {education.course}
              </div>
              <div className="text-xs text-[#627084] flex gap-2 items-center">
                <Image
                  src="/calendar.png"
                  alt="calendar"
                  width={24}
                  height={24}
                  className="max-lg:hidden"
                />
                <div>{education.period}</div>
              </div>
              <div className="text-base text-[#627084]">
                {education.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
