import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Mobiles() {
  const [mobiles, useMobiles] = useState([
    { Name: "Realme Narzo10", Category: "Realme" },
    { Name: "Iphone 14 Pro", Category: "Iphone" },
    { Name: "Iphone 13", Category: "Iphone" },
  ]);
  let params = useParams();
  useEffect(() => {
    console.log(params.category);
  }, []);
  return (
    <div>
      <h4>Mobiles - Search Results for {params.category.toUpperCase()}</h4>
      <table width="400" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {mobiles
            .filter((mobile) => mobile.Category === params.category)
            .map((item) => (
              <tr key={item.Name}>
                <td>{item.Name}</td>
                <td>{item.Category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
