import React from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import style from './App.module.scss'
import { Timer } from "../components/Timer/Timer";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
