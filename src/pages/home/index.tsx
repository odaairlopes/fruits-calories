import "./styles.css";
import { useNavigate } from "react-router-dom";

/* À princípio, essa sera a página inicial do layout, pois será a primeira a ser renderizada. 
    Depois acho um nome maneiro pras próximas.
*/

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Fruit Calories</h1>
      <h4>Leve uma vida + saudável</h4>
      <button className="main-button" onClick={() => navigate("/fruits")}>
        Frutando
      </button>
    </div>
  );
};
export default Home;
