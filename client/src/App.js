import Home from './components/Home';
import Navbar from './components/Navbar';
import Mens from './components/Mens';
import Womens from './components/Womens';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mens">
              <Mens />
            </Route>
            <Route path="/womens">
              <Womens />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
