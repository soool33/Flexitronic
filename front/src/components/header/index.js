import React from 'react';


const Header = () => {

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
  
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex justify-content-between align-items-center">

        <div id="logo">
          <a href="index.html"><img src="./vendor/img/logo.png" alt="logo_flexitronic" /></a>
          {/* Uncomment below if you prefer to use a text logo */}
          {/* <!--<h1><a href="index.html">Regna</a></h1>--> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Accueil</a></li>
            <li className="dropdown"><a className="nav-link scrollto" href="#services"><span>Nos services</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#services">ÉTUDE & CONCEPTION ÉLECTRONIQUE</a></li>
                <li><a href="#services">DESIGN HARDWARE ET ROUTAGE</a></li>
                <li><a href="#services">PROTOTYPAGE</a></li>
                <li><a href="#services">INDUSTRIALISATION ET FABRICATION</a></li>
                <li><a href="#services">OBJETS CONNECTÉS IOT</a></li>
                <li><a href="#services">DÉVELOPPEMENT SOFTWARE</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#about">Notre vision</a></li>
            <li><a className="nav-link scrollto " href="#portfolio">Nos créations</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  )
}

export default Header;