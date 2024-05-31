import "./FifthPage.scss";
import { Link } from "react-router-dom";

export default function FifthPage() {
  return (
    <>
      <div className="fifth__title">
        <h2>What’s your origin timeline?</h2>
      </div>
      <section className="fifth__container">
        <Link to="/6" className="fifth__button">
          <img src="../../../src/assets/images/BeigeButton.png" />
        </Link>
        <h3>1 year</h3>

        <Link to="/6" className="fifth__button">
          <img src="../../../src/assets/images/SageButton.png" />
        </Link>
        <h3>3 years</h3>

        <Link to="/6" className="fifth__button">
          <img src="../../../src/assets/images/SageButton.png" />
        </Link>
        <h3>5 years</h3>

        <Link to="/6" className="fifth__button">
          <img src="../../../src/assets/images/SageButton.png" />
        </Link>
        <h3>10 years</h3>

        <Link to="/6" className="fifth__button">
          <img src="../../../src/assets/images/SageButton.png" />
        </Link>
        <h3>10+ years</h3>
      </section>
    </>
  );
}
