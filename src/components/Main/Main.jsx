import { Card } from "./Card.jsx";
//нужно перебрать keywords и убрать повторяющиеся элементы(использовать set и преобразовать в строку и обратно)

export function Main({ data }) {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__search">
          <input
            id="main__input"
            className="main__input"
            placeholder="emoji search"
            type="text"
          />
        </div>
        <div className="main__content">
          <Card />
        </div>
      </div>
    </main>
  );
}
