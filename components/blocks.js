import styles from "./blocks.module.css";

export default function Blocks() {
  const projects = ["сбер", "магнум", "bi group", "beeline", "forte bank"];

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

          <div className="space-x-6 whitespace-nowrap" id={styles.scrollText}>
            {projects.map((project) => (
              <span className=" text-xl md:text-2xl font-bold tracking-tighter leading-5">
                {project}
              </span>
            ))}
          </div>
        </div>
        <div className=" border-l-2 md:border-l-4 border-black h-28"></div>
        <div className="h-32 flex-1 border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-black">
          <h1 className="text-xs md:text-sm  font-bold tracking-tighter">
            производим:
            <br />
            рекламу, клипы, ролики, 3d
          </h1>
        </div>
      </section>
    </>
  );
}
