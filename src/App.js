import './App.css';
import AuthScreen from './Pages/AuthScreen/AuthScreen';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import ErrorScreen from './Pages/ErrorScreen/ErrorScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" children={<ErrorScreen></ErrorScreen>} />
            <Route exact path="/:deviceID" children={<ErrorScreen></ErrorScreen>} />
            <Route exact path="/:deviceID/:userID" children={<ErrorScreen></ErrorScreen>} />
            <Route path="/:deviceID/:userID/:temp" children={<AuthScreen></AuthScreen>} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
