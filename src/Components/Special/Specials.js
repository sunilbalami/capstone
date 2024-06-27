import { useNavigate } from "react-router-dom";
import SpecialCards from "./SpecialCards";
const Specials = () => {
  const navigate = useNavigate();
  const handleOnlineMenuClick = (e) => {
    e.preventDefault();
    navigate("/onlineMenu");
  };
  return (
    <section className="special">
      <div className="special-header">
        <h2>This week's special !</h2>

        <button className="online-menu" onClick={handleOnlineMenuClick}>
          Online menu{" "}
        </button>
      </div>
      <SpecialCards />
    </section>
  );
};
export default Specials;
