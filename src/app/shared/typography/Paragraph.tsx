interface Props {
  text?: string;
  type: "banner" | "normal";
}

export default function Paragraph({ text, type }: Props) {
  return (
    <p className={type === "banner" ? "text-font-lg" : "text-base"}>
      {text}
    </p>
  );
}
