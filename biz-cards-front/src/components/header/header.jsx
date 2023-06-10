import { BsLightDarkMode } from "../common/bsLightDarkMode";
import { HeaderUser } from "./headerUser";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="shadow-sm border-bottom position-fixed w-100 d-flex justify-content-between px-1 px-md-3">
      <Navbar />
      <div className="d-flex flex-row align-items-center">
        <HeaderUser />
        <BsLightDarkMode />
      </div>
    </header>
  );
}
