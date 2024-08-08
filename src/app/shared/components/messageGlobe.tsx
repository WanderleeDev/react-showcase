interface Props {
  message: string
}

export default function MessageGlobe({ message }: Props) {
  return <div className="message">{message}</div>;
}
