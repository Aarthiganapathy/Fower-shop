
import React from "react";
import flowerImage from "../assets/home.jpeg";
import "./Home.css";

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const categories = [
  {
    id: 1,
    name: "Roses",
    description: "Classic love and beauty",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Tulips",
    description: "Simple and elegant",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Lilies",
    description: "Graceful and beautiful",
    image:
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Sunflowers",
    description: "Brighten someone's day",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80",
  },
];


const products = [
  {
    id: 1,
    name: "Pink Rose Bouquet",
    price: 799,
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Fresh Tulip Bouquet",
    price: 999,
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Elegant Lily Bouquet",
    price: 899,
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Sunshine Bouquet",
    price: 699,
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80",
  },
];


const Home = () => (
  <>
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Fresh Flowers for Every Occasion</h1>

        <p>
          Hand-tied bouquets, arranged each morning and wrapped in craft paper,
          ready to say what words can’t.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">
            Shop Flowers
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <button className="explore-btn">
            Explore Occasions
          </button>
        </div>

        <ul className="trust">
          <li>
            <Icon>
              <rect x="2.5" y="7" width="12" height="9" rx="1.5" />
              <path d="M14.5 10h4l3 3v3h-7M6.5 19.5a1.8 1.8 0 1 0 0-.01M17.5 19.5a1.8 1.8 0 1 0 0-.01" />
            </Icon>
            <span>Same-day Delivery</span>
          </li>

          <li>
            <Icon>
              <path d="M12 3 4.5 6v5.5c0 4.4 3.1 7.9 7.5 9.5 4.4-1.6 7.5-5.1 7.5-9.5V6L12 3z" />
              <path d="m8.8 12 2.2 2.2 4.2-4.4" />
            </Icon>
            <span>Freshness Guarantee</span>
          </li>
        </ul>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image">
          <img
            src={flowerImage}
            alt="Pink flower bouquet"
          />
        </div>
      </div>
    </section>

    {/* Shop by Category Section */}
    <section className="category-section">
      <div className="category-heading">
        <span className="category-subtitle">
          FIND YOUR FAVORITE
        </span>

        <h2>Shop by Category</h2>

        <p>
          Discover beautiful blooms for every mood and moment.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
              />
            </div>

            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button className="category-btn">
                Explore Flowers <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    
{/* Best Selling Flowers Section */}
<section className="products-section">
  <div className="products-heading">
    <span className="category-subtitle">
      OUR CUSTOMER FAVORITES
    </span>

    <h2>Best Selling Flowers</h2>

    <p>
      Handpicked bouquets to make every moment special.
    </p>
  </div>

  <div className="products-grid">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />

          <span className="product-badge">
            Best Seller
          </span>
        </div>

        <div className="product-info">
          <div className="product-rating">
            <span>★</span> {product.rating}
          </div>

          <h3>{product.name}</h3>

          <p className="product-price">
            ₹{product.price}
          </p>

          <button
            className="add-cart-btn"
            onClick={() =>
              alert(`${product.name} added to cart!`)
            }
          >
            Add to Cart +
          </button>
        </div>
      </div>
    ))}
  </div>
</section>



{/* Flowers for Every Occasion */}
<section className="occasion-section">
  <div className="occasion-heading">
    <span className="category-subtitle">
      MAKE EVERY MOMENT SPECIAL
    </span>

    <h2>Flowers for Every Occasion</h2>

    <p>
      Find the perfect flowers for the people you love.
    </p>
  </div>

  <div className="occasion-grid">
    <div className="occasion-card">
      <img
        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80"
        alt="Birthday celebration"
        loading="lazy"
      />
      <div className="occasion-info">
        <h3>Birthday</h3>
        <p>Make their special day brighter.</p>
        <button className="occasion-btn">
          Explore <span>→</span>
        </button>
      </div>
    </div>

    <div className="occasion-card">
      <img
        src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
        alt="Romantic pink roses"
        loading="lazy"
      />
      <div className="occasion-info">
        <h3>Anniversary</h3>
        <p>Celebrate love with beautiful blooms.</p>
        <button className="occasion-btn">
          Explore <span>→</span>
        </button>
      </div>
    </div>

    <div className="occasion-card">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
        alt="Wedding celebration"
        loading="lazy"
      />
      <div className="occasion-info">
        <h3>Wedding</h3>
        <p>Flowers for your beautiful beginning.</p>
        <button className="occasion-btn">
          Explore <span>→</span>
        </button>
      </div>
    </div>

    <div className="occasion-card">
      <img
        src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
        alt="Flowers as a thank you gift"
        loading="lazy"
      />
      <div className="occasion-info">
        <h3>Thank You</h3>
        <p>Say it with a thoughtful bouquet.</p>
        <button className="occasion-btn">
          Explore <span>→</span>
        </button>
      </div>
    </div>
  </div>
</section>



{/* Why Choose Us Section */}
<section className="why-section">
  <div className="why-heading">
    <span className="category-subtitle">
      THE FLOWER SHOP PROMISE
    </span>

    <h2>Why Choose Us?</h2>

    <p>
      Every bouquet is made with love, care, and fresh flowers.
    </p>
  </div>

  <div className="why-grid">
    <div className="why-card">
      <div className="why-icon">🌷</div>
      <h3>Fresh Flowers</h3>
      <p>
        Beautiful, fresh blooms carefully selected every day.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🚚</div>
      <h3>Same-day Delivery</h3>
      <p>
        Send your love with quick and reliable delivery.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🎁</div>
      <h3>Beautiful Packaging</h3>
      <p>
        Every bouquet is wrapped beautifully for gifting.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">💗</div>
      <h3>Made with Love</h3>
      <p>
        Thoughtful floral arrangements for every occasion.
      </p>
    </div>
  </div>
</section>



{/* Footer Section */}
<footer className="footer">
  <div className="footer-container">

    {/* Brand */}
    <div className="footer-brand">
      <h2>Bloom & Blossom<span>.</span></h2>
      <p>
        Bringing happiness to your moments with
        fresh flowers and beautiful bouquets.
      </p>
      <div className="footer-socials">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </div>

    {/* Quick Links */}
    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#categories">Categories</a>
      <a href="#products">Our Flowers</a>
      <a href="#occasions">Occasions</a>
    </div>

    {/* Customer Service */}
    <div className="footer-links">
      <h3>Customer Care</h3>
      <a href="#about">About Us</a>
      <a href="#contact">Contact Us</a>
      <a href="#delivery">Delivery Information</a>
      <a href="#faq">FAQs</a>
    </div>

    {/* Contact */}
    <div className="footer-contact">
      <h3>Get in Touch</h3>
      <p>Email: hello@bloomshop.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Chennai, Tamil Nadu</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Bloom & Blossom.
      Made with love for flower lovers.
    </p>
  </div>
</footer>

  </>
);

export default Home;
