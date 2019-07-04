import React from 'react';
import { render } from 'react-dom';

const todos =[
  { id: 0, title:"title1" },
  { id: 1, title:"title2" },
  { id: 2, title:"title3" },
  { id: 3, title:"title4" }
];

const deleteTargetId = 2;

const deleteArray = todos.filter( todo => todo.id !== deleteTargetId );

//console.log(deleteArray);

const Todos = ({ todos }) => {
  const list = todos.map( todo => {
    return (
      //keyを設定しないとkey設定しないと安定しないよみたいは注意をされた
      <li key={todo.id}>
        {todo.id} {todo.title}
      </li>
    );
  });

  return <ul>{list}</ul>;
};

render(<Todos todos={todos}/>, document.getElementById("root"));


