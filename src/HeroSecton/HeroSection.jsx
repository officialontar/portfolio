
import "../../src/Herosection.css";

const HeroSection = () => {
  return (
    <div>
      <nav className="navbar slide-top">
        <ul className="menu slide-left">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="hero">
        <h1 className="typewriter line1">I AM DEVELOPER</h1>
        <h1 className="typewriter line2">I'M FRONTEND DEVELOPER</h1>
        <h1 className="typewriter line3">I AM SOFTWARE ENGINEER</h1>
      </div>
    </div>
  );
};

export default HeroSection;
