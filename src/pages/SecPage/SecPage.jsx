import "./SecPage.scss";
import { Link } from "react-router-dom";
import HeroCard from "../../components/HeroCard/HeroCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SecPage() {
  const [heroes, setHeroes] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const fetchHeroes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/heroes`);
      setHeroes(response.data);
    } catch (error) {
      console.log("Error fetching all Heores!", error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  if (!heroes) {
    return <div>loading....</div>;
  }
  
  return (
    <main className="heroes">
      <div className="heroes__title">
        <h2>Select Your Hero:</h2>
        <h2>(Current Age)</h2>
      </div>
      <section className="heroes__container">
        {heroes.map((hero) => {
          return (
            <Link key={hero.id} to={`/heroes/${hero.id}/villans`}>
              <HeroCard
                HeroName={hero.age_hero}
                cName={`herocard__${hero.id}`}
                Age={hero.age_range}
              />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
