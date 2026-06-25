interface SectionHeadingProps {
  number: string;
  title: string;
  as?: "h1" | "h2";
}

export function SectionHeading({ number, title, as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <>
      <p className="section__number">{number}</p>
      <Heading className="section__title">{title}</Heading>
    </>
  );
}
