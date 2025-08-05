import { nanoid } from "nanoid";
import { Fragment, useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const [title, setTitle] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    const copytodos = [...todos];
    copytodos.push(newtodo);
    setTodos(copytodos);
  };
  const button = {
    color: "white",
    backgroundColor: "transparent",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "18px",
    boxShadow: "2px 2px 4px black",
    cursor: "pointer",
    textAlign: "center",
    margin: "-20px 30px",
    display: "block",
  };
  const heading = {
    fontSize: "47px",
    fontWeight: "bold",
    margin: "28px 30px",
    color: "cadetblue",
  };
  const input = {
    padding: "9px",
    width: "80%",
    maxWidth: "440px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    display: "block",
    margin: "0 30px",
    letterSpacing: "1px",
  };
  return (
    <Fragment>
      <h1 style={heading}>Daily Todo's</h1>
      <form onSubmit={SubmitHandler}>
        <input
          style={input}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Add your Task..."
        />
        <br /> <br />
        <button style={button}>Create Todo</button>
      </form>
      <hr style={{ marginTop: "35px" }} />
    </Fragment>
  );
};

export default Create;
