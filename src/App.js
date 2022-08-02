import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Main } from "./components/Main/Main.jsx";


//const searchData = fetch('https://emoji.ymatuhin.workers.dev/?')
//  .then(response => response.json())
function App() {

  //const [dataEmoji, setDataEmoji] = useState([]);
  //searchData.then(elem => setDataEmoji(elem));

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
