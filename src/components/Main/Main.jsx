import { Card } from "../Card/Card.jsx";
import { Input } from "../Input/Input.jsx";
import { data } from "../../data";
import { useState } from "react";
//нужно перебрать keywords и убрать повторяющиеся элементы(использовать set и преобразовать в строку и обратно)

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
  return (
    <main className="main">
      <div className="main__container">
        <Input setInput={setInput} input={input} />
        <div className="main__content">
          {uniqKey
            .filter((elem) =>
              elem.keywords.toLowerCase().includes(input.trim().toLowerCase())
            )
            .map((elem, index) => (
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
