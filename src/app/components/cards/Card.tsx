type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <article>
      <header>
        <strong>{title}</strong>
      </header>
      <p>{content}</p>
    </article>
  );
}
