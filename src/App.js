import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Pages/Header/Header';
import NotFound from './components/NotFound/NotFound';
import ServiceAppoinment from './components/ServiceAppoinment/ServiceAppoinment';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path ="/home">
          <Home></Home>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path="/service">
          <Services></Services>
          </Route>
         <Route path="/login">
         <Login></Login>
         </Route>
          <PrivateRoute path="/appointment/:apointmentID">
              <ServiceAppoinment></ServiceAppoinment>
          </PrivateRoute>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
