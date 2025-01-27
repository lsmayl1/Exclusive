import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { RatingStar } from "./RatingStar";
import { ReactSVG } from "react-svg";
import { CartHeart, CartView } from "./icons/CartsElments";

interface product {
  id: number;
  name: string;
  rating: {
    stars: number;
    reviews: number;
  };
  price: number;
  discount: number;
  stock: number;
  colors: [
    {
      name: string;
      hex: string;
    }
  ];
  sizes: string[];
  images: string;
  new: boolean;
}
interface ProductColor {
  name: string;
  hex: string;
}
interface props {
  start: number;
  stop: number;
  flexWrap: any;
}
export const ApiCart: React.FC<props> = ({ start, stop, flexWrap }) => {
  const [products, setProducts] = useState<product[]>([]);

  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: ProductColor | null;
  }>({});

  const handleColorSelect = (productId: number, color: ProductColor) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  const stars = [];
  for (let i = 0; i <= 4; i++) {
    stars.push(i <= 5 - 1 ? "filled" : "empty");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products.json");
        setProducts(response.data.product);
        const initialColors: { [key: number]: ProductColor } = {};
        response.data.product.forEach((product: product) => {
          if (product.colors.length > 0) {
            initialColors[product.id] = product.colors[0];
          }
        });
        setSelectedColors(initialColors);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="container mt-[80px] max-md:mt-[40px] gap-[30px] max-lg:gap-[15px] flex max-xs:mt-[40px] max-xs:gap-2"
      style={{
        flexWrap: flexWrap ? flexWrap : "",
        justifyContent: flexWrap == "wrap" ? "center" : "start",
      }}
    >
      {products.slice(start, stop).map((product) => (
        <div className="flex flex-col  gap-4" key={product.id} style={{}}>
          <div className="bg-F5F5F5 w-[270px] max-lg:w-[230px] max-sm:w-[200px] max-sm:h-[220px] h-[250px] justify-center flex items-center relative group max-xs:w-[140px] max-xs:h-[170px] ">
            <div className="absolute top-[7%] right-[70%]">
              {product.new ? (
                <h4 className=" bg-00FF66 px-[12px] py-[4px] rounded-[4px] text-center text-white max-xs:text-[12px] max-xs:px-1 max-xs:py-0.5  ">
                  New
                </h4>
              ) : (
                product.discount && (
                  <h4 className=" bg-DB4444 px-[12px] py-[4px] rounded-[4px] text-center  text-white max-xs:text-[12px] max-xs:px-1 max-xs:py-0.5 ">
                    -{product.discount}%
                  </h4>
                )
              )}
            </div>

            {/* View and WishList Buttons*/}
            <div className="absolute top-[5%] right-[5%]">
              <div className="gap-[6px] flex flex-col max-xs:gap-1">
                <div className=" bg-white w-[34px] h-[34px] rounded-full items-center flex flex-col justify-center max-xs:w-[25px] max-xs:h-[25px]">
                  <button>
                    <CartHeart prop={"max-xs:w-4"} />
                  </button>
                </div>
                <div className=" bg-white w-[34px] h-[34px] rounded-full items-center flex flex-col justify-center max-xs:w-[25px] max-xs:h-[25px]">
                  <button>
                    <CartView prop={"max-xs:w-5"} />
                  </button>
                </div>
              </div>
            </div>
            {/* Hover Add To Cart */}

            <div className="absolute bottom-0 w-full hidden group-hover:block ">
              <div className="flex justify-center w-full py-2 bg-black text-center items-center  rounded-b-[4px] max-xs:hidden">
                <NavLink
                  to={"/cart"}
                  className=" text-white font-poppins font-medium"
                >
                  {" "}
                  Add to Cart
                </NavLink>
              </div>
            </div>

            {/* Product Image*/}
            <div className="flex items-center justify-center">
              <NavLink to={`/product/${product.id}`} target="_blank">
                <img
                  src={product.images}
                  alt=""
                  className="max-sm:w-[150px] max-xs:w-[100px]"
                />
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full flex flex-col gap-0.5">
              <h1 className="text-black font-poppins font-medium max-sm:text-[14px] max-xs:text-[10px]">
                {product.name}
              </h1>
              <div className="flex gap-[12px] max-xs:text-[14px]">
                <h1 className="text-DB4444 font-poppins font-medium ">
                  ${product.price - (product.price * product.discount) / 100}
                </h1>
                {product.discount && (
                  <h1 className="text-gray-500 font-poppins font-medium line-through text-center">
                    ${product.price}
                  </h1>
                )}
              </div>
              <div className="flex items-center gap-2 max-xs:gap-0">
                <RatingStar starcount={product.rating.stars} />
                <h4 className="font-poppins font-semibold text-[14px] text-gray-500 max-sm:text-[12px] pt-1">
                  ({product.rating.reviews})
                </h4>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    className="flex justify-center items-center"
                    key={color.hex}
                    style={{
                      backgroundColor:
                        selectedColors[product.id]?.hex === color.hex
                          ? `white`
                          : `${color.hex}`,
                      width: "20px",
                      height: "20px",
                      border:
                        selectedColors[product.id]?.hex === color.hex
                          ? "1px solid black"
                          : "",
                      borderRadius: "50%",
                    }}
                    onClick={() => handleColorSelect(product.id, color)}
                  >
                    {selectedColors[product.id]?.hex === color.hex ? (
                      <div
                        style={{ backgroundColor: color.hex }}
                        className="w-[12px] h-[12px] rounded-full"
                      ></div>
                    ) : (
                      ""
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
