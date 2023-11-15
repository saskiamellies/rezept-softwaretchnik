
function NavBar(props) {
  return (
    <ul class="nav nav-tabs">
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

function HeadLine (props) {
  return (
    <div className="headline-container">
      <h1 className="display-2">Zutatenzauber</h1>
    </div>
  );
}


function Header (props) {
    return (
      <div className="header-container">
        <NavBar />
        <HeadLine />
      </div>
    );
  }
  
  export default Header;
