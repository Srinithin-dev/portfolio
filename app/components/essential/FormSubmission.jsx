"use client";
import { useState } from "react";
export default function FormSubmission() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmission = async () => {
    await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
  };
  return (
    <div className="w-full lg:px-20 px-4">
      <div
        className="flex flex-col gap-4 bg-white p-8 border border-[#dadfe7]
                   rounded-2xl transition-all duration-300 shadow-sm w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-black font-semibold">Name</label>
            <input
              type="text"
              className="rounded-xl border border-gray-300 px-3 py-2 bg-[#f9fafb] text-black"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black font-semibold">Email</label>
            <input
              type="email"
              className="rounded-xl bg-[#f9fafb] border border-gray-300 px-3 py-2 text-black"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black font-semibold">Message</label>
          <textarea
            className="rounded-xl border border-gray-300 px-3 py-2 h-28 resize-none bg-[#f9fafb] text-black"
            placeholder="Type something here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          className="px-6 py-2 bg-[#af47ff] text-white rounded-md w-fit"
          onClick={() => handleFormSubmission()}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
