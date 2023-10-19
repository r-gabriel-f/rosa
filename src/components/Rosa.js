import React from "react";
import "../components/Rosa.css";
import { Link } from "react-router-dom";
export const Rosa = () => {

  return (
    <div className="back">
      <div className="bday">
        Te Amo Mucho ♥<br></br>
        Yarela Heydi Copa Villca <br></br>
        Atte: Robert Gabriel Flores
      </div>
      <div className="heart"></div>
      <footer>
        <div className="boton">
          <button>
            <Link to="/girasol">
              <span>Has click aquí</span>
            </Link>
          </button>
        </div>
      </footer>
    </div>
  );
};
