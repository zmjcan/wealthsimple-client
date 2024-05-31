import "./SeventhPage.scss";
import BlackCard from "../../components/BlackCard/BlackCard";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SeventhPage() {
  const [primary, setPrimary] = useState(null);
  const [secondary, setSecondary] = useState(null);
  const [missions, setMissions] = useState(null);
  const { heroId } = useParams();
  const { villanId } = useParams();
  const { timelineId } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchMissions = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/missions`
      );
      setMissions(response.data);
    } catch (error) {
      console.log("Error fetching all Missions!", error);
    }
  };
  const fetchPrimary = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/primary`
      );
      setPrimary(response.data);
    } catch (error) {
      console.log("Error fetching Primary Mission!", error);
    }
  };
  const fetchSecondary = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/secondary`
      );
      setSecondary(response.data);
    } catch (error) {
      console.log("Error fetching Secondary Mission!", error);
    }
  };

  useEffect(() => {
    fetchPrimary();
    fetchSecondary();
    fetchMissions();
  }, []);

  if (!primary || !secondary || !missions) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <div className="sev-title">
        <h2>Check out your next mission:</h2>
        <h2>(flip cards to find out more)</h2>
      </div>
      <section className="sev-container">
        {primary.map((prime) => {
          return (
            <Link
              key={prime.id}
              to={`/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/results/actions`}
            >
              <BlackCard
                Title={`Mission: ${prime.mission_name}`}
                Description={prime.mission_brief}
              />
            </Link>
          );
        })}
        {secondary.map((prime) => {
          return (
            <Link
              key={prime.id}
              to={`/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/results/actions`}
            >
              <BlackCard
                Title={`Side Quest: ${prime.mission_name}`}
                Description={prime.mission_brief}
              />
            </Link>
          );
        })}

        <Link
          to={`/heroes/${heroId}/villans/${villanId}/timelines/${timelineId}/results/actions`}
        >
          <BlackCard
            Title="Create My Own Squad (Browse All Options)"
            Description="Create Own Squad - WealthSimple provides all varieties of options that you could browse from"
          />
        </Link>
        <Link to={`/heroes/${heroId}/villans`}>
          <BlackCard
            Title="New Origin Story?"
            Description="This will lead you back to select a new origin story, ready for your next adventure?"
          />
        </Link>
      </section>
    </div>
  );
}
