import React from "react";

interface IModal {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Modal = ({ open, onClose, children }: IModal) => {
  if (!open) return null;

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="fixed inset-0  block backdrop-blur-[11px] w-screen h-screen"
      ></div>
      <button
        className="absolute text-white top-10 right-10 text-2xl hover:text-gray-300 font-bold bg-black w-12 h-12 p-2 rounded-full"
        onClick={onClose}
      >
        &#x2715;
      </button>
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
