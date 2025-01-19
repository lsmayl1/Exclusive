import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  paths: { name: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <div className="flex">
      <ol className="flex space-x-2 text-sm font-medium mt-[80px]">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index !== paths.length - 1 ? (
              <>
                <Link
                  to={path.href}
                  className="text-gray-400 font-poppins text-[14px]"
                >
                  {path.name}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </>
            ) : (
              <span className="text-black font-poppins text-[14px] ">{path.name}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
