import { useRef, useEffect } from "react";

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force load and play
      video.load();
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Video playing successfully"))
          .catch(error => console.error("Error playing video:", error));
      }

      // Additional debugging
      console.log("Video element:", video);
      console.log("Video ready state:", video.readyState);
      console.log("Video network state:", video.networkState);
    }
  }, []);

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      <video
        ref={videoRef}
        src="https://storage.yandexcloud.kz/chillybucket/chilly-showreel.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[100svh] object-cover"
        style={{ backgroundColor: "black" }}
        onError={(e) => {
          console.error("Video error:", e.target.error);
        }}
        onLoadStart={() => console.log("Video load started")}
        onLoadedData={() => console.log("Video data loaded")}
      />
      {/* <div className="absolute top-1 right-8 md:bottom-1 md:right-4">
        <h1 className="m-1 text-white text-5xl md:text-7xl lg:text-8xl font-bold">
          Chilly Production
        </h1>
      </div> */}
    </div>
  );
}
