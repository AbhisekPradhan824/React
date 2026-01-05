import { NetflixHeader } from "../netflix-header/netflix-header";
import { NetflixMain } from "../netflix-main/netflix-main";
import "./netflix-index.css";

function NetflixIndex() {
  return (
    <div className="bg-image">
      <div className="bg-shade">
        <NetflixHeader />
        <NetflixMain />
      </div>
    </div>
  );
}
export default NetflixIndex;
