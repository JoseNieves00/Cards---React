const Card = (props) => {
  return (
    <div className={props.style}>
      <p className="df">Word of the day</p>
      <h2>
        <strong>Benevolent</strong>
      </h2>
      <p className="df">Adjective</p>
      <p className="maw">well meaning and kindly. "a benevolent smile"</p>
      <button>Learn More</button>
      <img className={props.class_img} src={props.src} />
    </div>
  );
};
export default Card;
