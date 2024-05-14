import suv from "./assets/suv.avif";
import chevrolet from "./assets/chevrolet.avif";
import ferrari from "./assets/ferrari.avif";
import lambo from "./assets/lambo.avif";
import mustang from "./assets/mustang.avif";
import porshe from "./assets/porshe.avif";
const Explore = () => {
  return (
    <div className="explore">
      <h2>Welcome to EV-olution!</h2>
      <div className="explore-content">
        <div>
          <img src={suv} alt="suv" />
        </div>
        <div>
          <img src={porshe} alt="porshe" />
        </div>
        <div>
          <img src={ferrari} alt="ferrari" />
        </div>
        <div>
          <img src={chevrolet} alt="chevrolet" />
        </div>
        <div>
          <img src={mustang} alt="mustang" />
        </div>
        <div>
          <img src={lambo} alt="lambo" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
