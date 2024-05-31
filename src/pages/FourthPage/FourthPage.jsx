import "./FourthPage.scss";
import { Link, useParams } from "react-router-dom";
import logo from "../../../src/assets/logos/ws-wordmark.svg";
import feature from "../../../src/assets/images/timeline.png";

export default function FourthPage() {
  const {heroId} = useParams();
  const {villanId} = useParams();
  return (
      <main className="fourth">
        <img className="fourth__logo" src={logo} />
        <section className="fourth__container">
          <Link to={`/heroes/${heroId}/villans/${villanId}/timelines`}>
            <img className="fourth__feature" src={feature} />
          </Link>
          <h2 className="fourth__title">What's your origin timeline?</h2>
        </section>
      </main>
  );
}
