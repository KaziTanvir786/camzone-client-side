import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ScrollToTop from './hooks/ScrollToTop';
import Dashboard from './components/Dashboard/Dashboard';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop></ScrollToTop>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/order/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;