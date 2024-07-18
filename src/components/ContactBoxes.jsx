import { SlLocationPin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const ContactBoxes = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6  mt-[5rem] md:mt-[12rem] ">
        <div className="relative group w-full sm:w-64 md:w-72 lg:w-80 h-60 bg-blue-500 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-2">
          <div className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-4 text-center">mohmd.pars4@gmail.com</p>
          </div>
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl">
              <MdEmail />
            </span>
          </div>
        </div>

        <div className="relative group w-full sm:w-64 md:w-72 lg:w-80 h-60 bg-green-500 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-2">
          <div className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-4 text-center">09123456789</p>
          </div>
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl">
              <FaPhoneAlt />
            </span>
          </div>
        </div>
        <div className="relative group w-full sm:w-64 md:w-72 lg:w-80 h-60 bg-red-500 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-2">
          <div className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-4 text-center">Tehran IR</p>
          </div>
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl">
              <SlLocationPin />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBoxes;