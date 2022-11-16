interface PostProps {
  title: string;
  paragraph: string;
}

export function Post({ title, paragraph }: PostProps) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </li>
  );
}
