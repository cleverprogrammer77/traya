import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="h-20 bg-neutral-700">
      <div className="h-full px-4 mx-auto overflow-hidden sm:px-8 lg:px-12 relative">
        <div className="h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-5xl flex items-center text-white justify-center cursor-pointer"
          >
            Traya.
          </Link>
          <div className="h-20 flex items-center justify-between gap-8">
            <Link
              to="/login"
              className="text-2xl tracking-wide text-gray-50 cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="text-2xl tracking-wide text-gray-50 cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
