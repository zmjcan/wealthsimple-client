import "./SixthPage.scss";
import { Link, useParams } from "react-router-dom";
import feature from "../../../src/assets/images/video-preview1.png";

export default function SixthPage() {
  const {heroId} = useParams();
  const {villanId} = useParams();
  const {timelineId} = useParams();
  return (
      <main className="sixth">
      <h2 className="sixth__title">Heroic Choices Shape Epic Destinies...</h2>
        <Link to={`/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/results`} className="sixth__container">
          <img
            className="sixth__feature"
            src={feature}
          />
        </Link>
      </main>
  );
}
