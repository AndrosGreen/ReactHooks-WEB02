import React from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import EjemploEffectHook from "./EjemploEffectHook";
import EjemploStateHook from "./EjemploStateHook";
import HelloMessage from "./HelloMessage";
import Timer from "./Timer";
import TodoApp from "./TodoApp";

export default function ExampleNavegacion() {
    return (
      <Container>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/state">Ejemplo State Hook</Link>
            </li>
            <li>
              <Link to="/effect">Ejemplo Effect Hook</Link>
            </li>
            <li>
              <Link to="/todo">TodoApp</Link>
            </li>
            <li>
              <Link to="/hello">Hello Message</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Routes>
            <Route exact path="/"  element={<Home />}> 
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
            </Route>
            <Route path="/state" element={<EjemploStateHook/>}/>
            <Route path="/effect" element={<EjemploEffectHook/>}/>
            <Route path="/todo" element={<TodoApp/>}/>
            <Route path="/hello" element={<HelloMessage/>}/>
            <Route path="/timer" element={<Timer/>}/>
          </Routes>
        </div>
      </Router>
      </Container>
    );
  }

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  
  