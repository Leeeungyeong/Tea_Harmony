import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './TEA/common/util/hoc/auth';
// pages for this product
import LandingPage from './TEA/common/layout/LandingPage/LandingPage';
import LoginPage from './TEA/common/member/page/LoginPage/LoginPage';
import RegisterPage from './TEA/common/member/page/RegisterPage/RegisterPage';
import NavBar from './TEA/common/layout/NavBar/NavBar';
import Footer from './TEA/common/layout/Footer/Footer';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
