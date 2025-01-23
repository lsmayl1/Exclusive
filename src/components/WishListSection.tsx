import bag from "../assets/images/GucciBag.png";
interface Card {
  title: string;
  price: number;
  pastprice: number;
  discount: boolean;
}
export const WishListSection = () => {
  const cardDetails: Card[] = [
    {
      title: "Gucci duffle bag",
      price: 960,
      pastprice: 1160,
      discount: true,
    },
    {
      title: "Gucci duffle bag",
      price: 500,
      pastprice: 1160,
      discount: false,
    },
    {
      title: "Gucci duffle bag",
      price: 500,
      pastprice: 1160,
      discount: false,
    },
    {
      title: "Gucci duffle bag",
      price: 500,
      pastprice: 1160,
      discount: false,
    },
  ];
  return (
    <div className="container mt-[80px]">
      <div className="flex justify-between">
        <h1 className="text-black text-[20px] font-poopins font-normal">
          Wishlist (4)
        </h1>
        <button className="w-[223px] h-[56px] border rounded-[4px] flex justify-center items-center">
          <h1 className="text-black font-poppins font-medium">
            Move All To Bag
          </h1>
        </button>
      </div>
      <div className="mt-[60px] flex gap-[30px] ">
        {cardDetails.slice(0, 4).map((card, index) => {
          return (
            <div key={index}>
              <div className="Card">
                <div className="bg-F5F5F5 w-[270px] h-[250px] justify-center flex items-center relative group">
                  {card.discount ? (
                    <div className="absolute clear-none bg-DB4444 px-[12px] py-[4px] rounded-[4px] top-[7%] right-[70%] text-white ">
                      -40%
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="absolute top-[5%] right-[5%]">
                    <div className="gap-[6px] flex flex-col">
                      <div className=" bg-white w-[34px] h-[34px] rounded-full items-center flex flex-col justify-center">
                        <button>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
                              stroke="black"
                              stroke-width="1.56"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full  group-hover:block ">
                    <div className="flex justify-center w-full bg-black h-[41px] text-center items-center  rounded-b-[4px] ">
                      <a href="">
                        <h1 className=" text-white font-poppins font-medium">
                          Add to Cart
                        </h1>
                      </a>
                    </div>
                  </div>
                  <img src={bag} alt="" />
                </div>
                <div>
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="text-black font-poppins font-medium  mt-[5px]">
                      {card.title}
                    </h1>
                    <div className="flex gap-[12px]">
                      <h1 className="text-DB4444 font-poppins font-medium">
                        ${card.price}
                      </h1>
                      <h1 className="text-gray-500 font-poppins font-medium line-through text-center">
                        ${card.pastprice}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[80px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-[16px] ">
            <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
            <h1 className="text-black font-poppins font-normal text-[20px]">
              Just For You
            </h1>
          </div>
          <div>
            <button className="w-[150px] h-[56px] border rounded-[4px] font-poppins font-medium">
              See All
            </button>
          </div>
        </div>
        <div className="mt-[60px] flex gap-[30px] ">
          {cardDetails.map((card, index) => {
            return (
              <div key={index}>
                <div className="Card">
                  <div className="bg-F5F5F5 w-[270px] h-[250px] justify-center flex items-center relative group">
                    {card.discount ? (
                      <div className="absolute clear-none bg-DB4444 px-[12px] py-[4px] rounded-[4px] top-[7%] right-[70%] text-white ">
                        -40%
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="absolute top-[5%] right-[5%]">
                      <div className="gap-[6px] flex flex-col">
                        <div className=" bg-white w-[34px] h-[34px] rounded-full items-center flex flex-col justify-center">
                          <button>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
                                stroke="black"
                                stroke-width="1.56"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full  group-hover:block ">
                      <div className="flex justify-center w-full bg-black h-[41px] text-center items-center  rounded-b-[4px] ">
                        <a href="">
                          <h1 className=" text-white font-poppins font-medium">
                            Add to Cart
                          </h1>
                        </a>
                      </div>
                    </div>
                    <img src={bag} alt="" />
                  </div>
                  <div>
                    <div className="flex flex-col gap-[8px]">
                      <h1 className="text-black font-poppins font-medium  mt-[5px]">
                        {card.title}
                      </h1>
                      <div className="flex gap-[12px]">
                        <h1 className="text-DB4444 font-poppins font-medium">
                          ${card.price}
                        </h1>
                        <h1 className="text-gray-500 font-poppins font-medium line-through text-center">
                          ${card.pastprice}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
