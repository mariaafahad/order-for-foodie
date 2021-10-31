
import { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Header/Navbar';
import Login from './Components/Login/Login';
import ManageServices from './Components/ManageServices/ManageServices';
import NewService from './Components/NewService/NewService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import AuthProvider from './Contexts/AuthProvider';
import useFirebase from './hooks/useFirebase';
import Order from './Order/Order';
import Page from './Page/Page';
import SpecialServices from './SpecialServices/SpecialServices';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/home">
            <Page></Page>
          </Route>
          <Route exact path="/">
            <Page></Page>
          </Route>
          <Route path="/foodService">
            <Services></Services>
          </Route>
          <Route path="/special">
            <SpecialServices></SpecialServices>
          </Route>
          <PrivateRoute path="/newService">
            <NewService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <Route path='/addservices'>
            <ManageServices></ManageServices>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
