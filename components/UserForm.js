import { useEffect, useRef, useState } from "react";

function UserForm({ onSubmit }) {
  const inputRef = useRef();
  const [email, setEmail] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(email);
      }}
    >
      <input
        type="email"
        placeholder="client@mail.com"
        value={email}
        ref={inputRef}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit" disabled={!email}>
        Render widget
      </button>
    </form>
  );
}

export { UserForm };
