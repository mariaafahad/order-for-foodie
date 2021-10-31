

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Header/Navbar';
import ManageServices from './Components/ManageServices/ManageServices';
import NewService from './Components/NewService/NewService';
import Services from './Components/Services/Services';
import AuthProvider from './Contexts/AuthProvider';
import Order from './Order/Order';
import Page from './Page/Page';

import SpecialServices from './SpecialServices/SpecialServices';


function App() {

  return (



    <AuthProvider>
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
          <Route path="/newService">
            <NewService />
          </Route>
          <Route path="/order" component={Order} />
          <Route path='/addservices'>
            <ManageServices></ManageServices>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>


  );
}

export default App;
