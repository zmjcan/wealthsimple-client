import "./FourthPage.scss";
import { Link } from "react-router-dom";

export default function FourthPage() {
  return (
    <>
      <div className="fourth">
        <img
          className="fourth__logo"
          src="../../../src/assets/logos/ws-wordmark.svg"
        />
        <div className="fourth__container">
          <Link to="/5">
            <img
              className="fourth__feature"
              src="../../../src/assets/images/timeline.png"
            />
          </Link>
          <h2 className="fourth__title">What's your origin timeline?</h2>
        </div>
      </div>
    </>
  );
}
