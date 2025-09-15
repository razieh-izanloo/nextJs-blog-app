"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./drawer.scss";

const Drawer = ({ open, onClose, children }) => {
  const [mounted, setMounted] = useState(false);
console.log(open)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`close-drawer ${open ? "isOpen" : "d-none d-md-block"}`}
        onClick={onClose}
      ></div>
      <div
        className={`section-drawer ${open ? "isOpen" : "d-none d-md-block"}`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="mh-100 overflow-y-auto">{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Drawer;
