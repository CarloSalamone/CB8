import Button from "../button/Button";
import "./index.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Seme_denari_carte_siciliane.svg"
        alt="logo"
      />
      <ul className="buttons-list">
        <Button textContent="One" color="blue" />
        <Button textContent="Two" color="blue" />
        <Button textContent="Three" color="blue" />
        <Button textContent="Four" color="blue" />
      </ul>
      <div className="user-wrapper">
        <Button textContent="Get started" color="red" />
        <img
          className="user-avatar"
          src="https://www.svgrepo.com/show/224233/user.svg"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
