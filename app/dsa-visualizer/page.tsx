import Button from "../components/Button";
import Image from "next/image";

export default function index() {
  return (
    <div className="bg-white  text-black py-4">
      <div className="flex justify-around">
        <div className="flex gap-4">
          <Image
            src="/left.png"
            alt="left arrow"
            width={18}
            height={18}
            className="invert-[0.4] hover:invert-0 transition"
          />
          <div className="text-[#627084] text-sm">Back to portfolio</div>
        </div>
        <div className="font-bold text-sm">Understanding Stack</div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="justify-center flex font-bold text-6xl">
            Understanding Stacks
          </div>
          <div className="justify-center flex text-[#627084]">
            Learn the Stack Data Structure through interactive visualizations
            and real-world examples.
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              icons={""}
              customClass={"bg-[#af47ff] text-white"}
              text={"Try the stack"}
            ></Button>
            <Button
              icons={""}
              customClass={"bg-[#e7eaef] text-black"}
              text={"Start Learning"}
            ></Button>
          </div>
        </div>
        {/* information */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff] w-fit">
              <span className="text-xs font-semibold">THE BASICS</span>
            </div>
            <div className="font-bold text-3xl">What is a Stack ?</div>
            <div className="text-[#627084]">
              A linear data structure that follows the LIFO principle.
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col bg-white shadow-2xl rounded-lg p-4 border-[#627084] border">
              <span>
                A stack is a <strong>last linear data structure .</strong>
              </span>
              <span>
                It follows <strong>LIFO </strong>— Last In, First Out.{" "}
              </span>
              <span>
                The <strong>last item added </strong>is the first item removed.
              </span>
            </div>
            <div className="">
              <div className="flex flex-col bg-white shadow-2xl rounded-lg p-4 border-[#627084] border">
                <div>
                  <span className="shadow-2xl rounded-lg p-4">Item 4</span>
                  <span>Last In ← removed first</span>
                </div>
                <span className="shadow-2xl rounded-lg p-4">Item 3</span>
                <span className="shadow-2xl rounded-lg p-4">Item 2</span>
                <div className="flex flex-col">
                  <div>
                    <span className="shadow-2xl rounded-lg p-4">Item 1</span>
                    <span>First In</span>
                  </div>
                  <span>Items leave from the top — the newest first.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* THE BASICS */}
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="flex flex-col items-center gap-3 mb-14">
              <div className="px-5 py-2 rounded-full bg-[#af47ff1a] text-[#af47ff] text-xs font-semibold tracking-widest">
                THE BASICS
              </div>

              <h2 className="text-4xl font-bold text-center">
                What is a Stack?
              </h2>

              <p className="text-[#627084] text-lg text-center">
                A linear data structure that follows the LIFO principle.
              </p>
            </div>

            {/* Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Card */}
              <div className="rounded-2xl border border-[#dbe2ea] bg-white shadow-sm p-10">
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#af47ff] mt-2" />

                    <p className="text-lg text-[#627084] leading-8">
                      A stack is a{" "}
                      <span className="font-bold text-black">
                        linear data structure
                      </span>
                      .
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#af47ff] mt-2" />

                    <p className="text-lg text-[#627084] leading-8">
                      It follows{" "}
                      <span className="font-bold text-black">LIFO</span> — Last
                      In, First Out.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#af47ff] mt-2" />

                    <p className="text-lg text-[#627084] leading-8">
                      The{" "}
                      <span className="font-bold text-black">
                        last item added
                      </span>{" "}
                      is the first item removed.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Right Card */}

              <div className="rounded-2xl border border-[#dbe2ea] bg-white shadow-sm p-8">
                <div className="space-y-4">
                  {/* Item 4 */}

                  <div className="border-2 border-[#af47ff] rounded-xl px-5 py-4 flex justify-between bg-[#faf4ff]">
                    <span className="font-medium">Item 4</span>

                    <span className="text-[#af47ff] text-sm font-medium">
                      Last In ← removed first
                    </span>
                  </div>

                  {/* Item 3 */}

                  <div className="rounded-xl px-5 py-4 bg-[#edf1f7] text-[#627084]">
                    Item 3
                  </div>

                  {/* Item 2 */}

                  <div className="rounded-xl px-5 py-4 bg-[#edf1f7] text-[#627084]">
                    Item 2
                  </div>

                  {/* Item 1 */}

                  <div className="rounded-xl px-5 py-4 bg-[#edf1f7] flex justify-between text-[#627084]">
                    <span>Item 1</span>

                    <span className="text-[#af47ff]">First In</span>
                  </div>
                </div>

                <p className="mt-8 text-center text-[#627084]">
                  Items leave from the top — the newest first.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Examples */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff] w-fit">
              <span className="text-xs font-semibold">IN THE REAL WORLD</span>
            </div>
            <div className="font-bold text-3xl">Where You'll Find Stacks</div>
          </div>
          <div className="flex px-32 gap-2 justify-center items-center">
            <div className="flex flex-col bg-white shadow-2xl rounded-lg p-4 border-[#627084] border">
              <span className="font-bold">Stack of Plates</span>
              <span className="text-sm">
                You add plates on top and take from the top. The last plate
                placed is the first one used.
              </span>
            </div>
            <div className="flex flex-col bg-white shadow-2xl rounded-lg p-4 border-[#627084] border">
              <span className="font-bold">Stack of Plates</span>
              <span className="text-sm">
                You add plates on top and take from the top. The last plate
                placed is the first one used.
              </span>
            </div>
            <div className="flex flex-col bg-white shadow-2xl rounded-lg p-4 border-[#627084] border">
              <span className="font-bold">Stack of Plates</span>
              <span className="text-sm">
                You add plates on top and take from the top. The last plate
                placed is the first one used.
              </span>
            </div>
            <div className="flex flex-col bg-white shadow-2xl rounded-lg p-4 border-[#627084] border">
              <span className="font-bold">Stack of Plates</span>
              <span className="text-sm">
                You add plates on top and take from the top. The last plate
                placed is the first one used.
              </span>
            </div>
          </div>
        </div>
        {/* Interactive */}
        {/* Core Operations */}
        {/* performance */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff] w-fit">
              <span className="text-xs font-semibold">PERFORMANCE</span>
            </div>
            <div className="font-bold text-3xl">Time Complexity</div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="flex flex-col bg-white shadow-2xl rounded-lg px-12 py-8 border-[#627084] border">
              <span className="text-sm text-[#627084]">Push()</span>
              <span className="font-bold text-lg">O(1)</span>
            </div>
            <div className="flex flex-col bg-white shadow-2xl rounded-lg px-12 py-8 border-[#627084] border">
              <span className="text-sm text-[#627084]">Pop()</span>
              <span className="font-bold text-lg">O(1)</span>
            </div>
            <div className="flex flex-col bg-white shadow-2xl rounded-lg px-12 py-8 border-[#627084] border">
              <span className="text-sm text-[#627084]">Peek()</span>
              <span className="font-bold text-lg">O(1)</span>
            </div>
          </div>
          <span>
            Each operation works only on the top of the stack, so it never
            depends on how many items are stored. That constant-time access is
            what makes stacks so efficient.
          </span>
        </div>
        {/* For Developers */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff] w-fit">
            <span className="text-xs font-semibold">FOR DEVELOPERS</span>
          </div>
          <div className="text-3xl">Behind the Scenes</div>

          <div className="flex flex-col bg-white shadow-2xl rounded-lg px-12 py-8 border-[#627084] border">
            <span className="text-lg font-bold  text-[#627084]">
              Concepts Demonstrated
            </span>
            <span className="text-sm">
              Arrays Event Listeners DOM Manipulation State Management Input
              Validation Data Structures
            </span>
          </div>

          <div className="flex flex-col bg-white shadow-2xl rounded-lg px-12 py-8 border-[#627084] border">
            <span className="text-lg font-bold  text-[#627084]">
              Technology Stack
            </span>
            <span className=" text-sm">HTML CSS Tailwind CSS JavaScript</span>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="flex flex-col bg-white shadow-2xl rounded-lg px-12 py-8 border-[#627084] border">
          <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff] w-fit">
            <span className="text-xs font-semibold">LEARNING JOURNEY</span>
          </div>
          <span className="text-sm">
            This project was built to strengthen my understanding of JavaScript
            fundamentals and data structures. It demonstrates how arrays can be
            used to implement a Stack and how UI can be synchronized with
            application state.
          </span>
        </div>
      </div>
    </div>
  );
}
