export default function Message({ type, text }) {
  return (
    <div className={`message ${type}`}>
      <p>{text}</p>
      {type === "ai" && <div className="feedback">👍 👎</div>}
    </div>
  );
}
