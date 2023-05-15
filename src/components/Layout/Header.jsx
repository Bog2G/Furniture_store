import "./Header.css";
import Button from "../UI/Button";
import { ReactComponent as CartIconSvg } from "../../assets/cart-fill-1154-svgrepo-com.svg";

export default function Header(props) {
  return (
    <>
      <div className="navbar">
        <div className="store-name">
          <h2> New Home </h2>
        </div>
        <div className="header-buttons">
          <Button text={"Login"} classes="main-btn" />
          <Button text={"User"} classes="main-btn" />
          <Button text={"Cart"} classes="main-btn btn-icon">
            <CartIconSvg className="icon-svg" />
            <span className="item-track"> 5 </span>
          </Button>
        </div>
      </div>
    </>
  );
}
