import { Card } from "../Card/Card.jsx";
import { Input } from "../Input/Input.jsx";
import { useState, useEffect } from "react";

export function Main() {
  const [input, setInput] = useState("");
  const [textInput, setTextInput] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://emoji.ymatuhin.workers.dev?search=${input}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((commits) => setTextInput(commits.filter((elem) => elem)));

    //const filterData = () => commits.filter((elem) => elem);

    return () => controller.abort();
  }, [input]);

  return (
    <main className="main">
      <div className="main__container">
        <Input setInput={setInput} input={input} />
        <div className="main__content">
          {textInput.map((elem, index) => (
            <Card
              key={index}
              title={elem.symbol}
              symbol={elem.title}
              keywords={elem.keywords}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
