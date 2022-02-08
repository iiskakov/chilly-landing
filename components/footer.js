import Container from "./container";

export default function Footer() {
  return (
    <footer style={{marginTop: "42vh"}}>
      <Container>
        <span className="hover:underline text-base lg:text-1xl font-bold tracking-tighter leading-6 text-right w-screen lg:text-left mb-0 lg:mb-0 lg:pr-4 lg:w-1/2">
          <a href="https://t.me/victorbrodyagin">
            → написать в <span className="text-blue-400">телеграм</span>
          </a>
        </span>
        <span className="hover:underline text-base lg:text-1xl font-bold tracking-tighter leading-6 text-right w-screen lg:text-left mb-0 lg:mb-0 lg:pr-4 lg:w-1/2">
          <a href="https://wa.me/+77777052927">
            → написать в <span className="text-green-400">вотсап</span>
          </a>
        </span>
        <div className="border-t-2 border-black md:border-t-4"></div>
      </Container>
    </footer>
  );
}
