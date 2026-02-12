import { useParams } from "react-router-dom";

export function Details() {
  let params = useParams();

  return (
    <div>
      <h2>Details</h2>
      <p>
        Id: {params.id} <br />
        Name: {params.name} <br />
        Price: {params.price} <br />
        Stock: {params.stock === "true" ? "Avaliable" : "Out of Stock"}
      </p>
    </div>
  );
}
