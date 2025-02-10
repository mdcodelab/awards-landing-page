"use client";
import React from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';

function MiniProject() {

useEffect(()=> {
let tl=gsap.timeline({
  defaults: {
    opacity: 0,
    ese: "linear",
    duration: 1
  }
})

tl.fromTo(".sidebar", {width: 0}, {width: "30%", opacity: 1});

tl.fromTo(".main-img", {x: 0}, {opacity: 1});

tl.fromTo(".content", {x: 100}, {x: 0, opacity: 1})
}, [])
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

export default MiniProject;
"