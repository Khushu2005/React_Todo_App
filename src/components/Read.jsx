import { Fragment } from "react";
import "./Read.css";
const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id != id);
    setTodos(filtertodo);
  };
  const data = {
    lineHeight: "38px",
    fontSize: "20px",
    color: "bisque",
  };
  const button = {
    color: "white",
    backgroundColor: "tomato",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "16px",
    boxShadow: "2px 2px 2px black",
    cursor: "pointer",
    textAlign: "center",
    border: "none",
  };
  const rendertodos = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title} | {"  "}
        <span onClick={() => DeleteHandler(todo.id)} style={button}>
          Delete
        </span>
      </li>
    );
  });
  return (
    <Fragment>
      <h1 className="read_list_heading">Pending Todos</h1>
      <ol style={data}>{rendertodos}</ol>
    </Fragment>
  );};
export default Read;
