import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import { Fragment } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "krlia kaam guruji", isCompleted: false },
  ]);

  return (
    <Fragment>
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </Fragment>
  );
};

export default App;
