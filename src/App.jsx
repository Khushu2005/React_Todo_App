import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import { Fragment } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "krlia kaam guruji", isCompleted: false },
  ]);

  return (
    <div className=" relative h-screen w-screen  bg-slate-900">
      <h1 className="text-6xl font-bold text-center text-slate-100  pt-5">Daily Tracker</h1>
      <Create todos={todos} setTodos={setTodos} />

      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
