import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="new-chat">
        <span>New Query?</span>
        <Link to="/">+</Link>
      </div>

      <Link to="/history">
        <button>Past Conversations</button>
      </Link>
    </aside>
  );
}
