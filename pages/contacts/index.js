const ContactPage = () => {
  return (
    <div className="md:pt-[25vh] pt-10 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* General Enquiries Section */}
      <div className="text-center mb-8">
        <p className="uppercase text-sm mb-2">Contacts</p>
        <p className="text-3xl font-bold mb-4">
          <a href="mailto:hello@chilly.kz" className="underline">hello@chilly.kz</a> /
          <a href="tel:+77781907608" className="underline"> +7 778 19076 08</a>
        </p>
        <p className="text-3xl font-bold">
          <a href="https://t.me/chilly_kz" className="underline">Telegram</a>
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center md:text-left">
        {/* Founding Partners */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-bold uppercase mb-4">Founding Partners</h3>
          <p className="mb-2">
            Victor Brodyagin<br />
            <a href="mailto:victor@chilly.kz" className="underline">victor@chilly.kz</a>
          </p>
        </div>

        {/* Executive Producer */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Executive Producer</h3>
          <p className="mb-2">
            Anna Prots<br />
            <a href="mailto:anna@chilly.kz" className="underline">anna@chilly.kz</a>
          </p>
        </div>

        {/* Producers */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Producers</h3>
          <p className="mb-2">
            Karina Mukanova<br />
            <a href="mailto:karina@chilly.kz" className="underline">karina@chilly.kz</a>
          </p>
          <p>
            Anastasiya Lukyanchuk<br />
            <a href="mailto:nastya@chilly.kz" className="underline">nastya@chilly.kz</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
