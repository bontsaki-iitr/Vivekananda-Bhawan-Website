import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  onKey?: (key: string) => void;
  dark?: boolean;
  children: ReactNode;
}

// Full-screen overlay; closes on Escape, backdrop click or the X button
const Modal = ({ onClose, onKey, dark, children }: ModalProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else onKey?.(e.key);
    };
    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onKey]);

  // Portal to <body> so the page fade-in transform can't trap the overlay under the sticky header
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${dark ? "bg-black/90" : "bg-slate-900/70 backdrop-blur-sm"}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <div onClick={(e) => e.stopPropagation()} className="max-h-full max-w-full overflow-auto">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
