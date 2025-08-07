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
  // const button = {
  //   color: "white",
  //   backgroundColor: "transparent",
  //   padding: "5px 10px",
  //   borderRadius: "5px",
  //   fontSize: "18px",
  //   boxShadow: "2px 2px 4px black",
  //   cursor: "pointer",
  //   textAlign: "center",
  //   margin: "-20px 30px",
  //   display: "block",
  // };
  // const heading = {
  //   fontSize: "47px",
  //   fontWeight: "bold",
  //   margin: "28px 30px",
  //   color: "cadetblue",
  // };
  // const input = {
  //   padding: "9px",
  //   width: "80%",
  //   maxWidth: "440px",
  //   borderRadius: "6px",
  //   border: "1px solid #ccc",
  //   fontSize: "16px",
  //   outline: "none",
  //   display: "block",
  //   margin: "0 30px",
  //   letterSpacing: "1px",
  // };
  return (
    <div className="  absolute mt-[3%] p-10   w-[40%] h-[80%] bg-slate-800 ml-[18px] mr-[10px] rounded-2xl">
      <h1 className=" font-bold text-[49px] pb-5 text-slate-100"> Add Task</h1>
      <form onSubmit={SubmitHandler}>

        <input
         className="p-2 w-[100%] rounded-[6px] text-slate-400 text-[16px] outline-none border-b-1  bg-slate-700 tracking-wider "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Add your Task..."
        />

        <br /> <br />
        <button 
       className="
  text-white 
  bg-emerald-500
  px-[11px] py-[6px] 
  rounded-[6px] 
  text-[18px] 
  shadow-[2px_2px_4px_black] 
  cursor-pointer 
  text-center 
  block 
  mt-4
 
"
        >Create Todo</button>

      </form>


    </div>
  );
};

export default Create;
