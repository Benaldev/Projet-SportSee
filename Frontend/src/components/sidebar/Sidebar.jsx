import yogaIcon from "../../assets/images/yogaIcon.png";
import swimIcon from "../../assets/images/swimIcon.png";
import bikeIcon from "../../assets/images/bikeIcon.png";
import liftIcon from "../../assets/images/liftIcon.png";
import "./styles.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <img src={yogaIcon} alt="Yogo icon" />
        </li>
        <li>
          <img src={swimIcon} alt="Swim icon" />
        </li>
        <li>
          <img src={bikeIcon} alt="Bike icon" />
        </li>
        <li>
          <img src={liftIcon} alt="Weight lifting icon" />
        </li>
      </ul>
      <p className="copyright">Copyright, SportSee 2025</p>
    </aside>
  );
};

export default Sidebar;
