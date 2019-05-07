import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './component/button'

function Box1() {
  return <div className="box">欢迎界面</div>;
}
function Box2() {
  return <div className="box">登陆界面</div>;
}
function Box3() {
  return <div className="box">注册界面</div>;
}
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <Button name="欢迎"></Button>
        </Link>
        <Link to="/register">
          <Button name="登录"></Button>
        </Link>
        <Link to="/welcome">
          <Button name="注册"></Button>
        </Link>
        <Route path="/" exact component={Box1} />
        <Route path="/register/" component={Box2} />
        <Route path="/welcome/" component={Box3} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
