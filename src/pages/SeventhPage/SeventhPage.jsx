import "./SeventhPage.scss";
import BlackCard from "../../components/BlackCard/BlackCard";
import { Link } from "react-router-dom";

export default function SeventhPage() {
  return (
    <div>
      <div className="sev-title">
        <h2>Check out your next mission:</h2>
        <h2>(flip cards to find out more)</h2>
      </div>
      <section className="sev-container">
        {/* need to map here, Link below should be Link to "/8/:id" once data is connected */}
        <Link to="/8">
          <BlackCard Title="Bat Mobile: TFSA" Description="TFSA is a Canadian investment account that allows individuals to earn tax-free income on contributions." />
        </Link>
        <Link to="/8">
          <BlackCard
            Title="Side Kick: Cash Account"
            Description="Cash account is a basic investment account that allows you to buy/sell securities using  the available cash balance."
          />
        </Link>
        <Link to="/8">
          <BlackCard
            Title="Create My Own Squad (Browse All Options)"
            Description="Create Own Squad - WealthSimple provides all varieties of options that you could browse from"
          />
        </Link>
        <Link to="/3">
          <BlackCard
            Title="New Origin Story?"
            Description="This will lead you back to select a new origin story, ready for your next adventure?"
          />
        </Link>
      </section>
    </div>
  );
}
