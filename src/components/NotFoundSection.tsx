import Breadcrumb from "./Breadcrumb";
import { NavLink } from "react-router-dom";

export const NotFoundSection = () => {
  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "404", href: "/404" },
  ];
  return (
    <div className="container">
      <div>
        <Breadcrumb paths={breadcrumb} />
      </div>
      <div className="flex flex-col flex-justify-center items-center mt-[140px]">
        <div className="flex flex-col gap-[40px	] flex-justify-center items-center">
          <h1 className="text-black font-inter font-medium text-[110px]">
            404 Not Found
          </h1>
          <h4 className="font-poppins">
            Your visited page not found. You may go home page.
          </h4>
          <div className="flex w-full  justify-center mt-[80px] pb-[40px]">
            <NavLink to={"/"}>
              <button className="bg-DB4444 w-[254px] h-[56px] rounded-[4px] text-white font-poppins font-medium">
                Back to home page
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
