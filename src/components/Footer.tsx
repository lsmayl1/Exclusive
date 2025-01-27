import qrcode from "../assets/images/Qrcode 1.png";
import playstore from "../assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import appstore from "../assets/images/download-appstore.png";
import { ReactSVG } from "react-svg";
export const Footer = () => {
  return (
    <div className="w-full bg-black  mt-[140px] flex justify-between flex-col ">
      <div className="px-[135px] pt-[80px]  flex gap-[87px]  flex-wrap max-lg:gap-[40px] max-xs:gap-5">
        <div className="flex flex-col gap-[16px] max-xs:gap-2">
          <h1 className="font-inter font-bold text-[24px] max-xs:text-[20px]">Exclusive</h1>
          <h2 className="font-poppins font-medium text-[20px] max-xs:text-[16px]  text-white">
            Subscribe
          </h2>
          <h3 className="font-poppins font-normal text-[16px] max-xs:text-[14px] text-white">
            Get 10% off your first order
          </h3>
          <div className="flex relative items-center">
            <input
              className=" p-4 w-[217px] placeholder:text-[16px] h-[48px] b bg-transparent border border-white rounded-[4px] max-xs:w-[150px] max-xs:placeholder:text-[12px]"
              placeholder="Enter your email"
            />
            <div className="absolute right-[5%]">
              <ReactSVG src={"/icons/SendIcon.svg"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] max-xs:gap-2">
          <h1 className="font-inter font-bold text-[24px] max-xs:text-[20px]">Support</h1>
          <h2 className="font-poppins font-normal text-[16px] max-xs:text-[14px]  text-white">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </h2> 
          <h3 className="font-poppins font-normal text-[16px] max-xs:text-[12px] text-white">
            exclusive@gmail.com
          </h3>
          <h3 className="font-poppins font-normal text-[16px] max-xs:text-[12px] text-white">
            +88015-88888-9999
          </h3>
        </div>
        <div className="flex flex-col gap-[16px] max-xs:gap-2 ">
          <h1 className="font-inter font-bold text-[24px] max-xs:text-[20px]">Account</h1>
          <ul className="font-poppins font-normal text-[16px] text-white gap-[16px] flex flex-col whitespace-nowrap">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[16px]  max-xs:gap-2">
          <h1 className="font-inter font-bold text-[24px] whitespace-nowrap max-xs:text-[20px]">
            Quick Link
          </h1>
          <ul className="font-poppins font-normal text-[16px] text-white gap-[16px] flex flex-col">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[16px]  max-xs:gap-2">
          <h1 className="font-inter font-bold text-[24px] max-xs:text-[20px]">Download App</h1>
          <h5 className="text-[12px] font-poppins font-medium text-white">
            Save $3 with App New User Only
          </h5>
          <div className="flex gap-[10px] ">
            <div>
              <img src={qrcode} alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <img src={playstore} alt="" />
              </div>
              <div>
                <img src={appstore} alt="" />
              </div>
            </div>
          </div>
          <ul className="flex gap-[24px] mt-[24px] flex-wrap pb-10">
            <li>
              <ReactSVG src={"/icons/facebook.svg"} />
            </li>
            <li>
              <ReactSVG src={"/icons/twiiter.svg"} />
            </li>
            <li>
              <ReactSVG src={"/icons/icon-instagram.svg"} />
            </li>
            <li>
              <ReactSVG src={"/icons/Icon-Linkedin.svg"} />
            </li>
          </ul>
        </div>
      </div>


      <div className="w-full  border-t border-gray-500 flex justify-center items-center h-[64px] gap-[6px]">
        <ReactSVG src="/icons/icon-copyright.svg" />

        <h1 className="font-poppins ">
          Copyright Rimel 2022. All right reserved
        </h1>
      </div>
    </div>
  );
};
