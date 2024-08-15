interface Props {
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  customClass?: string;
}

export default function Title({ title, level, customClass }: Props) {
  const headingClass = "font-thin tracking-wider";
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const fontSize = {
    1: "text-font-2xl",
    2: "text-font-xl",
    3: "text-font-md",
    4: "text-font-md",
    5: "text-font-base",
    6: "text-font-base",
  };

  return (
    <Tag className={`${headingClass} ${fontSize[level]} ${customClass || ""}`}>
      {title}
    </Tag>
  );
}
