import "./SixthPage.scss";
import { Link } from "react-router-dom";

export default function SixthPage() {
  return (
    <>
      <div className="sixth">
      <h2 className="sixth__title">Heroic choices shape epic destinies...</h2>
        <Link to="/7" className="sixth__container">
          <img
            className="sixth__feature"
            src="../../../src/assets/images/video-preview1.png"
          />
        </Link>
      </div>
    </>
  );
}
