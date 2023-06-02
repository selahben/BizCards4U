import { useAuth } from "../context/auth.context";
import { BsLightDarkMode } from "./common/bsLightDarkMode";
import { HeaderUser } from "./common/headerUser";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="shadow-sm border-bottom position-fixed w-100 d-flex justify-content-between px-3">
      <Navbar />
      <div className="d-flex flex-row align-items-center">
        <HeaderUser />
        <BsLightDarkMode />
      </div>
    </header>
  );
}
