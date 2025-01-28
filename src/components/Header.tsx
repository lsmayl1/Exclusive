import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { IoMenu } from "react-icons/io5";
import { Header_user } from "./icons/Header_user";
import { useState } from "react";

import { Menu } from "./Menu";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  const handledropdown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <div className="border-b pb-4 pt-10 flex flex-col gap-[40px]">
        <div className="container flex items-center justify-between h-[38px]">
          <NavLink
            to="/"
            className="font-inter font-bold text-[24px] max-xs:text-[16px]"
          >
            Exclusive
          </NavLink>

          <div className="flex items-center ">
            <ul className="flex font-poppins gap-[48px] font-regular text-[16px] max-lg:text-[14px] max-lg:gap-[12px] max-md:text-[14px] max-md:gap-4 max-xs:text-[10px] max-sm:gap-2">
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
            <div className="flex items-center max-md:hidden">
              <div className="flex items-center relative">
                <input
                  placeholder="What are you looking for?"
                  type="text"
                  className="w-[243px] max-lg:w-[200px] h-[38px] pl-2 py-[10px] bg-F5F5F5 rounded"
                />
                <button className="items-center flex">
                  <ReactSVG
                    src="/icons/Search.svg"
                    className="absolute right-0 px-3"
                  />
                </button>
              </div>
              <div className="flex  items-center px-3 gap-3">
                <div className="">
                  <NavLink to={"/wishlist"}>
                    <ReactSVG src="/icons/WatchList.svg" />
                  </NavLink>
                </div>

                <div className="">
                  <NavLink to={"/cart"}>
                    <ReactSVG src="/icons/Cart.svg" />
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="flex items-center  gap-[16px] max-lg:gap-[5px]">
              <div className="group relative items-center flex">
                <button>
                  <Header_user prop={"max-sm:w-8"} />
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

        <div className="hidden max-md:block container ">
          <div className="flex  gap-5">
            <div className=" flex ">
              <IoMenu className="w-9 h-9 " onClick={handledropdown} />
              {dropDown && (
                <div className="absolute z-30 w-full top-0 left-0 mt-[200px] px-10 pb-10  bg-white">
                  <Menu />
                </div>
              )}
            </div>
            <div className="flex items-center relative w-full">
              <input
                placeholder="What are you looking for?"
                type="text"
                className=" w-full h-[38px] pl-5  bg-F5F5F5 rounded focus:outline-none placeholder:text-[14px]     max-sm:placeholder:text-[10px] max-sm:pl-3 text-[14px] "
              />
              <button className="items-center flex">
                <ReactSVG
                  src="/icons/Search.svg"
                  className="absolute right-0 pr-3 max-xs:pr-1"
                />
              </button>
            </div>
            <div className="flex  items-center  gap-3">
              <NavLink to={"/wishlist"}>
                <ReactSVG src="/icons/WatchList.svg" />
              </NavLink>

              <NavLink to={"/cart"}>
                <ReactSVG src="/icons/Cart.svg" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
