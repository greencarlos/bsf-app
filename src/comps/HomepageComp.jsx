import StarRatingComp from "./StarRatingComp";

function HomepageComp() {
  return (
    <div className="center">
      <div className="wallpaper">
        <img
          className="homepage"
          src="https://wallpaperaccess.com/full/763291.jpg"
          loading="lazy"
        />
        <p>50% Off</p>
        <button>Shop Now</button>
      </div>

      <div className="row">
        <div className="icon">
          <img src="../../public/truck.png" loading="lazy" />
          <p>
            <b>FREE SHIPPING</b>
          </p>
          <p>Free Worlwide Shipping</p>
        </div>
        <div className="icon">
          <img src="../../public/chat.png" loading="lazy" />
          <p>
            <b>24/7 SUPPORT</b>
          </p>
          <p>Contact us 24 hours a day</p>
        </div>
        <div className="icon">
          <img src="../../public/box.png" loading="lazy" />
          <p>
            <b>30 DAY MONEY BACK GUARANTEE</b>
          </p>
          <p>Easy and fast refunds</p>
        </div>
      </div>

      <h1>Best Sellers</h1>
      <div className="row">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71ZTJmwgdML._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>IronVee™ - Power Cage and Weight Rack for home gym</b>
            <StarRatingComp />
            <p className="green">
              <s>$199.95</s> From $145.95 USD
            </p>
          </p>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71ZTJmwgdML._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>IronVee™ - Power Cage and Weight Rack for home gym</b>
          </p>
          <StarRatingComp />
          <p className="green">
            <s>$199.95</s> From $145.95 USD
          </p>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71ZTJmwgdML._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>IronVee™ - Power Cage and Weight Rack for home gym</b>
          </p>
          <StarRatingComp />
          <p className="green">
            <s>$199.95</s> From $145.95 USD
          </p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71ZTJmwgdML._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>IronVee™ - Power Cage and Weight Rack for home gym</b>
          </p>
          <StarRatingComp />
          <p className="green">
            <s>$199.95</s> From $145.95 USD
          </p>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71ZTJmwgdML._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>IronVee™ - Power Cage and Weight Rack for home gym</b>
          </p>
          <StarRatingComp />
          <p className="green">
            <s>$199.95</s> From $145.95 USD
          </p>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71ZTJmwgdML._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>IronVee™ - Power Cage and Weight Rack for home gym</b>
          </p>
          <StarRatingComp />
          <p className="green">
            <s>$199.95</s> From $145.95 USD
          </p>
        </div>
      </div>

      <h1>Popular Collections</h1>
      <div className="row">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/51s4b2i8D6L._SL1024_.jpg"
            loading="lazy"
          />
          <p>
            <b>Best Sellers </b>
          </p>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81Sq8wJctlL._AC_SL1500_.jpg"
            loading="lazy"
          />
          <p>
            <b>Featured</b>
          </p>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/51xTKz9g3+L._AC_SL1200_.jpg"
            loading="lazy"
          />
          <p>
            <b>Trending</b>
          </p>
        </div>
      </div>

      <div className="row">
        <div>
          <img
            className="shopping"
            src="https://i.pinimg.com/originals/93/ed/f3/93edf3265014fabe92633959fcea846a.jpg"
            loading="lazy"
          />
        </div>
        <div>
          <h2>Delivering smilies</h2>
          <p>
            At [Your Store Name], we’re all about bringing you the freshest,
            most exciting products out there.
          </p>
          <p>
            Our team stays ahead of the curve by constantly exploring trends,
            testing new items, and curating only the best picks for our
            customers.
          </p>
          <p>
            {" "}
            We believe shopping should feel fun and inspiring — not just a
            transaction.{" "}
          </p>
          <p>
            That’s why our site is designed to be easy to navigate, with clear
            info and helpful details on every product so you can shop with
            confidence.{" "}
          </p>
          <p>
            Thanks for choosing [Your Store Name] as your destination for
            trending finds and must‑have gear — we’re thrilled to be part of
            your shopping journey!
          </p>
        </div>
      </div>

      <h1>Testimonials</h1>
      <div className="row">
        <div>
          <img
            className="review"
            src="https://i.pinimg.com/originals/ee/05/e3/ee05e393def5face3deebd5d15566f66.jpg"
            loading="lazy"
          />
          <p>
            <b>
              <i>
                "I've been using this product for several months, so many people
                have commented that I look like I'm glowing. What a compliment,
                I'm very happy. I just ordered my second tube of color."
              </i>
            </b>
          </p>
          <p>- M&M</p>
        </div>
        <div>
          <img
            className="review"
            src="https://thumbs.dreamstime.com/b/beautiful-young-woman-smiling-portrait-34107885.jpg"
            loading="lazy"
          />
          <p>
            <b>
              <i>
                "These are so comfortable and soft. They do not have pockets but
                I didn’t want pockets but something to be aware of if you do.
                It's Very highly recommend for the ladies, especially for tall
                ladies
              </i>
            </b>
          </p>
          <p>- Slim Shady</p>
        </div>
        <div>
          <img
            className="review"
            src="https://thumbs.dreamstime.com/b/giving-you-broad-smile-cropped-view-pretty-african-american-woman-smiling-272216104.jpg"
            loading="lazy"
          />
          <p>
            <b>
              <i>
                "Now this is the part where the rap breaks down It gets real
                intense, no one makes a sound Everything looks like it's 8 Mile
                now The beat comes back and everybody lose themselves"
              </i>
            </b>
          </p>
          <p>- B. Rabbit</p>
        </div>
      </div>

      <h2>Subscribe to our emails</h2>
      <p>Retail Store - Catchy company sloagan</p>
      <input size="50" className="email ->" placeholder="Email" />
    </div>
  );
}

export default HomepageComp;
