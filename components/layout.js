import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({preview, children}) {
  return (
    <>
      <Meta />
      <div style={{minHeight: "80vh"}}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
