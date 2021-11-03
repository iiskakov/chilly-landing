import Container from "./container";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <span className="hover:underline text-base lg:text-1xl font-bold tracking-tighter leading-6 text-right w-screen lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <a href="https://t.me/victorbrodyagin">
            → написать в <span className="text-blue-400">телеграм</span>
          </a>
        </span>
        <div className="border-t-2 border-black md:border-t-4"></div>
      </Container>
    </footer>
  );
}
