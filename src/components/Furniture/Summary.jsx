import "./Summary.css";
import image from "../../assets/Furniture.png";

export default function Summary() {
  return (
    <div className="summary-wrapper">
      <section className="summary-box">
        <h2> High Quality Furniture, Delivered Right At Your Doorstep</h2>
        <p>
          Discover the perfect furniture for your home or office at New Home.
          From modern to classic designs, our online store offers a curated
          collection of high-quality pieces that combine style and comfort.
        </p>
        <p>
          Browse our user-friendly website, choose from a variety of categories,
          and enjoy convenient delivery options. Transform your space with our
          exquisite furniture today.
        </p>
      </section>
      <img src={image} alt="lol" />
    </div>
  );
}
