import axios from "axios";
import { useEffect, useState } from "react";
import { MenuArrow } from "./icons/MenuArrow";
type Category = {
  id: number;
  name: string;
  subcategories?: Category[];
};
export const Menu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setcurrentCategory] = useState<Category | undefined>(
    undefined
  );
  const [breadcrumbs, setBreadcrumbs] = useState<Category[]>([]);

  const handleCategory = (category: Category) => {
    setBreadcrumbs((prevBreadcrumbs) => [...prevBreadcrumbs, category]);
    setcurrentCategory(category);
  };
  const handleGoBack = (category: Category) => {
    setcurrentCategory(category);
    setBreadcrumbs((prevBreadcrumbs) =>
      prevBreadcrumbs.slice(0, prevBreadcrumbs.indexOf(category) + 1)
    );
  };
  const backToMain = () => {
    setcurrentCategory(undefined);
    setBreadcrumbs([]);
  };

  useEffect(() => {
    const handleCategories = async () => {
      try {
        const response = await axios.get("/products.json");
        setCategories(response.data.categories);
      } catch {}
    };
    handleCategories();
  }, []);
  return (
    <div className="container pt-10">
      {currentCategory ? (
        <div className="space-y-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index} className="text-[20px] text-gray-500">
              <button
                className=""
                onClick={() => {
                  if (index === 0) {
                    backToMain();
                  } else {
                    handleGoBack(breadcrumb);
                  }
                }}
              >
                {breadcrumb.name}
              </button>
              <span>{index < breadcrumbs.length - 1 && " > "}</span>
            </span>
          ))}
          <ul className="flex flex-col gap-4">
            {currentCategory.subcategories?.map((subcategory, index) => (
              <li key={index} className="flex justify-between border-b">
                <h4 className="text-[20px]"> {subcategory.name}</h4>
                {subcategory.subcategories ? (
                  <button onClick={() => handleCategory(subcategory)}>
                    <MenuArrow props="w-1.5" />
                  </button>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between border-b-[1px]">
              <h1 className="text-black font-poppins font-medium text-[16px]">
                {category.name}
              </h1>
              <button onClick={() => handleCategory(category)}>
                <MenuArrow props="w-1.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
