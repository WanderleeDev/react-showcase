export default function DownButton() {
  return (
    <a
      aria-label="Go to the next section"
      title="Go to the next section"
      className="size-12 text-[#ecb707] border-[50%] mx-auto animate-fade-out-down animate-iteration-count-infinite animate-duration-[1.5s] block"
      href="#"
    >
      <svg viewBox="0 0 24 24">
        <g data-name="Double down">
          <path
            d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z"
            style={{ fill: "currentColor" }}
          />
          <path
            d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z"
            style={{ fill: "currentColor" }}
          />
        </g>
      </svg>
    </a>
  );
}
