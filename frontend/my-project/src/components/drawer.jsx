"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Drawer = ({ open, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`fixed bottom-0 left-0 top-0 right-0 h-screen opacity-5 backdrop-blur-xs bg-black 
          ${
          open ? "block" : "hidden"
        }`
      }
        onClick={onClose}
      ></div>
      <div
        className={`bg-white fixed top-0 right-0 transition-transform w-[250px] h-full ${open ? "translate-x-0" : "hidden md:block"}`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="min-h-full overflow-y-auto">{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Drawer;
