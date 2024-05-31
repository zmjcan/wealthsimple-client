import "./MainPage.scss";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logos/ws-wordmark.svg";
import feature from "../../../src/assets/images/cover-batman.png";

export default function MainPage() {
  return (
    <main className="main">
      <img className="main__logo" src={logo} />
      <h2 className="main__subtitle">Origin Stories</h2>
      <Link to="/heroes">
        <img className="main__feature" src={feature} />
      </Link>
      <h2 className="main__title">Enter Your Origin Story...</h2>
    </main>
  );
}
