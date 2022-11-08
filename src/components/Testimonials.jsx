import Star from "./Star";

const Testimonials = ({
  img,
  image,
  name,
  name1,
  content,
  za,
  star,
  picture,
  Home,
}) => {
  return (
    <div>
      <div>{Home}</div>
      {star.map((e) => {
        return <Star />;
      })}
      {picture.map((e) => {
        return <picture />;
      })}
      <p id="c">{content}</p>
      <p id="za">{za}</p>
      <div>
        <img id="i" src={image} alt={image} />
        <img src={img} alt={img} />
        <h3 id="n">{name}</h3>
        <h2 id="n1">{name1}</h2>
      </div>
    </div>
  );
};

export default Testimonials;
