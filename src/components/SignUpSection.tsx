
import beatsnoop from "../assets/images/dl.beatsnoop 1.png";
import { NavLink } from "react-router-dom";
export const SignUpSection = () => {
  return (
    <div className="flex justify-center mt-[60px]">
      <div>
        {" "}
        <img src={beatsnoop} alt="" />
      </div>
      <div className="pl-[129px] pt-[125px]">
        <h1 className="text-black font-inter font-medium text-[36px]">
          Create an account
        </h1>
        <h4 className="font-poppins mt-[24px]">Enter your details below</h4>
        <form action="" className="mt-[48px]">
          <div className="flex flex-col gap-[40px]">
            <input
              type="text"
              className="bg-trasnparent border-b border-gray-700 w-[370px] h-[32px] pb-2 focus:outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="bg-trasnparent border-b border-gray-700 w-[370px] h-[32px] pb-2 focus:outline-none"
              placeholder="Email or Phone Number"
            />
            <input
              type="text"
              className="bg-trasnparent border-b border-gray-700 w-[370px] h-[32px] pb-2 focus:outline-none"
              placeholder="Password"
            />
          </div>
        </form>
        <div className="flex flex-col gap-[16px] justify-center items-center mt-[40px] ">
          <button className="w-full h-[56px] bg-DB4444 rounded-[4px] text-white font-poppins font-medium">
            Create Account
          </button>
          <button className="w-full h-[56px] border rounded-[4px] text-white font-poppins font-medium flex justify-center items-center gap-[16px]">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_909_3339)">
                <path
                  d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                  fill="#34A853"
                />
                <path
                  d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_909_3339">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-black">Sign up with Google</h1>
          </button>
          <h1 className="text-black font-poppins">
            Already have account?{" "}
            <span className=" ml-[16px] underline font-poppins font-medium underline-offset-4">
              <NavLink to={"/signin"}>Log in</NavLink>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
