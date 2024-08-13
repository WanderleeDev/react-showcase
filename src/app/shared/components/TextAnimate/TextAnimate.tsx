import style from "./styles.module.css";

interface Props {
  text: string;
  type: "banner" | "normal";
  customClass?: string;
}

export default function TextAnimate({ text, type, customClass }: Props) {
  return (
    <div className={`${style["animate-container"]} ${customClass}`}>
      <p className={style["animate-text"]}>
        <span className={type === "banner" ? "text-font-lg" : "text-base"}>
          {text}
        </span>
      </p>
    </div>
  );
}
