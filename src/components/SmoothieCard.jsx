import { Link } from "react-router-dom";
import supabase from "../config/superbase";

const SmoothieCard = ({ smoothie, onDelete }) => {
  const habdleDelete = async () => {
    const { data, error } = await supabase
      .from("table 1")
      .delete()
      .eq("id", smoothie.id);

    if (error) {
      console.log(error);
    }
    // if (data) {
    //   console.log(data);
    //   onDelete(smoothie.id);
    //   window.location.reload();
    // }
    onDelete(smoothie.id);
  };

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={habdleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default SmoothieCard;
