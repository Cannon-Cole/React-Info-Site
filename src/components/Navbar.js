import logo from "../images/logo192.png";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="flex-row">
        <img src={logo} alt="Logo"></img>
        <h3 className="blue-highlight">ReactFacts</h3>
      </div>
      <h3 className="white-text">React - Project 1</h3>
    </nav>
  );
}
