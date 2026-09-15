import React, { useState } from "react";
import "./App.css";
import logo from "./images/image.png";

const destinations = [
  {
    id: 1,
    title: "Hundred Islands",
    place: "Alaminos City, Pangasinan",
    category: "Nature",
    image:
      "https://www.lakwatsero.com/wp-content/uploads/2018/04/Hundred-Islands.jpg",
    text: "Explore Pangasinan’s famous islands, clear waters, stunning limestone formations, and breathtaking scenery.",

  },

  {
    id: 2,
    title: "Capitol",
    place: "Lingayen, Pangasinan",
    category: "Heritage",
    image:
      "https://files01.pna.gov.ph/ograph/2018/04/07/pangasinan-capitol_5ac863f433f342_71797102.jpg",
    text:" Visit the historic Provincial Capitol in Lingayen, a beautiful landmark that showcases Pangasinan’s history, culture, and heritage.",


  },

  {
    id: 3,
    title: "Antong Falls",
    place: "Sison, Pangasinan",
    category: "Nature",
    image:
      "https://seepangasinan.com/wp-content/uploads/2022/08/IMG_2897-scaled-1536x1152.jpg",
    text: "Relax A refreshing waterfall in Sison, Pangasinan, surrounded by peaceful natural scenery.",
  },
];

function App() {
  const [active, setActive] = useState("home");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All");
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(null);

  const changePage = (page) => {
    setActive(page);
    setShowMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const results = destinations.filter((item) => {
    const text = keyword.toLowerCase().trim();

    const foundText =
      item.title.toLowerCase().includes(text) ||
      item.place.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text);

    const foundCategory =
      category === "All" ||
      item.category === category;

    return foundText && foundCategory;
  });

  return (
    <div className="website">

      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="header-inner">

          <button
            className="brand"
            onClick={() => changePage("home")}
          >
            <img
              src={logo}
              alt="Pangasinan Heritage Logo"
            />

            <div>
              <strong>Pangasinan</strong>
              <small>HERITAGE</small>
            </div>
          </button>

          <nav
            className={
              showMenu
                ? "navigation show"
                : "navigation"
            }
          >

            <button
              className={
                active === "home"
                  ? "current"
                  : ""
              }
              onClick={() => changePage("home")}
            >
              Home
            </button>

            <button
              className={
                active === "sites"
                  ? "current"
                  : ""
              }
              onClick={() => changePage("sites")}
            >
              Heritage Sites
            </button>

            <button
              className={
                active === "about"
                  ? "current"
                  : ""
              }
              onClick={() => changePage("about")}
            >
              About
            </button>

            <button
              className={
                active === "contact"
                  ? "current"
                  : ""
              }
              onClick={() => changePage("contact")}
            >
              Contact
            </button>

          </nav>

          <div className="header-actions">

            <div className="header-search">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search..."
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                  setActive("sites");
                }}
              />
            </div>

            <button
              className="hamburger"
              onClick={() =>
                setShowMenu(!showMenu)
              }
              aria-label="Open menu"
            >
              ☰
            </button>

          </div>

        </div>
      </header>


      {/* ================= HOME ================= */}

      {active === "home" && (
        <>
          <section className="hero-section">

            <div className="hero-shade"></div>

            <div className="hero-inner">

              <div className="hero-content">

                <span className="eyebrow">
                  DISCOVER PANGASINAN
                </span>

                <h1>
                  Explore the
                  <br />
                  <em>
                    Heritage of Pangasinan
                  </em>
                </h1>

                <p>
                 Explore breathtaking landscapes, historic landmarks, cultural treasures, and memorable destinations across Pangasinan.

                </p>

                <button
                  className="main-btn"
                  onClick={() => changePage("sites")}
                >
                  Explore Heritage Sites
                  <b>→</b>
                </button>

              </div>

            </div>

          </section>


          <DestinationSection
            data={results}
            category={category}
            setCategory={setCategory}
            setSelected={setSelected}
            keyword={keyword}
          />


          <AboutSection />
        </>
      )}


      {/* ================= SITES ================= */}

      {active === "sites" && (
        <main>
          <DestinationSection
            data={results}
            category={category}
            setCategory={setCategory}
            setSelected={setSelected}
            keyword={keyword}
          />
        </main>
      )}


      {/* ================= ABOUT ================= */}

      {active === "about" && (
        <AboutSection />
      )}


      {/* ================= CONTACT ================= */}

      {active === "contact" && (
        <ContactSection />
      )}


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-inner">

          <div>
            <h3>
              Pangasinan Heritage
            </h3>

            <p>
              Discover. Appreciate. Preserve.
            </p>
          </div>

          <div className="footer-menu">
            <span>Heritage</span>
            <span>Culture</span>
            <span>Tourism</span>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Pangasinan Heritage.
          All rights reserved.
        </div>

      </footer>


      {/* ================= MODAL ================= */}

      {selected && (
        <div
          className="overlay"
          onClick={() => setSelected(null)}
        >

          <div
            className="details-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelected(null)
              }
            >
              ×
            </button>

            <img
              src={selected.image}
              alt={selected.title}
            />

            <div className="modal-info">

              <span className="modal-category">
                {selected.category}
              </span>

              <h2>
                {selected.title}
              </h2>

              <p className="modal-place">
                📍 {selected.place}
              </p>

              <p>
                {selected.text}
              </p>

              <button
                className="main-btn"
                onClick={() =>
                  setSelected(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}


/* =====================================================
   DESTINATION SECTION
===================================================== */

function DestinationSection({
  data,
  category,
  setCategory,
  setSelected,
  keyword,
}) {
  return (
    <section className="destination-section">

      <div className="heading">

        <span>EXPLORE</span>

        <h2>
          Heritage Sites
        </h2>

        <p>
         Explore the stunning destinations and rich cultural heritage of Pangasinan.

        </p>

      </div>


      <div className="site-controls">

        <div className="site-search">
          <span>🔍</span>

          <input
            type="text"
            value={keyword}
            placeholder="Search a destination..."
            readOnly
          />
        </div>


        <div className="categories">

          {[
            "All",
            "Nature",
            "Heritage",
          ].map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "active-filter"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>
          ))}

        </div>

      </div>


      {data.length === 0 ? (

        <div className="empty">

          <h3>
            No destination found
          </h3>

          <p>
            Try another search.
          </p>

        </div>

      ) : (

        <div className="destination-grid">

          {data.map((item) => (

            <article
              className="destination-card"
              key={item.id}
            >

              <div className="destination-photo">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span>
                  {item.category}
                </span>

              </div>


              <div className="destination-info">

                <h3>
                  {item.title}
                </h3>

                <p className="place">
                  📍 {item.place}
                </p>

                <p className="description">
                  {item.text}
                </p>

                <button
                  className="view-button"
                  onClick={() =>
                    setSelected(item)
                  }
                >
                  View Details
                  <span>→</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      )}

    </section>
  );
}


/* =====================================================
   ABOUT
===================================================== */

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-inner">

        <div className="heading">

          <span>
            ABOUT THE PROJECT
          </span>

          <h2>
            Preserving Pangasinan's
            <br />
            Heritage Digitally
          </h2>

          <p>
           Pangasinan Heritage is a digital platform that highlights the province’s stunning destinations, historic landmarks, and rich cultural heritage.

          </p>

        </div>


        <div className="statistics">

          <div>
            <strong>3</strong>
            <span>
              Featured Sites
            </span>
          </div>

          <div>
            <strong>2</strong>
            <span>
              Digital Showcase
            </span>
          </div>

          <div>
            <strong>∞</strong>
            <span>
              Stories to Discover
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}


/* =====================================================
   CONTACT
===================================================== */

function ContactSection() {

  const [success, setSuccess] =
    useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    setSuccess(true);

    e.target.reset();
  };

  return (
    <section className="contact-section">

      <div className="contact-inner">

        <div className="contact-text">

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Contact Us
          </h2>

          <p>
            Have questions, suggestions,
            or information about Pangasinan?
            Send us a message.
          </p>


          <div className="contact-item">

            <b>
              ✉ Email
            </b>

            <p>
              Onetwonine@gmail.com
            </p>

          </div>


          <div className="contact-item">

            <b>
              📍 Location
            </b>

            <p>
              Dito sa bahay lang ,Philippines
            </p>

          </div>

        </div>


        <form
          className="contact-box"
          onSubmit={sendMessage}
        >

          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Your name"
            required
          />


          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Your email"
            required
          />


          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            rows="6"
            placeholder="Write your message..."
            required
          />


          <button
            type="submit"
            className="main-btn"
          >
            Send Message →
          </button>


          {success && (
            <p className="success-message">
              ✓ Your message was sent successfully!
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default App;