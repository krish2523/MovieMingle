import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultlayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div className="bg-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Component {...props} />
        </main>

        {/* Footer */}
        <footer className="bg-gray-700 text-white px-4 md:px-12 py-6">
          <div className="flex flex-col gap-6">
            {/* Contact Us - only heading centered */}
            <div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Contact Us
              </h3>
              <p>Email: support@moviemingle.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: 123, React Street, JavaScript City, WebLand 400001</p>
            </div>

            {/* Licensing Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Licensing</h3>
              <p>
                This project is for educational purposes only. Movie data is
                fetched from the TMDB API. All images and branding belong to
                their respective copyright holders.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default DefaultlayoutHoc;
