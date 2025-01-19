import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";

interface InputValues {
  name: string;
  email: string;
  phone: string;
}

interface FocusedState {
  name: boolean;
  email: boolean;
  phone: boolean;
}

export const ContactSection = () => {
  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];
  const [inputValues, setInputValues] = useState<InputValues>({
    name: "",
    email: "",
    phone: "",
  });

  // Input'ların focus durumlarını tutan state
  const [focused, setFocused] = useState<FocusedState>({
    name: false,
    email: false,
    phone: false,
  });

  // Input değeri değiştiğinde state güncellenmesi
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Input focus ve blur eventleri
  const handleFocus = (inputName: keyof FocusedState) => {
    setFocused((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  };

  const handleBlur = (inputName: keyof FocusedState) => {
    setFocused((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  };

  return (
    <div className="container">
      <Breadcrumb paths={breadcrumb} />
      <div className="flex mt-[80px] gap-[30px]">
        <div className="flex flex-col shadow-lg w-[340px] ">
          <div className="p-[40px] flex flex-col gap-[24px]">
            <div className="flex gap-[16px] items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h4 className="font-poppins font-medium text-[16px]">
                Call To Us
              </h4>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h4 className="font-poppins font-normal text-[14px]">
                We are available 24/7, 7 days a week.
              </h4>
              <h4 className="font-poppins font-normal text-[14px]">
                Phone: +8801611112222
              </h4>
            </div>
          </div>
          <div className="border mx-9"></div>
          <div className="p-[40px] flex flex-col gap-[24px]">
            <div className="flex gap-[16px] items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h4 className="font-poppins font-medium text-[16px]">
                Write To US
              </h4>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h4 className="font-poppins font-normal text-[14px]">
                Fill out our form and we will contact you within 24 hours.
              </h4>
              <h4 className="font-poppins font-normal text-[14px]">
                Emails: customer@exclusive.com
              </h4>
              <h4>Emails: support@exclusive.com</h4>
            </div>
          </div>
        </div>
        <div className="flex w-full shadow-xl justify-center">
          <div className="p-[40px] flex flex-col items-center gap-[32px]">
            <div className="flex gap-[16px]">
              <div className="relative w-[235px] mb-4 h-[50px]">
                <h4
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 ${
                    focused.name || inputValues.name
                      ? "opacity-0"
                      : "opacity-100"
                  } transition-opacity duration-200`}
                >
                  Your Name<span className="text-red-500">*</span>
                </h4>
                <input
                  type="text"
                  className="w-[235px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                  name="name"
                  value={inputValues.name}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  onChange={handleInputChange}
                  placeholder=" "
                />
              </div>

              <div className="relative w-[235px] mb-4 h-[50px]">
                <h4
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 ${
                    focused.email || inputValues.email
                      ? "opacity-0"
                      : "opacity-100"
                  } transition-opacity duration-200`}
                >
                  Your Email<span className="text-red-500">*</span>
                </h4>
                <input
                  type="email"
                  className="w-[235px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                  name="email"
                  value={inputValues.email}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  onChange={handleInputChange}
                  placeholder=" "
                />
              </div>

              <div className="relative w-[235px] mb-4 h-[50px]">
                <h4
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 ${
                    focused.phone || inputValues.phone
                      ? "opacity-0"
                      : "opacity-100"
                  } transition-opacity duration-200`}
                >
                  Your Phone<span className="text-red-500">*</span>
                </h4>
                <input
                  type="text"
                  className="w-[235px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                  name="phone"
                  value={inputValues.phone}
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                  onChange={handleInputChange}
                  placeholder=" "
                />
              </div>
            </div>
            <div className="w-full">
              <textarea
                className="w-full h-[207px] p-4 border bg-F5F5F5 rounded-[4px] focus:outline-none   resize-none"
                placeholder="Your Massage"
              ></textarea>
            </div>
            <div className="flex w-full  justify-end mt-[24px] pb-[40px]">
              <button className="bg-DB4444 w-[214px] h-[56px] rounded-[4px] text-white font-poppins font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
