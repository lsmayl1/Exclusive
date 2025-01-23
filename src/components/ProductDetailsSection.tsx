import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";

import { useParams } from "react-router-dom";
import axios from "axios";
import { RatingStar } from "./RatingStar";

interface Product {
  id: number;
  images: string[];
  name: string;
  rating: {
    stars: number;
    reviews: number;
  };
  price: number;
  colors: [
    {
      name: string;
      hex: string;
    }
  ];
  sizes: string[];
}
interface ProductColor {
  name: string;
  hex: string;
}
export const ProductDetailsSection = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const [product, setProduct] = useState<Product>();

  const [quantity, setQuantity] = useState(1);
  const breadcrump = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
  ];
  const stars = [];
  for (let i = 0; i <= 4; i++) {
    stars.push(i <= 4 - 1 ? "filled" : "empty");
  }
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: ProductColor | null;
  }>({});

  const handleColorSelect = (productId: number, color: ProductColor) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/products.json");
        const product = response.data.product.find(
          (productid: any) => productid.id === numericId
        );
        if (product) {
          setProduct(product);
        } else {
          console.log("Product not Founded");
        }
      } catch {}
    };
    fetchProduct();
  }, []);

  return (
    <div className="container">
      <Breadcrumb paths={breadcrump} />
      <div className="flex mt-[80px] gap-[70px]">
        <div className="flex gap-[30px] flex-[60%]">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className=" w-full h-[138px] flex justify-center items-center bg-F5F5F5 rounded"
              >
                <img src={product?.images[0]} className="p-6" alt="" />
              </div>
            ))}
          </div>
          <div className="flex bg-F5F5F5 rounded justify-center items-center w-full">
            <img src={product?.images[0]} className=" z-40" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-[20%]">
          <h4>{product?.name}</h4>
          <div className="flex flex-col ">
            <div className="flex  ">
              <RatingStar starcount={product?.rating?.stars} />

              <div className="mb-2.5 flex items-center text-center justify-center">
                <h4>({product?.id} Reviews) | In Stock</h4>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-inter font-semibold text-[24px]">
                ${product?.price}
              </h4>
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <div className="border"></div>
            </div>
          </div>

          {product?.colors.length ? (
            <div className="flex gap-2 items-center">
              <h4>Colours:</h4>
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
          ) : (
            ""
          )}

          {product?.sizes?.length ? (
            <div className="flex items-center gap-6 ">
              <h4>Size:</h4>
              {product?.sizes.map((size, index) => (
                <div key={index} className="flex items-center gap-4">
                  <button className="w-8 h-8 border rounded flex justify-center items-center font-poppins font-medium text-[14px]">
                    {size}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 0 ? prev - 1 : prev))
                }
                className="w-[40px] h-[44px] border border-black rounded-l-lg flex justify-center items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12H4"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <input
                value={quantity}
                className=" w-[80px] border h-[44px] border-black px-8 "
                type="text"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-[40px] h-[44px] border rounded-r-lg border-black flex justify-center items-center "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20V12M12 12V4M12 12H20M12 12H4"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            <button className="w-[165px] h-[44px] rounded bg-DB4444 text-white">
              Buy Now
            </button>
            <button className="border border-black w-[40px] rounded  flex h-[40px] justify-center items-center">
              <svg
                width="20"
                height="18"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-[180px] border rounded border-black">
            <div className="py-6 px-4 flex  items-center gap-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_261_4843)">
                  <path
                    d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 11.8182H11.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.81836 15.4545H8.48503"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 19.0909H11.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4843">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h4 className="font-poppins font-medium">Free Delivery</h4>
                <h5 className="font-poppins font-medium text-[12px]">
                  Enter your postal code for Delivery Availability
                </h5>
              </div>
            </div>
            <div className="border-[0.5px] border-gray-700"></div>
            <div className="py-6 px-4 flex  items-center gap-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_261_4865)">
                  <path
                    d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_261_4865">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <h4 className="font-poppins font-medium">Return Delivery</h4>
                <h5 className="font-poppins font-medium text-[12px]">
                  Free 30 Days Delivery Returns. Details
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
