export default function Button({ customClass, text, icons }) {
  return (
    <div
      className={` hover:scale-105 transition-transform lg:rounded-lg rounded-lg px-6 py-2  cursor-pointer flex items-center justify-center gap-2 w-fit z-20 p-2 shadow ${customClass ? customClass : ""}`}
    >
      {text}
      {icons}
    </div>
  );
}
