import React from "react";
// import "./App.css";
import Hello from "./components/Hello";
import Array from "./components/Array";
import ThreeDots from "./components/ThreeDots";
import UseEffect from "./components/UseEffect";
import GithubApi from "./components/GithubApi";
import ComponentA from "./components/contextApi/ComponentA";
import Todo from "./TodoApp/Todo";
import Music from "./MusicApp/Music";
import Signup from "./MusicApp/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Basic from './components/Basic';
import CartData from "./components/CartData";
import Demo from "./components/Demo";
import FormValidation from "./components/FormValidation";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     {/* <Hello/> */}
    //     {/* <Array /> */}
    //     {/* <ThreeDots /> */}
    //     {/* <UseEffect/> */}
    //     {/* <GithubApi/> */}
    //     {/* <ComponentA/> */}
    //     {/* <Todo/>/ */}
    //     <Basic/>
    //     <Switch>
    //       <Route exact path="/" component={Signup} />
    //       <Route exact path="/login" component={Music} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
    <div className="App">
      {/* <Hello/> */}
      {/* <Demo/> */}
      <FormValidation/>
    </div>
  );
};

export default App;
