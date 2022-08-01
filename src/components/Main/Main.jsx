import { Card } from "../Card/Card.jsx";
import { Input } from "../Input/Input.jsx";
//import { data } from "../../data";
import { useState, useEffect } from "react";
//import Fuse from "fuse.js";

//function getUniqKeywords(dataKey) {
//  return dataKey.map((elem) => {
//    return {
//      ...elem,
//      keywords: [...new Set(elem.keywords.split(" "))].join(" "),
//    };
//  });
//}

//const getUniqKeyData = getUniqKeywords(data);

export function Main({ data }) {
  const [input, setInput] = useState("");
  const [textInput, setTextInput] = useState([]);

  const filterData = textInput.length > 0 ? textInput : data;

  useEffect(() => {
    let ignore = false;

    const searchData = fetch(
      `https://emoji.ymatuhin.workers.dev/?search=${input}`
    )
      .then((response) => response.json())
      .then((commits) => setTextInput(commits));
    if (!ignore) {
      setTextInput(searchData);
    }
    return () => {
      ignore = true;
    };
  }, [input]);

  return (
    <main className="main">
      <div className="main__container">
        <Input setInput={setInput} input={input} />
        <div className="main__content">
          {filterData.map((elem, index) => (
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
