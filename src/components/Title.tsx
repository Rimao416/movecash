interface TitlePros {
  title: string;
  description?: string;
}
const Title: React.FC<TitlePros> = ({ title, description }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;
