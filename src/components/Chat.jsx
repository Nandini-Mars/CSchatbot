import { useEffect, useState } from "react";
import responses from "../data/responses.json";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Load previous conversation (if any)
  useEffect(() => {
    const stored = localStorage.getItem("conversations");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
    };

    const key = input.toLowerCase();
    const aiReply = responses[key] || "Sorry, Did not understand your query!";

    const aiMessage = {
      type: "ai",
      text: aiReply,
      liked: null,
    };

    const updated = [...messages, userMessage, aiMessage];
    setMessages(updated);
    setInput("");
  };

  // Save conversation
  const handleSave = () => {
    localStorage.setItem("conversations", JSON.stringify(messages));
  };

  // Thumbs feedback
  const handleThumb = (index, value) => {
    const updated = [...messages];
    updated[index].liked = value;
    setMessages(updated);
  };

  return (
    <main>
      {/* INITIAL UI */}
      {messages.length === 0 && (
        <>
          <div className="greeting">
            <h2>Hi, Please tell me your query!</h2>
            <div className="avatar" />
          </div>

          <div className="suggestions">
            {[
              "Hello",
              "My order has not arrived yet.",
              "How can I reset my password?",
              "I am unable to log in to my account.",
            ].map((q) => (
              <div key={q} className="card" onClick={() => setInput(q)}>
                <strong>{q}</strong>
                <p>Get immediate AI generated response</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CHAT MESSAGES */}
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <p>{msg.text}</p>

            {msg.type === "ai" && (
              <div className="feedback">
                <span
                  style={{
                    cursor: "pointer",
                    color: msg.liked === true ? "green" : "black",
                  }}
                  onClick={() => handleThumb(index, true)}
                >
                  👍
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    color: msg.liked === false ? "red" : "black",
                  }}
                  onClick={() => handleThumb(index, false)}
                >
                  👎
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          placeholder="Please tell me about your query!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Ask</button>

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </main>
  );
}
