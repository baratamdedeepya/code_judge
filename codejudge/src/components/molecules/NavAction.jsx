
import Button from "../atoms/Button";
import "./NavAction.css";
const NavAction = () => {
  return (
    <div className="nav-actions">
      <Button variant="secondary">Login</Button>
      {/* <Button variant="primary">Sign up</Button> */}
    </div>
  );
};

export default NavAction;