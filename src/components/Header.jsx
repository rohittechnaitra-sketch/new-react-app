import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        
        {/* Logo */}
        <h2 style={styles.logo}>MySite</h2>

        {/* Navigation */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/blog" style={styles.link}>Blog cccc</Link>
        </nav>

        {/* CTA Button
        <button style={styles.button}>Contact</button> */}

      </div>
    </header>
    
  );
}

const styles = {
  header: {
    background: "#0f172a",
    color: "#fff",
    padding: "15px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
  },

  container: {
    width: "90%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },

  nav: {
    display: "flex",
    gap: "20px"
  },

  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.3s"
  },

  button: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Header;