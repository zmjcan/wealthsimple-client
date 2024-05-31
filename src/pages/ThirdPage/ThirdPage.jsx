import "./ThirdPage.scss";
import { Link, useParams } from "react-router-dom";
import VillainCard from "../../components/VillainCard/VillainCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ThirdPage() {
  const [villans, setVillans] = useState(null);
  const { heroId } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const fetchVillans = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/heroes/${heroId}/villans`);
      setVillans(response.data);
    } catch (error) {
      console.log("Error fetching all Villans!", error);
    }
  };

  useEffect(() => {
    fetchVillans();
  }, []);

  if (!villans) {
    return <div>loading....</div>;
  }

  return (
    <>
      <div className="third-title">
        <h2>Who's your villain?</h2>
      </div>
      <section className="villain-container">
        {villans.map((villan) => {
          return (
            <Link key={villan.id} to={`/heroes/${heroId}/villans/${villan.id}`}>
              <VillainCard
                VillainName={villan.villan_name}
                VillainType={villan.villan_type}
                cName={`villaincard__${villan.id}`}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
}
