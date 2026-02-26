"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export default function FormSubmission() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateName = (value) => {
    if (!value.trim()) return "Name is required!";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required!";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
      return "Invalid email address!";
    return "";
  };

  const validateMessage = (value) => {
    if (!value.trim()) return "Message is required!";
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      message: validateMessage(message),
    };

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleFormSubmission = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:px-20 px-4">
      <div className="flex flex-col gap-4 bg-white p-8 border border-[#dadfe7] rounded-2xl shadow-sm w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-black font-semibold">Name</label>
            <input
              type="text"
              className="rounded-xl border border-gray-300 px-3 py-2 bg-[#f9fafb] text-black"
              placeholder="John Doe"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                setName(value);
                setErrors((prev) => ({
                  ...prev,
                  name: validateName(value),
                }));
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black font-semibold">Email</label>
            <input
              type="email"
              className="rounded-xl bg-[#f9fafb] border border-gray-300 px-3 py-2 text-black"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
                setErrors((prev) => ({
                  ...prev,
                  email: validateEmail(value),
                }));
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black font-semibold">Message</label>
          <textarea
            className="rounded-xl border border-gray-300 px-3 py-2 h-28 resize-none bg-[#f9fafb] text-black"
            placeholder="Type something here..."
            value={message}
            onChange={(e) => {
              const value = e.target.value;
              setMessage(value);
              setErrors((prev) => ({
                ...prev,
                message: validateMessage(value),
              }));
            }}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          disabled={loading}
          className="cursor-pointer px-6 py-2 bg-[#af47ff] text-white rounded-md w-fit flex items-center gap-2 hover:bg-[#9a3de0] transition disabled:opacity-50"
          onClick={handleFormSubmission}
        >
          {loading && (
            <Image
              src="/loader.png"
              width={20}
              height={20}
              alt="loading"
              className="animate-spin"
            />
          )}
          <span>{loading ? "Sending..." : "Send Message"}</span>
        </button>
      </div>
    </div>
  );
}
