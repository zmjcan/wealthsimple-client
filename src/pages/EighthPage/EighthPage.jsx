import "./EighthPage.scss";
import { Link } from "react-router-dom";
import feature1 from "../../../src/assets/images/video-preview2.png";
import feature2 from "../../../src/assets/images/video-preview3.png";

export default function EighthPage() {
  return (
    <>
      <div className="eighth">
        <h2 className="eighth__title">Take action:</h2>
        <div className="eighth__subtitle">
          <h2>Ready to Fight?</h2>
          <h3>(Take me to Wealthsimple Setup)</h3>
        </div>

        <div className="eighth__container">
          <Link to="">
            <img
              className="eighth__feature1"
              src={feature1}
            />
          </Link>
          <div className="eighth__subtitle">
            <h2>Need more weapons</h2>
            <h3>(Link to knowledge page)</h3>
          </div>
          <Link to="">
            <img
              className="eighth__feature2"
              src={feature2}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
