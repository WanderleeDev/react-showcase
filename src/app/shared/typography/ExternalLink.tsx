interface Props {
  text: string;
  url: string;
}

export default function ExternalLink({ text, url }: Props) {
  return (
    <a
      className="hover:text-[#ffbb00] transition-colors focus-within:text-[#ffbb00] hover:underline text-inherit"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
