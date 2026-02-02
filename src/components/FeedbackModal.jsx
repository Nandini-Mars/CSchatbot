export default function FeedbackModal({ onClose }) {
  return (
    <div className="modal">
      <h3>Rate your experience</h3>
      <div className="stars">⭐⭐⭐⭐⭐</div>
      <textarea placeholder="Share your feedback..." />
      <button onClick={onClose}>Submit</button>
    </div>
  );
}
