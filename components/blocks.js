import styles from "./blocks.module.css";

export default function Blocks() {
  const projects = [
    "сбер",
    "магнум",
    "bi group",
    "beeline",
    "forte bank",
    "🌶️",
    "coca-cola",
    "kaspi",
    "крыша",
  ];

  return (
    <>
      <section className="md:flex-row flex space-x-1 md:space-x-2 items-center md:justify-between mt-2 mb-16 md:mb-12">
        <div
          id={styles.scrollContainer}
          className="h-32 flex-1 border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-black flex justify-end content-end flex-col"
        >
          <div className={styles.pacman}>
            <div className={styles.pacmanTop}></div>
            <div className={styles.pacmanBottom}></div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.marquee}>
              <p
                style={{wordSpacing: 30}}
                className="text-xl md:text-2xl font-bold"
              >
                sberbank beeline danone fortebank foodmaster efes пиала pampers bi-group{"\u00A0"}
              </p>
              <p
                style={{wordSpacing: 30}}
                className="text-xl md:text-2xl font-bold"
              >
                sberbank beeline danone fortebank foodmaster efes пиала pampers bi-group{"\u00A0"}
              </p>
            </div>
          </div>
        </div>
        <div className=" border-l-2 md:border-l-4 border-black h-28"></div>
        <div className="h-32 flex-1 border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-black">
          <h1 className="text-xs md:text-sm  font-bold tracking-tighter">
            производим рекламу больше 7 лет
            <br />
            <br />
            смотрите{" "}

                    <span className="hover:underline font-bold leading-6 text-right w-screen lg:text-left mb-0 lg:mb-0 lg:pr-4 lg:w-1/2">

            <a href="https://vimeo.com/brodyagin">→ наши работы</a>
        </span>
            <br />
            <br />
            или приходите в гости к нам в новый офис на кабанбай батыра, 115
          </h1>
        </div>
      </section>
    </>
  );
}
