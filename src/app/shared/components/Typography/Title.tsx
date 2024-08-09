interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <h1 className="text-3xl md:text-5xl xl:text-6xl text-center font-thin tracking-wider">
      {title}
    </h1>
  );
}
