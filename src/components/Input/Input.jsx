export function Input({ input, setInput }) {
  return (
    <div className="main__search">
      <input
        value={input}
        id="main__input"
        className="main__input"
        placeholder="emoji search"
        type="text"
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
}
