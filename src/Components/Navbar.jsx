const Navbar = ({ setPage }) => {
  return (
    <nav style={styles.nav}>
      <button style={styles.btn} onClick={() => setPage("home")}>
        Home
      </button>
      <button style={styles.btn} onClick={() => setPage("about")}>
        About
      </button>
      <button style={styles.btn} onClick={() => setPage("contact")}>
        Contact
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#222",
    padding: "15px",
    display: "flex",
    gap: "15px",
  },
  btn: {
    background: "none",
    border: "1px solid white",
    color: "white",
    padding: "8px 15px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Navbar;
