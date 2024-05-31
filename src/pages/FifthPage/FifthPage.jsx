import "./FifthPage.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import sageButton from "../../../src/assets/images/SageButton.png";

export default function FifthPage() {
  const [timelines, setTimelines] = useState(null);
  const { heroId } = useParams();
  const { villanId } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchTimelines = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/heroes/${heroId}/villans/${villanId}/timelines`
      );
      setTimelines(response.data);
    } catch (error) {
      console.log("Error fetching all Timelines!", error);
    }
  };

  useEffect(() => {
    fetchTimelines();
  }, []);

  if (!timelines) {
    return <div>loading....</div>;
  }

  return (
    <main>
      <div className="fifth__title">
        <h2>What’s your Origin Timeline?</h2>
      </div>
      <section className="fifth__container">
        {timelines.map((timeline) => {
          return (
            <>
              <Link
                key={timeline.id}
                to={`/heroes/${heroId}/villans/${villanId}/timelines/${timeline.id}`}
                className="fifth__button"
              >
                <img
                  src={`
                    timeline.id === 1
                      ? "../../../src/assets/images/BeigeButton.png"
                      : ${sageButton}
                  `}
                />
              </Link>
              <h3>{timeline.timeline_value}</h3>
            </>
          );
        })}
      </section>
    </main>
  );
}
