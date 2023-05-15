import "./Button.css";

export default function Button(props) {
  return (
    <div className={props.classes}>
      {props.text}
      <div className="children"> {props.children} </div>
    </div>
  );
}
