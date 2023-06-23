import supabase from "../config/superbase";
import { useEffect, useState } from "react";
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies.filter((sm) => sm.id !== id);
    });
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("table 1 ").select();

      if (error) {
        setFetchError(error);
        console.log(fetchError);
        setSmoothies(null);
      }

      if (data) {
        setSmoothies(data);
        setFetchError(null);
        console.log(smoothies);
      }
    };

    fetchSmoothies();
  }, []);

  console.log("smoothies", smoothies);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
