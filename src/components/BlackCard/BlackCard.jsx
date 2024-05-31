import "./BlackCard.scss";
import ReactFlipCard from "reactjs-flip-card";

export default function BlackCard({ Title, Description }) {
  const styles = {
    cardF: {
      background: "#32302F",
      color: "#FFFFFF",
      borderRadius: 90,
      width: 180,
      height: 90,
    },
    cardB: {
      background: "#E1DCD0",
      color: "#32302F",
      borderRadius: 90,
      width: 180,
      height: 90,
    },
  };

  return (
    <ReactFlipCard
      className="flipcard"
      frontStyle={styles.cardF}
      backStyle={styles.cardB}
      frontComponent={<div className="flipcard__title">{Title}</div>}
      backComponent={<div className="flipcard__description">{Description}</div>}
    />
  );
}