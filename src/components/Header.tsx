import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

function Header() {
  return (
    <>
      <div className="h-[100px] border-b items-center flex">
        <div className="container flex items-center justify-between h-[38px]">
          <NavLink to="/" className="font-inter font-bold text-[24px]">
            Exclusive
          </NavLink>

          <div className="navlinks ">
            <ul className="flex font-poppins gap-[48px] font-regular text-[16px] max-lg:text-[14px] max-lg:gap-[12px]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` hover:text-gray-900 ${
                      isActive ? "border-b border-black" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    ` hover:text-gray-900 ${
                      isActive ? "border-b border-black" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    ` hover:text-gray-900 ${
                      isActive ? "border-b border-black" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    ` hover:text-gray-900 ${
                      isActive ? "border-b border-black" : ""
                    }`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>

          <div className=" flex items-center justify-between ">
            <div className="flex items-center  relative">
              <input
                placeholder="What are you looking for?"
                type="text"
                className="w-[243px] max-lg:w-[200px] h-[38px] pl-2 py-[10px] bg-F5F5F5"
              />
              <button>
                <ReactSVG
                  src="/icons/Search.svg"
                  className="absolute right-2 top-3"
                />
              </button>
            </div>

            <div className="flex items-center  gap-[16px] max-lg:gap-[5px]">
              <div className="ml-4">
                <NavLink to={"/wishlist"}>
                  <ReactSVG src="/icons/WatchList.svg" />
                </NavLink>
              </div>

              <div className="">
                <NavLink to={"/cart"}>
                  <ReactSVG src="/icons/Cart.svg" />
                </NavLink>
              </div>
              <div className="group relative">
                <button>
                  <ReactSVG src="/icons/user.svg" />
                </button>
                <div
                  style={{ backdropFilter: "blur(50px)" }}
                  className="absolute hidden group-hover:block right-0 bg-black bg-opacity-[20%] z-10 w-[224px] h-[220px] rounded-[4px] "
                >
                  <ul
                    className="pt-[20px]
                  pl-[20px]  flex flex-col gap-[16px]"
                  >
                    <NavLink
                      to={"/account"}
                      className={"flex items-center gap-[16px] "}
                    >
                      <ReactSVG src="/icons/dropdownUser.svg" />

                      <h1 className="text-[14px] font-poppins">
                        Manage My Account
                      </h1>
                    </NavLink>
                    <NavLink
                      to={"/account"}
                      className={"flex items-center gap-[16px] "}
                    >
                      <ReactSVG src="/icons/dropdownOrder.svg" />

                      <h1 className="text-[14px] font-poppins">My Order</h1>
                    </NavLink>{" "}
                    <NavLink
                      to={"/account"}
                      className={"flex items-center gap-[16px] "}
                    >
                      <ReactSVG src="/icons/dropdownCancel.svg" />

                      <h1 className="text-[14px] font-poppins">
                        My Cancellations
                      </h1>
                    </NavLink>{" "}
                    <NavLink
                      to={"/account"}
                      className={"flex items-center gap-[16px] "}
                    >
                      <ReactSVG src="/icons/Icon-Reviews.svg" />

                      <h1 className="text-[14px] font-poppins">My Reviews</h1>
                    </NavLink>
                    <NavLink
                      to={"/account"}
                      className={"flex items-center gap-[16px] "}
                    >
                      <ReactSVG src="/icons/Icon-logout.svg" />

                      <h1 className="text-[14px] font-poppins">Logout</h1>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
