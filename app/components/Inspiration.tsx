"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Cristiano Ronaldo",
    role: "Football Legend",
    quote:
      "Talent without work is nothing. Discipline is what makes greatness repeatable.",
    image: "/ronaldo.png",
  },
  {
    name: "Steve Jobs",
    role: "Co-founder, Apple",
    quote:
      "The only way to do great work is to love what you do and push past limits.",
    image: "/steveJobs.png",
  },
  {
    name: "V.A. Shiva Ayyadurai",
    role: "Creator of Email System",
    quote:
      "Innovation is born when you refuse to accept limits and choose to build what others think is impossible.",
    image: "/shiva.png",
  },
  {
    name: "Tim Berners-Lee",
    role: "Inventor of the World Wide Web",
    quote:
      "The future is built by people who show up every day — not by those waiting for the perfect moment.",
    image: "/tim.png",
  },
  {
    name: "Alan Turing",
    role: "Father of Computer Science",
    quote:
      "We can only see a short distance ahead, but hard work lets us clear the path as we go.",
    image: "/turing.png",
  },
  {
    name: "Nikola Tesla",
    role: "Inventor & Electrical Pioneer",
    quote:
      "If you want great things, devote your life to depth, not speed. Mastery comes from obsession, not luck.",
    image: "/tesla.png",
  },
  {
    name: "Sundar Pichai",
    role: "CEO of Google",
    quote:
      "Your work should challenge you. If it doesn’t scare you a little, you’re not growing.",
    image: "/pichai.png",
  },
  {
    name: "Jensen Huang",
    role: "CEO of NVIDIA",
    quote:
      "There are no shortcuts. Every breakthrough is built on thousands of invisible hours that no one applauds.",
    image: "/huang.png",
  },
];

export default function InfiniteTestimonialCarousel() {
  const VISIBLE = 3;
  const slidePercent = 100 / VISIBLE;
  const base = TESTIMONIALS.length;
  const slides = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const startIndex = base;

  const [index, setIndex] = useState<number>(startIndex);
  const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);
  const animTimeoutRef = useRef<number | null>(null);

  const next = () => {
    if (transitionEnabled === false) return;
    setIndex((i) => i + 1);
  };
  const prev = () => {
    if (transitionEnabled === false) return;
    setIndex((i) => i - 1);
  };

  useEffect(() => {
    startAuto();
    return () => {
      stopAuto();
      if (animTimeoutRef.current) window.clearTimeout(animTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAuto() {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
  }
  function stopAuto() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const handleTransitionEnd = () => {
    if (index >= base * 2) {
      setTransitionEnabled(false);
      const corrected = startIndex + ((index - startIndex) % base);
      setIndex(corrected);
      animTimeoutRef.current = window.setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
    }

    if (index < base) {
      setTransitionEnabled(false);
      const offset = (((index - startIndex) % base) + base) % base;
      const corrected = startIndex + offset;
      setIndex(corrected);
      animTimeoutRef.current = window.setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
    }
  };

  const offsetSteps = index - startIndex;
  const transformPercent = -(offsetSteps * slidePercent);

  return (
    <div
      className="relative w-3/4 overflow-hidden py-8 text-black mx-auto"
      onMouseEnter={() => {
        stopAuto();
      }}
      onMouseLeave={() => {
        startAuto();
      }}
    >
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white cursor-pointer shadow"
      >
        <Image src="/left.png" alt="left" width={18} height={18} />
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white cursor-pointer   shadow"
      >
        <Image src="/right.png" alt="right" width={18} height={18} />
      </button>

      <div>
        <div
          className="flex"
          style={{
            transform: `translateX(${transformPercent}%)`,
            transition: transitionEnabled ? "transform 450ms ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="box-border p-6"
              style={{
                minWidth: `${slidePercent}%`,
              }}
            >
              <div className="h-full bg-white rounded-2xl border border-[#e8e8ec] shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={s.image}
                      alt={s.name}
                      className="w-16 h-16 rounded-full object-cover border"
                      width={50}
                      height={50}
                    />
                    <div>
                      <div className="text-lg font-semibold">{s.name}</div>
                      <div className="text-sm text-gray-500">{s.role}</div>
                    </div>
                  </div>

                  <p className="mt-6 text-center text-gray-700 italic leading-relaxed">
                    “{s.quote}”
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <span className="inline-block bg-[#f3e8ff] text-[#9a6cff] rounded-full px-3 py-1 text-xs">
                    Hard Work
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400 text-sm">
        Auto-rotating every 3s — hover to pause
      </div>
    </div>
  );
}
