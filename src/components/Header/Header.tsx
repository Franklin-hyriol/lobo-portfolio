import { MdOutlineFileDownload } from "react-icons/md";

function Header() {
  return (
    <header className="shadow-sm sticky top-0 z-50 bg-base-100 ">
      <div className="container">
        <nav className="navbar bg-base-100 px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="#competences">Compétences</a>
                </li>
                <li>
                  <a href="#experiences">Expériences</a>
                </li>
                <li>
                  <a href="#formation">Formation</a>
                </li>

                <li>
                  <a href="#projets">Projets</a>
                </li>
              </ul>
            </div>
            <a href="#greeting" className="text-3xl font-bold">
              R.<span className="text-secondary">Lobo</span>
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base gap-2 font-semibold">
              <li>
                <a href="#competences">Compétences</a>
              </li>
              <li>
                <a href="#experiences">Expériences</a>
              </li>
              <li>
                <a href="#formation">Formation</a>
              </li>

              <li>
                <a href="#projets">Projets</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <a className="btn btn-primary" href="/images/Lobo Rakotomanana curriculum vitae.jpeg" download>
              Télécharger CV
              <MdOutlineFileDownload className="font-bold text-xl" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
