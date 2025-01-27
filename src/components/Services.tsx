import { ReactSVG } from "react-svg";

export const Services = () => {
  return (
    <div className="container flex mt-[140px] justify-center gap-[95px] mb-[140px]  max-lg:gap-[60px] max-xs:flex-col">
      <div className="flex flex-col justify-center items-center text-center gap-[24px] ">
        <div className="bg-2F2E30 bg-opacity-[30%] h-[80px] w-[80px] rounded-full flex justify-center items-center">
          <div className="bg-black h-[58px] w-[58px] rounded-full flex justify-center items-center">
            <ReactSVG
              src={"/icons/icon-delivery.svg"}
              className="stroke-2 stroke-linecap-round stroke-linejoin-round"
            />
          </div>
        </div>
        <div>
          <h1 className="text-black font-poppins font-semibold text-[20px] max-lg:text-[14px] max-sm:text-[12px]">
            FREE AND FAST DELIVERY
          </h1>
          <h3 className="font-poppins font-normal text-[14px] max-sm:text-[10px]">
            Free delivery for all orders over $140
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-[24px] ">
        <div className="bg-2F2E30 bg-opacity-[30%] h-[80px] w-[80px] rounded-full flex justify-center items-center">
          <div className="bg-black h-[58px] w-[58px] rounded-full flex justify-center items-center">
            <ReactSVG
              src={"/icons/CustomerService.svg"}
              className="stroke-2 stroke-linecap-round stroke-linejoin-round"
            />
          </div>
        </div>
        <div>
          <h1 className="text-black font-poppins font-semibold text-[20px] max-lg:text-[14px] max-sm:text-[12px]">
            24/7 CUSTOMER SERVICE
          </h1>
          <h3 className="font-poppins font-normal text-[14px] max-sm:text-[10px]">
            Friendly 24/7 customer support
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-[24px] ">
        <div className="bg-2F2E30 bg-opacity-[30%] h-[80px] w-[80px] rounded-full flex justify-center items-center">
          <div className="bg-black h-[58px] w-[58px] rounded-full flex justify-center items-center">
            <ReactSVG src={"/icons/Icon-secure.svg"} />
          </div>
        </div>
        <div>
          <h1 className="text-black font-poppins font-semibold text-[20px] max-lg:text-[14px] max-sm:text-[12px]">
            MONEY BACK GUARANTEE
          </h1>
          <h3 className="font-poppins font-normal text-[14px] max-sm:text-[10px]  ">
            We reurn money within 30 days
          </h3>
        </div>
      </div>
    </div>
  );
};
