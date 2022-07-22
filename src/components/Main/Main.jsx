import { Card } from "../Card/Card.jsx";
import { Input } from "../Input/Input.jsx";
import { data } from "../../data";
import { useState } from "react";
import Fuse from "fuse.js";

function getUniqKeywords(dataKey) {
  return dataKey.map((elem) => {
    return {
      ...elem,
      keywords: [...new Set(elem.keywords.split(" "))].join(" "),
    };
  });
}
const uniqKey = getUniqKeywords(data);

export function Main() {
  const [input, setInput] = useState("");
  //const inputValue = input.split(" ").filter((elem) => elem.trim());

  const fuse = new Fuse(uniqKey, {
    keys: ["title", "keywords"],
  });

  const results = fuse.search(input);
  const titleResults = input ? results.map((elem) => elem.item) : uniqKey;

  //function setInputs({ currentTarget = {} }) {
  //  const { value } = currentTarget;
  //  setInput(value);
  //}

  return (
    <main className="main">
      <div className="main__container">
        <Input setInput={setInput} input={input} />
        <div className="main__content">
          {titleResults.map((elem, index) => (
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
