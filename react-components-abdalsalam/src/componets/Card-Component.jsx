function Card({ title, description, buttonText }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Card;
