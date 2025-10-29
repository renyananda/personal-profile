import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-[#F0E7FF] px-6 md:px-20 flex justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#232946] mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-4">
            Interested in working together? Let’s talk about your project and make something amazing!
          </p>
          <p className="flex items-center gap-2 text-[#7755FF] mb-2">
            <FaEnvelope /> Renyananada145@gmail.com
          </p>
          <p className="flex items-center gap-2 text-[#7755FF] mb-4">
            <FaPhone /> +62 878-1148-7290
          </p>
          <div className="flex gap-4 text-2xl text-gray-700">
            <a href="https://instagram.com/renyndkd" target="_blank" rel="noreferrer" className="hover:text-[#7755FF] transition">
              <FaInstagram />
            </a>
            <a href="https://github.com/renyananda" target="_blank" rel="noreferrer" className="hover:text-[#7755FF] transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/reny-ananda-kusuma-deni" target="_blank" rel="noreferrer" className="hover:text-[#7755FF] transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-8 rounded-[16px] shadow-md">
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#7755FF] outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#7755FF] outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#7755FF] outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white font-semibold py-3 rounded-md shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
