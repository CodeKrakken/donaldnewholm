import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Code from './components/Code/Code'
import Music from './components/Music/Music'
import Error from './components/Error/Error'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/code' component={Code} />
        <Route path='/music' component={Music} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
