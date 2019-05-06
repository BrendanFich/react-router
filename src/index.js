import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <button>欢迎</button>
        </Link>
        <Link to="/register">
          <button>登录</button>
        </Link>
        <Link to="/welcome">
          <button>注册</button>
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
