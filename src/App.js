import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantsContainer from './containers/RestaurantsContainer';
import Homepage from './components/Homepage';
import MyNavbar from './components/MyNavbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <MyNavbar />
       <Route exact path="/" component={Homepage} />
       <Route path="/restaurants" component={RestaurantsContainer} />
    </div>
  );
}

export default App;
