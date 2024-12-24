import React from "react";
import { LinkedIn, GitHub, Email, LocationOn, Twitter, Instagram, Facebook } from "@mui/icons-material";

function Contact() {
  return (
    <section id="contact" className="contact bg-gray-100 py-10">
      <div className="container mx-auto px-4 max-w-screen-lg">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
          <p className="text-lg text-gray-600 mt-2">Contact Me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Box */}
          <div className="info-box p-6 bg-white rounded-lg shadow-lg">
            <LocationOn className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">My Address</h3>
            <p className="text-gray-600">Assam, India</p>
          </div>

          {/* Social Profiles */}
          <div className="info-box p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Profiles</h3>
            <div className="flex space-x-4 mt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/biswajit-deori-5266521b4"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/BiswajitDeori"
                className="text-gray-800 hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub/>
              </a>
            </div>
          </div>

          {/* Email Box */}
          <div className="info-box p-6 bg-white rounded-lg shadow-lg">
            <Email className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Me</h3>
            <a
              href="mailto:biswajitdeori09@gmail.com"
              className="text-blue-500 hover:text-blue-700"
            >
              biswajitdeori09@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
