import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import About from "./pages/About";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <ToastContainer position="top-center" />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/add" component={AddEdit} />
               <Route exact path="/update/:id" component={AddEdit} />
               <Route exact path="/view/:id" component={View} />
               <Route exact path="/about" component={About} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
