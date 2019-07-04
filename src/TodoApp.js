import React from "react";

import { AddTodo } from "./component/AddTodo";
import { List } from "./component/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>TodoApps</h2>
        <AddTodo />
        <List />
      </div>
    );
  }
};
