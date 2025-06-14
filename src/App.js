import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
  <div className="logo">Parul University</div>
  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#results">Results</a></li>
    <li><a href="#admission">Admission</a></li>
    <li><a href="#login">Login</a></li>
  </ul>
</nav>

      <section className="banner">
  <img
    src="https://paruluniversity.ac.in/performingarts_2025/images/building-desk.webp"
    alt="Parul University"
    className="banner-image"
  />
  {/* <div className="banner-text">
    <h1>Welcome to Parul University</h1>
  </div> */}
</section>

      <main className="main-content">
  <section id="registration-form">
    <h3>Registration Form</h3>
    <form>
      <input type="text" id="username" name="username" placeholder="Enter username" /><br /><br />
      <input type="email" id="email" name="email" placeholder="Enter email" /><br /><br />
      <input type="password" id="password" name="password" placeholder="Enter password" /><br /><br />
      <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" /><br /><br />
      
      <button type="submit">Register</button>
    </form>
  </section>
</main>


      <footer className="footer">
        <p>2025 Your Website</p>
      </footer>
    </>
  );
}

export default App;
