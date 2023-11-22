
function NavBar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Gerichte
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Cocktails
        </a>
      </li>
    </ul>
  );
}

function HeadLine(props) {
  return (
    <div className="headline-container">
      <h1 className="display-2">Zutatenzauber</h1>
    </div>
  );
}


function Header(props) {
  return (
    <div className="header-container">
      <HeadLine />
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
import Navbar from "./Navbar";