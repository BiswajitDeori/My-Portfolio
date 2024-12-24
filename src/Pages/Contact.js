import React from "react";

function Contact() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-screen-lg">
      <div className="bg-white rounded-xl shadow-xl p-8 m-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Contact Information</h1>
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 rounded-xl shadow-md">
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">Name:</span> Biswajit Deori
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">Email:</span> biswajitdeori09@gmail.com
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold text-gray-700">Address:</span> India (IN), Assam
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
