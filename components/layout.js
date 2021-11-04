import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import {useEffect} from "react";

export default function Layout({preview, children}) {
  let vh;
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      console.log(vh);

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
