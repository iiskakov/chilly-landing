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
      
      <div className="absolute inset-0 z-2 flex flex-col justify-center items-center bg-black bg-opacity-30">
        <h1 className="text-white text-5xl font-bold mb-4">Chilly Production</h1>
        <p className="text-white text-xl mb-8 max-w-[80vw] md:max-w-xl text-center">
          Chilly Production is a production house based in Almaty, Kazakhstan, established in 2020. We specialize in creating unique video projects with style and personality. From vibrant music videos and captivating commercials to short films and engaging vlogs, we bring stories to life that inspire and leave a lasting impression.
        </p>
      </div>
    </div>
  );
}
