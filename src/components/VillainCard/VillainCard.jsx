import "./VillainCard.scss";

export default function VillainCard({ VillainName, cName }) {
  return (
    <>
      <article className={cName}>
        <h3 className="villaincard__title">{VillainName}</h3>
      </article>
    </>
  );
}
