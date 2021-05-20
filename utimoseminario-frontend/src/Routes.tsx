import Home from 'page/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
 
function Routes() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home  />
        </Route>
        
      </Switch>
      
      </BrowserRouter>


    );
  }
  
  export default Routes;