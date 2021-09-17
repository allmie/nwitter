import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Auth from 'routes/Auth';
import Navigation from './Navigation';
import Profile from 'routes/Profile';

const MainRouter = ({ isLogin }) => {
  return (
    <Router>
      {isLogin && <Navigation />}
      <Switch>
        {isLogin ? (
          <>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/profile'>
              <Profile />
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
