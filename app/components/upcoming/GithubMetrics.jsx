"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function GitHubMetrics() {
  const [repoCount, setRepoCount] = useState({
    contributions: 0,
    repositories: 0,
    activeDays: 0,
    stars: 0,
  });

  useEffect(() => {
    async function getAllRepos() {
      try {
        const response = await fetch("/api/github");

        const metrics = await response.json();

        if (response.ok) {
          setRepoCount(metrics);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getAllRepos();
  }, []);

  const metricsData = [
    {
      title: "Contributions",
      value: repoCount.contributions,
      icon: "/fire.png",
      bg: "bg-orange-100",
    },
    {
      title: "Repositories",
      value: repoCount.repositories,
      icon: "/repo.png",
      bg: "bg-blue-100",
    },
    {
      title: "Active Days",
      value: repoCount.activeDays,
      icon: "/calendar.png",
      bg: "bg-green-100",
    },
    {
      title: "Stars Earned",
      value: repoCount.stars,
      icon: "/star.png",
      bg: "bg-yellow-100",
    },
  ];

  return (
    // <div className="flex flex-col justify-center items-center text-black">
    //   <div className="bg-[#af47ff1a] p-2 rounded-lg w-fit">
    //     <Image src="/github.png" alt="Github Metrics" width={45} height={45} />
    //   </div>
    //   <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
    //     GitHub Activity
    //   </div>
    //   <p className="text-lg text-[#627084] mb-10 text-center max-w-2xl">
    //     Open source contributions and coding metrics
    //   </p>
    //   <div className="grid grid-cols-2 gap-4 w-6/7">
    //     <div className="p-16 shadow-2xl rounded-lg flex flex-col gap-2 items-center">
    //       <Image
    //         src="/github.png"
    //         alt="Github Metrics"
    //         width={35}
    //         height={35}
    //       />

    //       <p>{repoCount.commits || 0}</p>
    //       <p className="text-lg text-[#627084] text-center max-w-xl">
    //         Total Commits
    //       </p>
    //     </div>
    //     <div className="p-16 shadow-2xl rounded-lg flex flex-col gap-2 items-center">
    //       <Image
    //         src="/github.png"
    //         alt="Github Metrics"
    //         width={35}
    //         height={35}
    //       />

    //       <p>{repoCount.count || 0}</p>
    //       <p className="text-lg text-[#627084] text-center max-w-xl">
    //         Repositories
    //       </p>
    //     </div>
    //     <div className="p-16 shadow-2xl rounded-lg flex flex-col gap-2 items-center">
    //       <Image
    //         src="/github.png"
    //         alt="Github Metrics"
    //         width={35}
    //         height={35}
    //       />

    //       <p>{repoCount.pullRequest || 0}</p>
    //       <p className="text-lg text-[#627084] text-center max-w-xl">
    //         Pull Requests
    //       </p>
    //     </div>
    //     <div className="p-16 shadow-2xl rounded-lg flex flex-col gap-2 items-center">
    //       <Image
    //         src="/github.png"
    //         alt="Github Metrics"
    //         width={35}
    //         height={35}
    //       />

    //       <p>0</p>
    //       <p className="text-lg text-[#627084] text-center max-w-xl">
    //         Total Stars
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white py-20 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <div className="bg-[#af47ff1a] p-4 rounded-2xl">
          <Image src="/github.png" alt="Github" width={45} height={45} />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
          GitHub Activity
        </h2>

        <p className="text-[#627084] text-center max-w-2xl">
          Open source contributions and coding metrics
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 w-full lg:px-20 px-4">
        {metricsData.map((metric, index) => (
          <div
            key={index}
            className="
              bg-white
              border border-[#e7eaef]
              rounded-3xl
              p-8
              shadow-sm
              hover:border-[#af47ff]
              hover:-translate-y-2
              transition-all duration-300
              flex flex-col items-center gap-5
            "
          >
            <div
              className={`${metric.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}
            >
              <Image
                src={metric.icon}
                alt={metric.title}
                width={30}
                height={30}
              />
            </div>

            <div className="text-4xl font-bold text-[#1d2530]">
              {metric.value}
            </div>

            <div className="text-[#627084] text-sm font-medium">
              {metric.title}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <a
        href="https://github.com/Srinithin-dev"
        target="_blank"
        className="
          mt-12
          px-7 py-3
          bg-[#af47ff]
          text-white
          rounded-2xl
          hover:bg-[#9937e7]
          transition-all
          font-medium
        "
      >
        View GitHub Profile
      </a>
    </section>
  );
}
