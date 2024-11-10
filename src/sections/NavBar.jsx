import Logo from "../components/logo";
import Button  from "../components/Button";
export default function NavBar() {
    return <div className="nav-bar">
        <Logo/>
        <div className="nav-bar-sections">
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Contact Us</h4>
        </div>
        <Button buttonContent="Login" />
    </div>
}