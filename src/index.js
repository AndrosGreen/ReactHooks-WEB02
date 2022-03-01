import React from 'react';
import ReactDOM from 'react-dom';

import ExampleReactBoostrap from './exampleractboostrap.js';

import   ExampleNavegacion  from './examplenavegacion.js';
import 'bootstrap/dist/css/bootstrap.css';

import './miscss.css'

function Avatar(props){
  return(
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
        <Avatar user={props.user} />
         <div className="UserInfo-name">
          {props.user.name}
        </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}  />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date }
      </div>
    </div>
  );
}

/*ReactDOM.render(
  <ExampleReactBoostrap />,
  document.getElementById('root')
);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);*/

ReactDOM.render(
    <ExampleNavegacion />
  ,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
