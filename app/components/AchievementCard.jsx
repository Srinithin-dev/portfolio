import Image from "next/image";

export default function AchievementCard({ achievement }) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-[#e5e7eb]
      bg-white
      p-7
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      hover:border-[#af47ff]
      flex
      flex-col gap-4
      justify-between
    "
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-left gap-4">
          <div className="rounded-2xl w-fit p-3">
            <Image
              src={achievement.icon}
              alt={achievement.title}
              width={125}
              height={125}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg text-[#1d2530]">
              {achievement.title}
            </h3>

            <p className="text-[#af47ff] text-sm">{achievement.organization}</p>
            <span className="text-sm text-[#627084]">{achievement.year}</span>
          </div>
        </div>
      </div>

      <p className="text-sm leading-7 text-[#627084]">
        {achievement.description}
      </p>

      <div className="gap-2 flex flex-col items-left justify-between">
        <span
          className="
            rounded-full
            bg-[#af47ff14]
            px-3
            py-2
            text-xs
            font-bold
            text-[#af47ff] w-fit
          "
        >
          {achievement.status}
        </span>

        <a
          href={achievement.certificate}
          target="_blank"
          className="
            rounded-xl
            border
            border-[#af47ff]
            px-5
            py-2
            text-sm
            font-semibold
            text-[#af47ff]
            transition
            hover:bg-[#af47ff]
            hover:text-white w-full text-center
          "
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}
