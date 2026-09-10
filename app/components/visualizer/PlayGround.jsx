export default function PlayGround() {
  return (
    <div className="flex gap-4 mb-10">
      <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
        <div className="">value</div>
        <div>
          <input
            type="text"
            className="border border-slate-200 p-4 rounded-lg"
            placeholder="e.g. 42,taskA,hello"
          />
          <div className="inline-flex items-center gap-2 rounded-xl bg-violet-400 px-5 py-3 text-sm font-bold text-white transition  hover:bg-violet-500">
            Push
          </div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-black transition  hover:bg-slate-300">
          Pop
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-black transition  hover:bg-slate-300">
          Reset
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <p>Top Of Stack</p>
            <p>42</p>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <p>Top Of Stack</p>
            <p>42</p>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-lg  border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <p>Top Of Stack</p>
            <p>42</p>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <p>Top Of Stack</p>
            <p>42</p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
        <div className="flex justify-between text-xs text-slate-400">
          <div>TOP</div>
          <div>LIFO</div>
        </div>
        <div className="border border-slate-300 rounded-lg border-dotted h-full"></div>
        <div className="text-xs text-slate-400 items-center justify-center flex">
          BASE
        </div>
      </div>
    </div>
  );
}
