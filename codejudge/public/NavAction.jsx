import Toggle from "../atoms/Toggle";
import Button from "../atoms/Button";

const NavAction = () => {
  return (
    <div className="nav-actions">
      <Toggle />
      <Button >Login</Button>
      <Button>Get Started</Button>
    </div>
  );
};

export default NavAction;