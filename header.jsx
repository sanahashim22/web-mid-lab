import '../App.css';


const Header = () => {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://cdn-icons-png.flaticon.com/128/2798/2798007.png" alt="Logo" className="logo" />
        <span className="Movie">Movies</span>
      </div>
      <div className="menu">
      <a href="/" className="menu-item">Home</a>
            <a href="/Explore" className="menu-item">Explore</a>
            <a href="/Experiences" className="menu-item">Experiences</a>
      </div>

    </nav>
  );
};

export default Header;
