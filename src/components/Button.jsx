export default function Button(props) {
  console.log(props.color);
  return (
    <button
      style={{ backgroundColor: props.color, color: props.textColor }}
      className="button"
    >
      {props.children}
    </button>
  );
}
