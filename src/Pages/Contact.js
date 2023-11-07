import React from "react";

function Contact() {
  return (
    <main className="container mx-auto max-width section">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4">
      <h1 className="text-3xl font-bold mb-4 ">Contact Information</h1>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <p >
          <span className="font-semibold ">Name:</span> Biswajit Deori
        </p>
        <p >
          <span className="font-semibold ">Email:</span> biswajitdeori09@gmail.com
        </p>
        <p >
          <span className="font-semibold ">Phone:</span> 999XXXXXXXX
        </p>
        <p >
          <span className="font-semibold " >Address:</span> India (IN) ,Assam
        </p>
      </div>
    </div>
    </main>
  );
}

export default Contact;
