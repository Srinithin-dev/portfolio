// "use client";
// import { useState } from "react";
// export default function FormSubmission() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const handleFormSubmission = async () => {
//     await fetch("/api/sendMail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, message }),
//     });
//   };
//   return (
//     <div className="w-full lg:px-20 px-4">
//       <div
//         className="flex flex-col gap-4 bg-white p-8 border border-[#dadfe7]
//                    rounded-2xl transition-all duration-300 shadow-sm w-full"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex flex-col gap-2">
//             <label className="text-black font-semibold">Name</label>
//             <input
//               type="text"
//               className="rounded-xl border border-gray-300 px-3 py-2 bg-[#f9fafb] text-black"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-black font-semibold">Email</label>
//             <input
//               type="email"
//               className="rounded-xl bg-[#f9fafb] border border-gray-300 px-3 py-2 text-black"
//               placeholder="abc@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <label className="text-black font-semibold">Message</label>
//           <textarea
//             className="rounded-xl border border-gray-300 px-3 py-2 h-28 resize-none bg-[#f9fafb] text-black"
//             placeholder="Type something here..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>

//         <button
//           className="px-6 py-2 bg-[#af47ff] text-white rounded-md w-fit"
//           onClick={() => handleFormSubmission()}
//         >
//           Send Message
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function FormSubmission() {
  const MAX_MESSAGE_LENGTH = 1000;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      if (!response.ok) {
        throw new Error();
      }
      console.log(response, "response");
      toast.success("Message sent successfully! I'll get back to you soon.");

      setName("");
      setEmail("");
      setMessage("");

      setErrors({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmission} className="w-full lg:px-20 px-4">
      <div
        className="
        flex flex-col gap-5
        bg-white
        p-8
        border border-[#dadfe7]
        rounded-2xl
        shadow-sm
      "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-black">Name</label>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name)
                  setErrors((prev) => ({
                    ...prev,
                    name: "",
                  }));
              }}
              className={`rounded-xl px-4 py-3 bg-[#f9fafb] border text-black outline-none transition
              ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#af47ff]"
              }`}
            />

            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-black">Email</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email)
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
              }}
              className={`rounded-xl px-4 py-3 bg-[#f9fafb] border text-black outline-none transition
              ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#af47ff]"
              }`}
            />

            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-black">Message</label>

          <textarea
            rows={6}
            maxLength={MAX_MESSAGE_LENGTH}
            placeholder="Tell me about your project or opportunity..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);

              if (errors.message)
                setErrors((prev) => ({
                  ...prev,
                  message: "",
                }));
            }}
            className={`rounded-xl px-4 py-3 resize-none bg-[#f9fafb] border text-black outline-none transition
            ${
              errors.message
                ? "border-red-500"
                : "border-gray-300 focus:border-[#af47ff]"
            }`}
          />

          <div className="flex justify-between items-center">
            {errors.message ? (
              <span className="text-red-500 text-sm">{errors.message}</span>
            ) : (
              <span />
            )}

            <span className="text-xs text-gray-400">
              {message.length}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
          w-fit
          px-8
          py-3
          rounded-xl
          bg-[#af47ff]
          text-white
          font-medium
          transition
          hover:bg-[#9738e7]
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
