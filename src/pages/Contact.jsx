import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center py-16 px-4">
      
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 animate-bounce">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Got any doubts or questions? Drop us an email at the address below, and we’ll get back to you.
        </p>
      </div>

     
        {/* Contact Info Card */}
        <div className="bg-indigo-100 p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-6 hover:scale-105 transform transition duration-500">
          <h2 className="text-2xl font-bold text-indigo-700">Contact Info</h2>
          <p className="text-gray-700">
            <strong>Email:</strong> reach.mohitjaryal@gmail.com
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> India
          </p>
          <p className="text-gray-700">
            We're here to answer your questions and help you get started.
          </p>
          <div className="flex space-x-4 mt-4">
            <span className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-indigo-700 transition">
              📧
            </span>
            <span className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-indigo-700 transition">
              📍
            </span>
            <span className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-indigo-700 transition">
              💬
            </span>
          </div>
        </div>
      </div>
  );
}
