import ReactLogo from "../components/ReactLogo";
import Title from "../typography/Title";

export default function Header() {
  return (
    <header className="mx-auto select-none">
      <ReactLogo />
      <div className="animate-fade-in-up animate-delay-400">
        <Title title="Mis proyectos react" level={1} />
      </div>
    </header>
  );
}
