// import { Fragment } from "react";

const Read = (props) => {

  const todos = props.todos;
  const setTodos = props.setTodos;

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id != id);
    setTodos(filtertodo);
  };

  // const data = {
  //   lineHeight: "38px",
  //   fontSize: "20px",
  //   color: "bisque",
  // };
  // const button = {
  //   color: "white",
  //   backgroundColor: "tomato",
  //   padding: "5px 10px",
  //   borderRadius: "5px",
  //   fontSize: "16px",
  //   boxShadow: "2px 2px 2px black",
  //   cursor: "pointer",
  //   textAlign: "center",
  //   border: "none",
  // };

  const rendertodos = todos.map((todo) => {
    return (
      <li className="flex justify-between m-1.5" key={todo.id}>
        {todo.title} . {"  "}
        <span className="
  text-white 
 bg-rose-500
  px-[18px] py-[px] 
  rounded-[5px] 
  text-[16px] 
  shadow-[2px_2px_2px_black] 
  cursor-pointer 
  text-center 
  border-none
  
 
"  onClick={() => DeleteHandler(todo.id)}>Delete</span>
      </li>
    );
  });

  return (
    <div className="ml-[42.5%] absolute bg-slate-800 mt-[3%]  w-[56%] h-[80%] p-10 rounded-2xl" >
      <h1 className="text-slate-100 text-[46px] font-bold  pb-5">Pending Task</h1>
      <ol className="text-[20px] leading-[40px] text-[bisque]">{rendertodos}</ol>
    </div>
  );
};


export default Read;
