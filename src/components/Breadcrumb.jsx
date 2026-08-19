import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  // Home page par breadcrumb hide kar do
  if (pathnames.length === 0) return null;

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-5">
        <nav className="flex items-center flex-wrap text-sm">

          <Link
            to="/"
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <Home size={16} />
            Home
          </Link>

          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");

            const isLast = index === pathnames.length - 1;

            const label = value
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

            return (
              <React.Fragment key={to}>
                <ChevronRight
                  size={16}
                  className="mx-2 text-gray-400"
                />

                {isLast ? (
                  <span className="font-semibold text-gray-800">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    {label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;