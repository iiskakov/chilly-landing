const AboutPage = () => {
  return (
    <div className="h-[100vh] relative">
      {/* Full Screen Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dekfylowi/image/upload/f_auto,q_auto/ziqw6utlk8oxwwrqiizc" // Replace this with the actual URL of the team image
          alt="Team"
          className="w-full h-full object-cover filter grayscale"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-2 flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold mb-4">About Us</h1>
        <p className="text-white text-lg mb-8 max-w-[80vw] md:max-w-xl text-center">
          We are a dynamic and innovative team, committed to creating extraordinary productions and experiences. Our passion for storytelling and creativity drives us to deliver high-quality projects in every aspect of our work.
        </p>

        {/* Instagram Link */}
        <a
          href="https://instagram.com/chilly_production"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg underline"
        >
          Instagram: @chilly_production
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
