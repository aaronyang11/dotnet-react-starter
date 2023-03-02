import "../CSS/style.css";
import logo from "../images/react.png";

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        style={{ height: "35px", verticalAlign: "top" }}
        alt="logo"
      ></img>
      <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey",
};

function SubHeader() {
  return (
    <p style={subHeaderStyle} className="text-center">
      This is an exciting course
    </p>
  );
}

export default Header;
