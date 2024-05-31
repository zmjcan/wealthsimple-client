import "./HeroCard.scss";

export default function HeroCard({ HeroName, cName, Age }) {
  return (
    <article className={cName}>
      <h3>{HeroName}</h3>
      <h3>Ages {Age}</h3>
    </article>
  );
}
