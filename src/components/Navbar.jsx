import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setshow] = useState(false);
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <img src={logo} width={75} alt={logo} />

          {/**iconu md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setshow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row mt-8 md:mt-0`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((i) => (
              <li
                key={i.title}
                className="text-gray-700 font-medium flex justify-center"
              >
                <NavLink
                  to={i.path}
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white  ${
                    location.pathname === i.path ? "underline scale-150" : ""
                  } `}
                >
                  {i.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              onClick={logout}
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
