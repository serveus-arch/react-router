import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <ul className="menu">
        <li className="item-menu">
          <Link to={"/"}>For you</Link>
        </li>
        <li className="item-menu">
          <Link>Following</Link>
        </li>
        <li className="item-menu">
          <Link>JavaScript</Link>
        </li>
        <li className="item-menu">
          <Link>Design</Link>
        </li>
      </ul>
    </div>
  );
}

export { Menu };
