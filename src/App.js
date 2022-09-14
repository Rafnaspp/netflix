import "./App.css"
import Banner from "./components/Banner/Banner";

import NavBar from './components/NavBar/NavBar';
import RowPost from "./components/RowPost/RowPost";
import { action,originals } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Original'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
