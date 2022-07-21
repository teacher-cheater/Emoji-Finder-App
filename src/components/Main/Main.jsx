import { Card } from "../Card/Card.jsx";
import { Input } from "../Input/Input.jsx";
import { data } from "../../data";
import { useState } from "react";
//нужно перебрать keywords и убрать повтор-яющиеся элементы(использовать set и преобразовать в строку и обратно)

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
  const inputValue = input.split(" ").filter((elem) => elem.trim());

  return (
    <main className="main">
      <div className="main__container">
        <Input setInput={setInput} input={input} />
        <div className="main__content">
          {uniqKey
            .filter((elem) =>
              inputValue.every(
                (elemSearch) =>
                  elem.keywords.toLowerCase().includes(elemSearch) ||
                  elem.title.toLowerCase().includes(elemSearch)
              )
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
