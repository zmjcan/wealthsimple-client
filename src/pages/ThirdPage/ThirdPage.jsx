import "./ThirdPage.scss";
import { Link } from "react-router-dom";
import VillainCard from "../../components/VillainCard/VillainCard";

export default function ThirdPage() {
  return (
    <>
      <div className="third-title">
        <h2>Who's your villain?</h2>
      </div>
      <section className="villain-container">
        {/* need to map here, Link below should be Link to "/4/:id" once data is connected  */}
        <Link to="/4">
          <VillainCard
            VillainName="Mysterious Villain"
            cName="villaincard__1"
          />
        </Link>
        <Link to="/4">
          <VillainCard
            VillainName="Money to Spend (Saving/Cash)"
            cName="villaincard__2"
          />
        </Link>
        <Link to="/4">
          <VillainCard VillainName="Retirement" cName="villaincard__3" />
        </Link>
        <Link to="/4">
          <VillainCard
            VillainName="Building an Empire (Investing)"
            cName="villaincard__4"
          />
        </Link>
        <Link to="/4">
          <VillainCard
            VillainName="Mortgage (Housing)"
            cName="villaincard__5"
          />
        </Link>
      </section>
    </>
  );
}
