import React from "react";

interface IGifRender {
  title: string;
  gifPath: string;
}

const GifRender = ({ gifPath, title }: IGifRender) => {
  return (
    <div className="max-w-3xl xl:max-w-7xl mx-auto mt-10 rounded-lg shadow-lg border border-gray-50 overflow-hidden">
      <div className="flex justify-between items-center bg-gray-50 border-b border-gray-50 px-3 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-white">{title}</div>
      </div>

      <div className="bg-gray-50">
        <img
          src={gifPath}
          alt="My GIF"
          className="w-full rounded-lg rounded-t-none"
        />
      </div>
    </div>
  );
};

export default GifRender;
