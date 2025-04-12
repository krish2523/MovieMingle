import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovielayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <MovieNavbar />
        <Component {...props} />

        <footer className="bg-gray-900 text-white mt-10 px-6 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Licensing / Info */}
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Licensing</h4>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} MovieMingle. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Made with ❤️ for movie lovers
              </p>
            </div>

            {/* Contact Us Centered */}
            <div className="w-full md:w-auto text-center">
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p className="text-sm text-gray-400">
                Email: contact@moviemingle.com
              </p>
              <p className="text-sm text-gray-400">Phone: +91-12345-67890</p>
              <p className="text-sm text-gray-400">Kolkata, India</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default MovielayoutHoc;
