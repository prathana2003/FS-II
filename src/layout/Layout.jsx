import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Layout = ({ page, setPage }) => {
  return (
    <>
      <Navbar setPage={setPage} />

      <div style={{ padding: "20px" }}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
    </>
  );
};

export default Layout;
