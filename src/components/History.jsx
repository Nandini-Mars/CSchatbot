export default function History() {
  const history = JSON.parse(localStorage.getItem("conversations")) || [];

  return (
    <section>
      <h2>Past Conversations</h2>
      {history.map((msg, i) => (
        <p key={i}>{msg.text}</p>
      ))}
    </section>
  );
}
