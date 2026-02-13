import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function Success() {
  let params = useParams();
  let search = useSearchParams();
  useEffect(() => {
    console.log(search);
  }, []);
  return (
    <div>
      <h3>Login Success.. {params.username}</h3>
    </div>
  );
}
