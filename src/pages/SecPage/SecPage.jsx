import "./SecPage.scss";
import { Link } from "react-router-dom";
import HeroCard from "../../components/HeroCard/HeroCard";

export default function SecPage() {
  return (
    <div>
      <div className="sec-title">
        <h2>select your hero: (current age)</h2>
        <h2>(current age)</h2>
      </div>
      <section className="hero-container">
        {/* need to map here, Link below should be Link to "/3/:id" once data is connected */}
        <Link to="/3">
          <HeroCard HeroName="Spiderman" cName="herocard__1" Age="15-20" />
        </Link>
        <Link to="/3">
          <HeroCard HeroName="Superman" cName="herocard__2" Age="21-25" />
        </Link>
        <Link to="/3">
          <HeroCard HeroName="Batman" cName="herocard__3" Age="26-35" />
        </Link>
        <Link to="/3">
          <HeroCard HeroName="Ironman" cName="herocard__4" Age="36+" />
        </Link>
      </section>
    </div>
  );
}
