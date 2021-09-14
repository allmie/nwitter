import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const MainRouter = () => {
  const [isLogin, setLogin] = useState(false);

  return (
    <Router>
      <Switch>
        {isLogin ? (
          <>
            <Route exact path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route exact path='/'>
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default MainRouter;
