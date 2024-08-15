import Title from "../typography/Title";
import { DataLink } from "../interfaces/DataLink.interface";

interface Props {
  title: string;
  dataInfo: DataLink[];
}

export default function ListInfo({ dataInfo, title }: Props) {
  return (
    <article className="flex flex-col gap-6 min-w-40">
      <Title customClass="text-[#ffbb00]" level={3} title={title} />
      <ul className="flex flex-wrap gap-3 sm:flex-col">
        {dataInfo.map((data) => (
          <li key={data.name}>
            <a
              className="hover:text-[#ffbb00] transition-colors focus-within:text-[#ffbb00] hover:underline"
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
