import { About } from "./components";
import {Contact} from "./components";
import {Home}from "./components";
import {Navbar} from "./components";
import {Skills }from "./components";
import {Work} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
