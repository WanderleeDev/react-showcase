export default function ScrollTopButton() {
  return (
    <a
      id="scrollTop-button"
      className="text-black size-10 hidden xs:grid place-content-center bg-[#ffbb00] border-2 rounded-lg border-current hover:text-[#ffbb00] hover:bg-black shadow-sm shadow-current transition-all fixed bottom-20"
      href="#home"
      aria-label="go to home"
      title="go to home"
    >
      <span className="block size-4 border-[.3rem] border-[currentColor_transparent_transparent_currentColor] rotate-45 translate-y-1"></span>
    </a>
  );
}
