interface Props {
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  customClass?: string;
}

export default function Title({ title, level, customClass }: Props) {
  const headingClass = "text-font-2xl text-center font-thin tracking-wider";
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${headingClass} ${customClass}`}>{title}</Tag>;
}
