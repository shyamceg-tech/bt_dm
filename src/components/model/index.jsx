import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-grey bg-opacity-50 backdrop-blur-sm z-[50] overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white p-3 md:p-2 rounded-2xl shadow-lg w-[90%] md:w-[60%] lg:w-[40%] max-h-[95vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing on click inside modal
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-black text-xl z-10"
            onClick={onClose}
          >
            ✖
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
