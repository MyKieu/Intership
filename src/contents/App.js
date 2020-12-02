
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from '../components/mainLeft/header';
import Basic from '../components/mainLeft/Basic'

function App() {
  return (
    <div className="App">
        {/* <Header />
        <Experience />
        <Education />
        <Skill /> */}
        <BrowserRouter>
          <Switch>

            <Route path="/basic" component={Basic} />
            <Header/>
          </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
