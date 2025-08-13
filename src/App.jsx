import React  from "react";
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {


  return (
    <div className=" relative h-screen w-screen  bg-slate-900">
      <h1 className="text-6xl font-bold text-center text-slate-100  pt-5">Daily Tracker</h1>
      <Create />

      <Read />
    </div>
  );
};

export default App;
