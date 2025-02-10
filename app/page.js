import React from 'react';

function Home() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <h1>Creatives</h1>
        </div>
        <ul>
          <li><a href="#">MAIN FEATURES</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>

      <section className="sidebar"></section>

      <section className="content-container">
        <img src="/img/about.webp" alt="contact" className="main-img" />
        <div className="content">
          <h1 className="main-title">Creatives</h1>
          <p className="main-info">
            Welcome to the real world!
            <br />
            Explore our Gallery
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
