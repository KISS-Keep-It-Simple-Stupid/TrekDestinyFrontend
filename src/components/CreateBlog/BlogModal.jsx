import React from "react";
import { MdClose } from "react-icons/md";
import Blog from "./Blog";

const BlogModal = ({ isVisible, onClose, Data }) => {
  if (!isVisible) return null;



  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="w-[40rem] h-auto flex flex-col">
        <div className="bg-white p-5 rounded-lg relative h-[40rem] overflow-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin">
          <button
            className="text-black text-xl absolute top-0 right-0 m-2 hover:bg-gray-300 p-0.5 rounded"
            onClick={() => onClose()}
          >
            <MdClose />
          </button>
          <div className="p-5 rounded-lg">
            <Blog onClose={() => onClose()} Data={Data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
