import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Title from "./Title";
import Clearer from "./Clearer";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Last from "./Last";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Navbar />
            <Clearer />
            <Title />
            <First />
            <Second />
            <Third />
            <Last />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
