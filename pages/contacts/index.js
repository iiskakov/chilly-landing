const ContactPage = () => {
  return (
    <div className="md:pt-[25vh] pt-10 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* General Enquiries Section */}
      <div className="text-center mb-8">
        <p className="uppercase text-sm mb-2">For General Enquiries</p>
        <p className="text-3xl font-bold"><a href="tel:+77777052927">+7 777 705 29 27</a></p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center md:text-left">
        {/* Career */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-bold uppercase mb-4">Career</h3>
          <p>
            <a href="https://t.me/victorbrodyagin" className="underline">telegram</a>
          </p>
        </div>
        {/* Founding Partners */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Founding Partners</h3>
          <p className="mb-2">
            Victor Brodyagin<br />
            <a href="mailto:victor@chilly.kz" className="underline">victor@chilly.kz</a>
          </p>
        </div>

        {/* Commercial / Music Video */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Commercial / Music Video</h3>
          <p className="mb-2">
            Head of Sales<br />
            Anastasia Sychova<br />
            +7 777 113 91 81
          </p>
          <p>
            Executive Producer<br />
            Anna Prots<br />
            <a href="https://t.me/annaprotsv" className="underline">@annaprotsv</a>
          </p>
        </div>

        {/* Head of Procurement */}

      </div>
    </div>
  );
};

export default ContactPage;
