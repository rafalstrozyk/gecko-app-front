import { Switch, Route } from 'react-router-dom';
import Home from 'views/home';
import List from 'views/list';
import Galery from 'views/galery';
import Eating from 'views/eating';

const Root = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/list">
      <List />
    </Route>
    <Route path="/galery">
      <Galery />
    </Route>
    <Route path="/eating">
      <Eating />
    </Route>
  </Switch>
);


export default Root;