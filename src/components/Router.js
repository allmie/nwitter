import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Auth from 'routes/Auth';

const MainRouter = ({ isLogin }) => {
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
