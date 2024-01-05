import HeadingPrimary from "./HeadingPrimary";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Subhero({ background, title, subtitle }) {
  const subheroRef = useIntersectionObserver();

  return (
    <section
      ref={subheroRef}
      className={`flex h-112 flex-col items-center justify-center dtxl:h-half-screen ${background} bg-cover bg-center bg-no-repeat px-10 text-center mob:px-5 [&>*:nth-child(1)]:mb-6 [&>*:nth-child(1)]:max-w-3xl [&>*:nth-child(1)]:xl:max-w-full`}
    >
      <HeadingPrimary>{title}</HeadingPrimary>
      <p className="text-xl font-medium text-white">{subtitle}</p>
    </section>
  );
}

export default Subhero;
