import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import VimeoModal from "../components/VideoModal"; // Import the modal component

// JSON object containing image data
const imageData = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dekfylowi/image/upload/f_auto,q_auto/svn91eof0hyg4ez8azwz",
    title: "RAMEN",
    client: "BigBon",
    director: "Kostya Sobol",
    videoId: "822462045",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dekfylowi/image/upload/f_auto,q_auto/v63h5nj17e5mhmkacg0i",
    title: "Everyone Has A Story",
    client: "Kaspi",
    director: "Malik Zenger",
    videoId: "358008202",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dekfylowi/image/upload/f_auto,q_auto/euni0t0iz32aaymh7c2j",
    title: "Live with Happiness",
    client: "BI Group",
    director: "Malik Zenger",
    videoId: "620732800",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dekfylowi/image/upload/f_auto,q_auto/pcnrbo5v0hgczfnv7shk",
    title: "Flavors of the World",
    client: "Big Bob",
    director: "Kostya Sobol",
    videoId: "778775740",
  },
];


function Image({ image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  // State to control modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // State to control the opacity of the background overlay
  const [isHovered, setIsHovered] = useState(false);

  // Handler to toggle the modal
  const handlePlayButtonClick = () => {
    setModalOpen(true);
  };

  // Calculate the overlay opacity based on hover state
  const overlayOpacity = isHovered ? 0 : 0.4;

  return (
    <section>
      <AnimatePresence>
        <div
          className="w-full md:h-[70vh] h-full"
          style={{ backgroundColor: "black", position: "relative" }}
          ref={ref}
        >
          <motion.img className="object-cover h-full md:h-auto no-scale-on-mobile" style={{ scale }} src={image.url} />
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              filter: `brightness(${1 - overlayOpacity})`,
              pointerEvents: "none",
            }}
            // Add animation for smooth opacity change
            animate={{ opacity: overlayOpacity }}
            // Different durations for hover and leave transitions
            transition={{
              duration: isHovered ? 0.2 : 0.8, // Faster on hover, slower on leave
            }}
          />

          <div className="md:bottom-20 bottom-24 md:left-12 left-4" id="project-info">
            <motion.h2>{image.title}</motion.h2>
            <div className="text-xl">Client: {image.client}</div>
            <div className="text-xl">Director: {image.director}</div>
          </div>

          {/* Play button */}
          <button
            onClick={handlePlayButtonClick}
            onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255, 255, 255, 0.1)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7L8 5z" fill="black" />
            </svg>
          </button>

          {/* Modal */}
          {isModalOpen && (
            <VimeoModal
              videoId={image.videoId} // Vimeo video ID from the JSON data
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>
      </AnimatePresence>
    </section>
  );
}



export default function App() {
  return (
    <>
      {imageData.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </>
  );
}
