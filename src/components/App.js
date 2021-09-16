import { useState } from 'react';
import { authService } from 'fbase';
import MainRouter from 'components/Router';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setInit(true);
    });
  }, []);

  return init ? <MainRouter isLogin={isLogin} /> : 'Initialized....';
};

export default App;
