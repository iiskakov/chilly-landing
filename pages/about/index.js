const AboutPage = () => {
  return (
    <div className="h-[100vh] relative">
      {/* Full Screen Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dekfylowi/image/upload/v1736151028/fkpc1c9ne85xu2s6sxun.webp" // Replace this with the actual URL of the team image
          alt="Team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-2 flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold mb-4">Chilly Production</h1>
        <p className="text-white text-lg mb-8 max-w-[80vw] md:max-w-xl text-center">Chilly Production is a production house based in Almaty, Kazakhstan, established in 2020. We specialize in creating unique video projects with style and personality. From vibrant music videos and captivating commercials to short films and engaging vlogs, we bring stories to life that inspire and leave a lasting impression.</p>

        {/* Instagram Link */}
        <a
          href="https://instagram.com/chilly_production"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg underline"
        >
          Instagram
        </a>
        {/* Instagram Link */}
        <a
          href="https://vimeo.com/chillyproduction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg underline"
        >
         Vimeo
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
