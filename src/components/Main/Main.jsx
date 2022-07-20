import { Card } from "../Card/Card.jsx";
import { Input } from "../Input/Input.jsx";
import { data } from "../../data";

//нужно перебрать keywords и убрать повторяющиеся элементы(использовать set и преобразовать в строку и обратно)

function getUniqKeywords(data) {
  return data.map((elem) => {
    return {
      ...elem,
      keywords: [...new Set(elem.keywords.split(" "))].join(" "),
    };
  });
}
const uniqKey = getUniqKeywords(data);

export function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Input />
        <div className="main__content">
          {uniqKey.map((elem, index) => (
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
