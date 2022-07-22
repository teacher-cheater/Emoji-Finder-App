import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Main } from "./components/Main/Main.jsx";


function App() {

  //const fuse = new Fuse(data, {
  //  keys: ["title", "keywords"],
  //});
  //console.log(fuse)

  //const results = fuse.search('100');
  //const titleResults = results.map(result => result.item)
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
