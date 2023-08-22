import { Link } from "react-router-dom";
import { Page02 } from "../pages/Page02";
import { Page01 } from "../pages/Page01";
import { Page03 } from "../pages/Page03";
function Menu() {
  return (
    <div>
      <ul className="menu">
        <li className="item-menu">
          <Link to={"/"}>For you</Link>
        </li>
        <li className="item-menu">
          <Link to="/following" >following</Link>
        </li>
        <li className="item-menu">
          <Link to= "/javaScript" >JavaScript</Link>
        </li>
        <li className="item-menu">
          <Link to= "/desing" >Design</Link> 
        </li>
        <li className="item-menu">
          <Link to= "/extra info" >Extra Info</Link> 
        </li>
      </ul>
    </div>
  );
}

export { Menu };
