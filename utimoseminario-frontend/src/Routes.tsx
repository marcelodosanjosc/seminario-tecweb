import Home from 'page/Home';
import Carro from 'page/Carro';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from 'components/NavBar';
import Cliente from 'page/Cliente';
 
function Routes() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home  />
        </Route>
        <Route path="/carro" exact>
          <Carro  />
        </Route>
        <Route path="/cliente" exact>
          <Cliente  />
        </Route>
      </Switch>
      
      </BrowserRouter>


    );
  }
  
  export default Routes;