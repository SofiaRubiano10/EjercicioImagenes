import './App.css';
import GlobalStyles from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Contact from './pages/Home/Contact/contact';

function App() {
  return (
    <div className="App">
    	<Router>
			<GlobalStyles />
			<Switch>
				<Route path= "/" exact component={Home} />
				<Route path= "/contact" exact component={Contact} />
			</Switch>
		</Router>
    </div>
  );
}

export default App;

