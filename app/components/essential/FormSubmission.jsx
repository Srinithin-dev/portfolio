export default function FormSubmission() {
  const fieldValidation = () => {};
  return (
    <div className="w-full lg:px-20 px-4">
      <div
        className="flex flex-col gap-4 bg-white p-8 border border-[#dadfe7] hover:border-[#af47ff]
                   rounded-2xl hover:scale-105 transition-all duration-300 shadow-sm w-full"
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
    </div>
  );
}
