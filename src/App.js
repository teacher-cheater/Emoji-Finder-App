//{data.map((elem, index) => (
//<div className="main__cart">
//  <>
//    <div key={index} className="main__picture">
//      {elem.title}
//    </div>
//    <p key={index} className="main__title">
//      {elem.symbol}
//    </p>
//    <p key={index} className="main__text">
//      {elem.keywords}
//    </p>
//  </>
//  //</div>
//))}

import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Main } from "./components/Main/Main.jsx";
import { data } from "./data";



function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
