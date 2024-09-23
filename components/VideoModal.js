import React from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function VimeoModal({ videoId, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        onClick={onClose} // Close modal on background click
      >
        <motion.div
          style={{ position: "relative", width: "80%", height: "80%" }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
