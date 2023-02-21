import "./App.css";
import { Header } from "./layouts/Header";
import { Menu } from "./layouts/Menu";
import HomePage from "./modules/home";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage></HomePage>
    </div>
  );
}

export default App;
