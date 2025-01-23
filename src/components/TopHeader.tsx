import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

function TopHeader() {
  return (
    <div className="bg-black h-[48px] flex items-center justify-center">
      <div className="container flex items-center">
        <div className="flex-1 flex justify-center">
          <h1 className="text-white font-poppins font-regular text-[14px] leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <NavLink to={"/"} className="underline font-semibold ml-[13px]">
              Shop Now
            </NavLink>
          </h1>
        </div>

        <div className="ml-auto flex item-center justify-center">
          <div>
            <h1 className="text-white ">English</h1>
          </div>
          <div className="m-auto ml-[11px]">
            <ReactSVG src="./icons/Top-Header-dropdown.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
