import "./App.css";
import Button from "./components/Button.jsx";
import { ThemaContext } from "./context/Thema.jsx";
import About from "./page/About";
import Home from "./page/Home.jsx";

function App() {
    return <ThemaContext>
      <About />
      <Home />
      {/* <Button type={'submit'}> <p>jdhiufherfiu</p> </Button> */}
    </ThemaContext>;
}

export default App;
