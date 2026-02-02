import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Customer Support AI</h1>
      <nav>
        <Link to="/">New Query?</Link>
        <Link to="/history">Past Conversations</Link>
      </nav>
    </header>
  );
}
