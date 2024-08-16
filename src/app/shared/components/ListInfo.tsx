import Title from "../typography/Title";
import { DataLink } from "../interfaces/DataLink.interface";
import ExternalLink from "../typography/ExternalLink";

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
            <ExternalLink text={data.name} url={data.link} />
          </li>
        ))}
      </ul>
    </article>
  );
}
