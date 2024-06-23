import SpecialCards from "./SpecialCards";
const Specials = () => {
  return (
    <section className="special">
      <div className="special-header">
        <h2>This week's special !</h2>
        <button className="online-menu">Online menu </button>
      </div>
      <SpecialCards />
    </section>
  );
};
export default Specials;
