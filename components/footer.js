import Container from "./container";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className={styles.pacman}>
          <div className={styles.pacmanTop}></div>
          <div className={styles.pacmanBottom}></div>
          <div className={styles.feed}></div>
        </div>
        {/* <span className="text-base lg:text-1xl font-bold tracking-tighter leading-6 text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"> */}
        {/*   чилли продакшн */}
        {/* </span> */}
      </Container>
    </footer>
  );
}
