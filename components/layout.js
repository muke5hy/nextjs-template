import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
}
