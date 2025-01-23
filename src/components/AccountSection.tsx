import Breadcrumb from "./Breadcrumb";

const AccountSection = () => {
  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "My Account", href: "/account" },
  ];
  return (
    <div className="container justify-center">
      <div className="flex justify-between">
        <Breadcrumb paths={breadcrumb} />
        <div className="mt-[80px]">
          <h4>
            Welcome! <span className="text-red-700">Ismo</span>
          </h4>
        </div>
      </div>
      <div className="flex mt-[80px] flex-wrap">
        <div className="flex flex-col gap-[24px]">
          <div>
            <h4 className="font-poppins font-medium">Manage My Account</h4>
            <div className="pt-[16px] pl-[34px]">
              <ul className="font-poppins font-normal text-gray-500">
                <li className="hover:text-DB4444">My Profile</li>
                <li className="hover:text-DB4444">Address Book</li>
                <li className="hover:text-DB4444">My Payment Options</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-poppins font-medium">My Orders</h4>
            <div className="pt-[16px] pl-[34px]">
              <ul className="font-poppins font-normal text-gray-500">
                <li className="hover:text-DB4444">My Returns</li>
                <li className="hover:text-DB4444">My Cancellations</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-poppins font-medium">My WishList</h4>
          </div>
        </div>
        <div className="shadow flex flex-col justify-center px-[80px] pt-[40px] ml-[100px]">
          <div className="flex flex-col ">
            <h4 className="font-poppins font-medium text-DB4444">
              Edit Your Profile
            </h4>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex mt-[16px] gap-[50px] ">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="" className="font-poppins font-normal">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-[330px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="" className="font-poppins font-normal">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-[330px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                />
              </div>
            </div>
            <div className="flex mt-[16px] gap-[50px] ">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="" className="font-poppins font-normal">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-[330px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="" className="font-poppins font-normal">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-[330px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px]"
                />
              </div>
            </div>
            <div className="flex mt-[16px] gap-[50px] ">
              <div className="flex flex-col gap-[8px]">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-[16px]"
                >
                  Password Changes
                </label>
                <div className="flex flex-col gap-[16px]">
                  <input
                    type="text"
                    className="w-[710px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px] placeholder:font-poppins placeholder:text-[16px]"
                    placeholder="Current Password"
                  />
                  <input
                    type="text"
                    className="w-[710px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px] placeholder:font-poppins placeholder:text-[16px]"
                    placeholder="New Password"
                  />
                  <input
                    type="text"
                    className="w-[710px] h-[50px] py-[13px] pl-[16px] focus:outline-none bg-F5F5F5 rounded-[4px] placeholder:font-poppins placeholder:text-[16px]"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end mt-[24px] pb-[40px]">
            <button className="pr-[32px] font-poppins font-normal ">Cancel</button>
            <button className="bg-DB4444 w-[214px] h-[56px] rounded-[4px] text-white font-poppins font-medium">Save Changes</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
