import "./MainPage.scss";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className="main">
        <img
          className="main__logo"
          src="../../../src/assets/logos/ws-wordmark.svg"
        />
        <h2 className="main__subtitle">origin stories</h2>
        <Link to="/2">
          <img
            className="main__feature"
            src="../../../src/assets/images/cover-batman.png"
          />
        </Link>
        <h2 className="main__title">enter your origin story...</h2>
      </div>
    </>
  );
}
