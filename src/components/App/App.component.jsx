import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';
import ThemeProvider from '../../providers/Theme';
import HomePage from '../../pages/Home';
import Video from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:videoId">
                <Video />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
