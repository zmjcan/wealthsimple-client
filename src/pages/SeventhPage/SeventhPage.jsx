import "./SeventhPage.scss";
import BlackCard from "../../components/BlackCard/BlackCard";
import { Link } from "react-router-dom";

export default function SeventhPage() {
  return (
    <div>
      <div className="sev-title">
        <h2>select your hero: (current age)</h2>
        <h2>(current age)</h2>
      </div>
      <section className="sev-container">
        {/* need to map here, Link below should be Link to "/8/:id" once data is connected */}
        <Link to="/8">
          <BlackCard Title="Bat Mobile: TFSA" />
        </Link>
        <Link to="/8">
          <BlackCard Title="Side Kick: Cash Account" />
        </Link>
        <Link to="/8">
          <BlackCard Title="Create My Own Squad (Browse All Options)" />
        </Link>
        <Link to="/3">
          <BlackCard Title="New Origin Story?" />
        </Link>
      </section>
    </div>
  );
}
