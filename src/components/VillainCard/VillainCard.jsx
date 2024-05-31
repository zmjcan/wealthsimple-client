import "./VillainCard.scss";

export default function VillainCard({ VillainName, cName, VillainType }) {
  return (
    <>
      <article className={cName}>
        <h3 className="villaincard__title">{VillainName}</h3>
        <h3 className="villaincard__subtitle">{VillainType}</h3>
      </article>
    </>
  );
}
