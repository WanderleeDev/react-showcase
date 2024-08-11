interface Props {
  children: React.ReactNode;
}

export default function TextAnimate({ children }: Props) {
  return <div className="text-transparent">{children}</div>;
}
